import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class billing extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    custno: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'customer',
        key: 'custno'
      }
    },
    quantity: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    partname: {
      type: DataTypes.ENUM("OIL","CLUTCH CABLE","HORN","HEAD LIGHT","TAIL LIGHT","STAIRING WHEEL","HANDLE","INDICATOR","LOCK SET","CHAIN SPOCKET"),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalamount: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'billing',
    schema: 'public',
    timestamps: false
  });
  }
}
