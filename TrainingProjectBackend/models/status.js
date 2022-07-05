import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class status extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    statusid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    statusname: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "status_pkey",
        unique: true,
        fields: [
          { name: "statusid" },
        ]
      },
    ]
  });
  }
}
