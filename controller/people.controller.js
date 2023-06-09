const { Op } = require("sequelize");
const { Peoples } = require("../models/index");
const { Lost_situation } = require("../models/index");
const express = require("express");
const fileUpload = require("express-fileupload");
const sharp = require("sharp");
const getPixels = require("get-pixels");
const path = require("path");
const fs = require("fs");
const app = express();

const createpeople = async (req, res) => {
  const {
    people_name,
    birthday,
    gender,
    address,
    dad_name,
    mom_name,
    coalpeople_name,
    brief_biography,
    searching_process,
  } = req.body;
  const { file } = req;
  if (!file) {
    return res.status(400).send("No image provided");
  }
  const urlImage = `http://localhost:8080/${file.path}`;
  try {
    const newPeople = await Peoples.create({
      people_name,
      birthday,
      gender,
      address,
      dad_name,
      mom_name,
      coalpeople_name,
      brief_biography,
      people_image: urlImage,
      searching_process,
    });
    res.status(200).send(newPeople);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const PeopleList = async (req, res) => {
  const { people_name } = req.query;
  try {
    if (people_name) {
      const list = await Peoples.findAll({
        where: {
          people_name: {
            [Op.like]: `%${people_name}%`,
          },
        },
      });
      res.status(200).send(list);
    } else {
      const lists = await Peoples.findAll();
      res.status(200).send(lists);
    }
  } catch (error) {
    res.status(500).send("not found");
  }
};

const detailPeople = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await Peoples.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(detail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePeople = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Peoples.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

app.use(fileUpload());

async function compareImages1(image1Path, image2Path) {
  const image1Buffer = await sharp(image1Path).toBuffer();
  const image2Buffer = await sharp(image2Path).toBuffer();

  return new Promise((resolve, reject) => {
    getPixels(image1Path, (err, pixels1) => {
      if (err) return reject(err);

      getPixels(image2Path, (err, pixels2) => {
        if (err) return reject(err);

        const width = Math.min(pixels1.shape[0], pixels2.shape[0]);
        const height = Math.min(pixels1.shape[1], pixels2.shape[1]);

        let totalDiff = 0;
        let numPixels = 0;

        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            const r1 = pixels1.get(x, y, 0);
            const g1 = pixels1.get(x, y, 1);
            const b1 = pixels1.get(x, y, 2);

            const r2 = pixels2.get(x, y, 0);
            const g2 = pixels2.get(x, y, 1);
            const b2 = pixels2.get(x, y, 2);

            const diff =
              Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);
            totalDiff += diff;

            numPixels += 1;
          }
        }

        resolve(totalDiff / numPixels);
      });
    });
  });
}

async function compareImages(image1Path, image2Path) {
  const image1Resized = sharp(image1Path)
    .resize(8, 8)
    .toColorspace("gray16")
    .normalize()
    .toColorspace("srgb");

  const image2Resized = sharp(image2Path)
    .resize(8, 8)
    .toColorspace("gray16")
    .normalize()
    .toColorspace("srgb");
  const image1ResizedBuffer = await image1Resized
    .raw()
    .toBuffer({ resolveWithObject: true });
  const image2ResizedBuffer = await image2Resized
    .raw()
    .toBuffer({ resolveWithObject: true });

  return new Promise((resolve, reject) => {
    const pixels1 = image1ResizedBuffer.data;
    const pixels2 = image2ResizedBuffer.data;

    const width = Math.min(
      image1ResizedBuffer.info.width,
      image2ResizedBuffer.info.width
    );
    const height = Math.min(
      image1ResizedBuffer.info.height,
      image2ResizedBuffer.info.height
    );

    let totalDiff = 0;
    let numPixels = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const index1 = (y * image1ResizedBuffer.info.width + x) * 3;
        const index2 = (y * image2ResizedBuffer.info.width + x) * 3;

        const r1 = pixels1[index1];
        const g1 = pixels1[index1 + 1];
        const b1 = pixels1[index1 + 2];

        const r2 = pixels2[index2];
        const g2 = pixels2[index2 + 1];
        const b2 = pixels2[index2 + 2];

        const diff = Math.abs(r1 - r2) + Math.abs(g1 - g2) + Math.abs(b1 - b2);
        totalDiff += diff;

        numPixels += 1;
      }
    }

    resolve(totalDiff / numPixels);
  });
}

const getUserByImage = async (imagePath) => {
  const user = await Peoples.findOne({
    where: {
      people_image: {
        [Op.like]: `%${imagePath}%`,
      },
    },
  });
  return user;
};

const imageSearches = async (req, res) => {
  const { file } = req;
  const urlImage = `${file.path}`;

  const uploadedImagePath = urlImage;

  let bestScore = Infinity;
  let bestImage = null;

  for (const image of fs.readdirSync(
    path.join(__dirname, "../public/images/people_image")
  )) {
    const imagePath = path.join(
      __dirname,
      "../public/images/people_image",
      image
    );

    const score = await compareImages(uploadedImagePath, imagePath);

    if (score < bestScore) {
      bestScore = score;
      bestImage = imagePath;
    }
  }
  const bestImagePath = `${bestImage.slice(66)}`;
  console.log({ bestImagePath });
  const user = await getUserByImage(bestImagePath);
  console.log({ user });
  res.status(200).send(user);
};

const detailImage = async (req, res) => {
  const { people_image } = req.query;
  try {
    if (people_image) {
      const peopleSearch = await Peoples.findOne({
        where: {
          people_image: {
            [Op.like]: `%${people_image}%`,
          },
        },
      });
      res.status(200).send(peopleSearch);
    } else {
      res.status(404).send("không có thông tin người cần tìm");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const advancedSearch = async (req, res) => {
  const {
    people_name,
    birthday,
    address,
    dad_name,
    mom_name,
    coalpeople_name,
  } = req.query;

  try {
    let whereClause = {};

    // Kiểm tra các giá trị query được gửi lên
    if (people_name) {
      whereClause.people_name = { [Op.like]: `%${people_name}%` };
    }
    if (birthday) {
      whereClause.birthday = { [Op.eq]: new Date(birthday) };
    }
    if (address) {
      whereClause.address = { [Op.like]: `%${address}%` };
    }
    if (dad_name) {
      whereClause.dad_name = { [Op.like]: `%${dad_name}%` };
    }
    if (mom_name) {
      whereClause.mom_name = { [Op.like]: `%${mom_name}%` };
    }
    if (coalpeople_name) {
      whereClause.coalpeople_name = { [Op.like]: `%${coalpeople_name}%` };
    }

    // Thực hiện truy vấn chỉ khi có ít nhất một tham số tìm kiếm được gửi lên
    if (Object.keys(whereClause).length > 0) {
      const peopleSearch = await Peoples.findAll({ where: whereClause });
      res.status(200).send(peopleSearch);
    } else {
      res.status(404).send("Không tìm thấy thông tin người cần tìm");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createpeople,
  PeopleList,
  detailPeople,
  deletePeople,
  imageSearches,
  detailImage,
  advancedSearch,
};
