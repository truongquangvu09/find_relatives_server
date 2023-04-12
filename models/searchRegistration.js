"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SearchRegistrations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SearchRegistrations.init(
    {
      report_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          notEmpty: true,
        },
      },
      report_birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      report_gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      report_address: {
        type: DataTypes.STRING,
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 20) {
              return true;
            } else {
              throw new Error("độ dài phải từ 5 đến 20");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          checkLen(value) {
            if (value.length === 10) {
              return true;
            } else {
              throw new Error("sdt phải có 10 số");
            }
          },
        },
      },
      cccd: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          checkLen(value) {
            if (value.length === 12) {
              return true;
            } else {
              throw new Error("CCCD phải có 12 số");
            }
          },
        },
      },
      date_report: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      people_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          notEmpty: true,
        },
      },
      people_birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      people_gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      peolpe_address: {
        type: DataTypes.STRING,
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 20) {
              return true;
            } else {
              throw new Error("độ dài phải từ 5 đến 20");
            }
          },
        },
      },
      dad_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          notEmpty: true,
        },
      },
      mom_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          notEmpty: true,
        },
      },
      coal_people_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          notEmpty: true,
        },
      },
      brief_biography: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      searching_process: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_missing: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      last_seen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lost_reason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SearchRegistrations",
      timestamps: true,
    }
  );
  return SearchRegistrations;
};
