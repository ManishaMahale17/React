import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class administrator extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    vehicleno: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'vehicle',
        key: 'vehicleno'
      }
    },
    allocatedto: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'employee',
        key: 'empno'
      }
    },
    servicestatus: {
      type: DataTypes.ENUM("Idle","InProgress","Complete","Ready"),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'administrator',
    schema: 'public',
    timestamps: false
  });
  }
}
