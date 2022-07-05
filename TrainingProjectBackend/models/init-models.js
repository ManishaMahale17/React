import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _employees from  "./employees.js";
import _registration from  "./registration.js";
import _role from  "./role.js";
import _status from  "./status.js";
import _userinformation from  "./userinformation.js";

export default function initModels(sequelize) {
  const employees = _employees.init(sequelize, DataTypes);
  const registration = _registration.init(sequelize, DataTypes);
  const role = _role.init(sequelize, DataTypes);
  const status = _status.init(sequelize, DataTypes);
  const userinformation = _userinformation.init(sequelize, DataTypes);

  employees.belongsTo(role, { as: "role", foreignKey: "roleid"});
  role.hasMany(employees, { as: "employees", foreignKey: "roleid"});
  userinformation.belongsTo(role, { as: "role", foreignKey: "roleid"});
  role.hasMany(userinformation, { as: "userinformations", foreignKey: "roleid"});
  registration.belongsTo(status, { as: "status", foreignKey: "statusid"});
  status.hasMany(registration, { as: "registrations", foreignKey: "statusid"});

  return {
    employees,
    registration,
    role,
    status,
    userinformation,
  };
}
