import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class department extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    deptno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    deptname: {
      type: DataTypes.ENUM("Washing","Cleaning","Servicing","Parts Replacement"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "deptno" },
        ]
      },
    ]
  });
  }
}
