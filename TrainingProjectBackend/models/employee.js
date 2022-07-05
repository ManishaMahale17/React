import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employee extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    empno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    empname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    emptype: {
      type: DataTypes.ENUM("Admin","Accountant","Manager","Lead","Worker","Representative"),
      allowNull: true
    },
    mobileno: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    emailid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    empstatus: {
      type: DataTypes.ENUM("Available","Partially-Available","Not Available"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "empno" },
        ]
      },
    ]
  });
  }
}
