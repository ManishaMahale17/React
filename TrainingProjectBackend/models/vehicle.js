import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class vehicle extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    vehicleno: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    vehiclename: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vehicletype: {
      type: DataTypes.ENUM("Truck","Bus","Four Wheeler","Three Wheeler","Two Wheeler"),
      allowNull: true
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
    tableName: 'vehicle',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vehicle_pkey",
        unique: true,
        fields: [
          { name: "vehicleno" },
        ]
      },
    ]
  });
  }
}
