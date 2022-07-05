import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class registration extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    registrationid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vehiclenumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    workeridid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serviceleadid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    servicemanagerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serviceregistrationdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    actualservicestartdate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    expectedserviceenddate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    actualserviceenddate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    statusid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'statusid'
      }
    },
    numberofservices: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'registration',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "registration_pkey",
        unique: true,
        fields: [
          { name: "registrationid" },
        ]
      },
    ]
  });
  }
}
