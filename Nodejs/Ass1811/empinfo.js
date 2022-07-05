var EmployeeLogic = function(){

    this.departments = ['IT','HRD', 'ACCOUNTS','SALES', 'TRAINING'];

   

    this.employess = [

        {EmpNo:101, EmpName:"Manisha", DeptName:"IT", Salary:80000},
        {EmpNo:102, EmpName:"Vaibhav", DeptName:"SALES", Salary:60000},
        {EmpNo:103, EmpName:"Shital", DeptName:"HRD", Salary:50000},
        {EmpNo:104, EmpName:"Ajit", DeptName:"TRAINING", Salary:66000},
        {EmpNo:105, EmpName:"Suraj", DeptName:"ACCOUNTS", Salary:30000},
        {EmpNo:106, EmpName:"Shreyash", DeptName:"SALES", Salary:20000},

    ];

    

    this.addEmployee = function(emp){

        this.employess.push(emp);

        return this.employess;

    };

    

    this.getEmployees = function(){

        return this.employess;

    };

};