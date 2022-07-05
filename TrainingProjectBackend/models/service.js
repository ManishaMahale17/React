import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class service extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    serviceid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    startdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expectedenddate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    managername: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    leadname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    workername: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    deptno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'department',
        key: 'deptno'
      }
    },
    status: {
      type: DataTypes.ENUM("Idle","InProgress","Complete","Ready"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'service',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "service_pkey",
        unique: true,
        fields: [
          { name: "serviceid" },
        ]
      },
    ]
  });
  }
}
