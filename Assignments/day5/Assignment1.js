var Employees  = [
         { EmpNo: "1", EmpName: "George", DeptName: "IT", Designation: "Developer", Salary: "30000" },
         { EmpNo: "2", EmpName: "James", DeptName: "CS", Designation: "TESTER", Salary: "40000" },
         { EmpNo: "3", EmpName: "Robert", DeptName: "ETC", Designation: "Developer", Salary: "30000" },
         { EmpNo: "4", EmpName: "Gemes", DeptName: "MECH", Designation: "TRAINER", Salary: "20000" },
         { EmpNo: "5", EmpName: "Gargi", DeptName: "CIVIL", Designation: "MANAGER", Salary: "40000" },
         { EmpNo: "6", EmpName: "Leena", DeptName: "IT", Designation: "TESTER", Salary: "30000" },
         { EmpNo: "7", EmpName: "Savita", DeptName: "CS", Designation: "Developer", Salary: "30000" },
         { EmpNo: "8", EmpName: "Vaibhav", DeptName: "ETC", Designation: "TESTER", Salary: "34000" },
         { EmpNo: "9", EmpName: "Ajit", DeptName: "MECH", Designation: "Developer", Salary: "30000" },
         { EmpNo: "10", EmpName: "Heera", DeptName: "CIVIL", Designation: "MANAGER", Salary: "30000" },
         { EmpNo: "11", EmpName: "Shanu", DeptName: "IT", Designation: "TRAINER", Salary: "20000" },
         { EmpNo: "12", EmpName: "Meena", DeptName: "CS", Designation: "Developer", Salary: "30000" },
         { EmpNo: "13", EmpName: "Gita", DeptName: "IT", Designation: "TESTER", Salary: "30000" },
         { EmpNo: "14", EmpName: "Payal", DeptName: "MECH", Designation: "Developer", Salary: "50000" },
         { EmpNo: "15", EmpName: "Shrikant", DeptName: "IT", Designation: "TESTER", Salary: "30000" },
         { EmpNo: "16", EmpName: "Sheetal", DeptName: "CS", Designation: "Developer", Salary: "30000" },
         { EmpNo: "17", EmpName: "Sangam", DeptName: "CIVIL", Designation: "TRAINER", Salary: "30000" },
         { EmpNo: "18", EmpName: "Prasad", DeptName: "ETC", Designation: "TESTER", Salary: "30000" },
         { EmpNo: "19", EmpName: "Pallavi", DeptName: "MECH", Designation: "Developer", Salary: "30000" },
         { EmpNo: "20", EmpName: "Sweety", DeptName: "IT", Designation: "Developer", Salary: "36000" },
         { EmpNo: "21", EmpName: "Mithila", DeptName: "CS", Designation: "Developer", Salary: "30000" },
         { EmpNo: "22", EmpName: "Javed", DeptName: "IT", Designation: "TESTER", Salary: "39000" },
         { EmpNo: "23", EmpName: "Faran", DeptName: "ETC", Designation: "TRAINER", Salary: "30000" },
         { EmpNo: "24", EmpName: "Sheema", DeptName: "IT", Designation: "Developer", Salary: "50000" },
         { EmpNo: "25", EmpName: "Riya", DeptName: "CIVIL", Designation: "TRAINER", Salary: "30000" },
         { EmpNo: "26", EmpName: "Sharda", DeptName: "IT", Designation: "TESTER", Salary: "30000" },
         { EmpNo: "27", EmpName: "Sangram", DeptName: "IT", Designation: "Developer", Salary: "30000" },
         { EmpNo: "28", EmpName: "Vikram", DeptName: "CS", Designation: "TRAINER", Salary: "30000" },
         { EmpNo: "29", EmpName: "Komal", DeptName: "IT", Designation: "Developer", Salary: "30000" },
         { EmpNo: "30", EmpName: "Jyotika", DeptName: "IT", Designation: "Developer", Salary: "30000" },
         { EmpNo: "31", EmpName: "Hitesh", DeptName: "MECH", Designation: "MANAGER", Salary: "30000" },
         { EmpNo: "32", EmpName: "Hiral", DeptName: "CIVIL", Designation: "TRAINER", Salary: "30000" },
         { EmpNo: "33", EmpName: "Mayuri", DeptName: "CS", Designation: "TESTER", Salary: "30000" },
         { EmpNo: "34", EmpName: "Praful", DeptName: "IT", Designation: "Developer", Salary: "30000" },
         { EmpNo: "35", EmpName: "Pritam", DeptName: "MECH", Designation: "Developer", Salary: "30000" },
         { EmpNo: "36", EmpName: "Priya", DeptName: "IT", Designation: "MANAGER", Salary: "30000" },
         { EmpNo: "37", EmpName: "Sarikam", DeptName: "ETC", Designation: "TRAINER", Salary: "50000" },
         { EmpNo: "38", EmpName: "Neena", DeptName: "CS", Designation: "Developer", Salary: "30000" },
         { EmpNo: "39", EmpName: "Nita", DeptName: "CS", Designation: "MANAGER", Salary: "30000" },
         { EmpNo: "40", EmpName: "Nilesh", DeptName: "CIVIL", Designation: "Developer", Salary: "60000" },
        ];
           window.onload=function(){

            var tbody = document.getElementById("tbdy");
            console.log(tbody);

            for (var index = 0; index <= Employees.length; index++) {

                tbody.innerHTML += "<tr class='table-primary'><td>" + Employees[index].EmpNo + "</td><td>" + Employees[index].EmpName + "</td><td>" + Employees[index].DeptName+ "</td><td>" + Employees[index].Designation + "</td><td>" + Employees[index].Salary + "</td></tr>";

                console.log(tbody);
            }
        }
