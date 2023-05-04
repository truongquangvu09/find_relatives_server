"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Search_registrations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Report, Peoples, Post, Lost_situation }) {
      // define association here
      this.belongsTo(Report, { foreignKey: "report_id" });
      this.belongsTo(Peoples, { foreignKey: "people_id" });
      this.belongsTo(Lost_situation, { foreignKey: "lostSituation_id" });
      this.hasOne(Post, { foreignKey: "searchRegistrations_id" });
    }
  }
  Search_registrations.init(
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
        allowNull: false,
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 20) {
              return true;
            } else {
              throw new Error("length must be from 5 to 20");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          checkLen(value) {
            if (value.length === 10) {
              return true;
            } else {
              throw new Error("must be 10 numbers");
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
              throw new Error("CCCD must be 12 numbers");
            }
          },
        },
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

      people_address: {
        type: DataTypes.STRING,
        validate: {
          checkLen(value) {
            if (value.length >= 5 && value.length <= 20) {
              return true;
            } else {
              throw new Error("length must be from 5 to 20");
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
      people_image: {
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
        defaultValue: "Chưa xác nhận",
      },
    },
    {
      sequelize,
      modelName: "Search_registrations",
      timestamps: true,
    }
  );
  return Search_registrations;
};
