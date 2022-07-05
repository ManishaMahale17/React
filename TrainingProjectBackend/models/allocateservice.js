import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class allocateservice extends Model {
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
    empno: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'employee',
        key: 'empno'
      }
    },
    serviceid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'service',
        key: 'serviceid'
      }
    }
  }, {
    sequelize,
    tableName: 'allocateservice',
    schema: 'public',
    timestamps: false
  });
  }
}
