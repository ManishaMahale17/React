CREATE TYPE DeptName_t AS ENUM('Washing','Cleaning','Servicing','Parts Replacement');
CREATE TABLE Department(
	DeptNo varchar(50) Not Null,
	DeptName DeptName_t,
	Primary Key(DeptNo)
);
SELECT * FROM Department;

CREATE TYPE Status_t AS ENUM('Idle','InProgress','Complete','Ready');
CREATE TABLE Service(
	ServiceId varchar(50) Not Null,
	StartDate date Not Null,
	ExpectedEndDate date Not Null,
	ManagerName varchar(100) Not Null,
	LeadName varchar(100) Not Null,
	WorkerName varchar(100) Not Null,
	DeptNo varchar(50) Not Null,
	Status Status_t,
	Primary Key(ServiceId),
	Foreign Key(DeptNo) References Department(DeptNo)
);
SELECT * FROM Service;

CREATE TYPE vehicle_type AS ENUM('Truck','Bus','Four Wheeler','Three Wheeler','Two Wheeler');
CREATE TABLE Vehicle(
	VehicleNo varchar(100) Not Null,
	VehicleName varchar(100) Not Null,
	VehicleType vehicle_type,
	ServiceId varchar(50) Not Null,
	Primary Key(VehicleNo),
	Foreign Key(ServiceId) References Service(ServiceId)
);

SELECT * FROM Vehicle;

CREATE TABLE Customer(
	CustNo integer Not Null,
	CustName varchar(100) Not Null,
	MobileNo varchar(10) Not Null,
	LandlineNo varchar(20) Not Null,
	EmailId varchar(100) Not Null,
	AddressLine1 varchar(255) Not Null,
	AddressLine2 varchar(255) Not Null,
	City varchar(50) Not Null,
	Country varchar(50) Not Null,
	PostalCode varchar(10) Not Null,
	VehicleNo varchar(50) Not Null,
	Primary Key(CustNo),
	Foreign Key(VehicleNo) References Vehicle(VehicleNo)
);

SELECT * FROM CUSTOMER;

CREATE TYPE Employee_Type AS ENUM('Admin','Accountant','Manager','Lead','Worker', 'Representative' );
CREATE TYPE Emp_Status AS ENUM('Available','Partially-Available','Not Available');
CREATE TABLE Employee(
	EmpNo varchar(50) Not Null,
	EmpName varchar(100) Not Null,
	EmpType Employee_Type,
	MobileNo varchar(10) Not Null,
	EmailId varchar(50) Not Null,
	EmpStatus Emp_Status,
	Primary Key(EmpNo)
);
SELECT *FROM Employee;

CREATE TABLE AllocateService(
	VehicleNo varchar(100) Not Null,
	EmpNo varchar(50) Not Null,
	ServiceId varchar(50) Not Null,
	Foreign Key(VehicleNo) References Vehicle(VehicleNo),
	Foreign Key(EmpNo) References Employee(EmpNo),
	Foreign Key(ServiceId) References Service(ServiceId)
);
SELECT *FROM AllocateService;

CREATE TYPE Parts AS ENUM('OIL','CLUTCH CABLE','HORN','HEAD LIGHT','TAIL LIGHT','STAIRING WHEEL','HANDLE','INDICATOR','LOCK SET','CHAIN SPOCKET');


CREATE TABLE Administrator(
	VehicleNo varchar(100) Not Null,
	AllocatedTo varchar(100) Not Null,
	ServiceStatus Status_t,
	Foreign Key(VehicleNo) References Vehicle(VehicleNo),
	Foreign Key(AllocatedTo) References Employee(EmpNo) 
);
SELECT *FROM Administrator;

CREATE TABLE Billing(
	CustNo smallint Not Null,
	Quantity varchar(100) Not Null,
	PartName Parts,
	Price integer Not Null,
	TotalAmount bigint Not Null,
	Foreign Key(CustNo) References Customer(CustNo)
);
SELECT *FROM Billing;


