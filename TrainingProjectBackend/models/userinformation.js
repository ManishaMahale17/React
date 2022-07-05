import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class userinformation extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    customerid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customername: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    roleid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'role',
        key: 'roleid'
      }
    },
    userpassword: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    primarycontactnumber: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mobilenumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    landline: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userinformation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "userinformation_pkey",
        unique: true,
        fields: [
          { name: "customerid" },
        ]
      },
    ]
  });
  }
}
