import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class customer extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    custno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    custname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mobileno: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    landlineno: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    emailid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    addressline1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    addressline2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postalcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    vehicleno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'vehicle',
        key: 'vehicleno'
      }
    }
  }, {
    sequelize,
    tableName: 'customer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "customer_pkey",
        unique: true,
        fields: [
          { name: "custno" },
        ]
      },
    ]
  });
  }
}
