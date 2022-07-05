const http = require("http");
const fs = require("fs");
const path = require("path");

let employees = [
    { EmpNo: 1011, EmpName: "ABC", Designation: "Software Developer", DeptName: "DS", Salary: "30000" },
    { EmpNo: 1012, EmpName: "DEF", Designation: "Technician", DeptName: "IT", Salary: "78000" },
    { EmpNo: 1013, EmpName: "GHI", Designation: "Business Analyst", DeptName: "Sales", Salary: "12000" },
    { EmpNo: 1014, EmpName: "JKL", Designation: "Pex", DeptName: "HR", Salary: "43000" },
    { EmpNo: 1015, EmpName: "MNO", Designation: "Quality Analyst", DeptName: "Testing", Salary: "35000" },
    { EmpNo: 1016, EmpName: "PQR", Designation: "Accountant", DeptName: "Accounts", Salary: "20000" }
];

const serverPath = path.join(__dirname, './../html');
console.log(serverPath);

const server = http.createServer((req, resp) => {

    let id = parseInt(req.headers.id);
    if (req.url === "/api") {
        // console.log('+++++++++++++++++++');
        fs.readFile(
            `${serverPath}/assignment2.html`,
            { encoding: "ascii" },
            (error, file) => {
                if (error) {
                    resp.writeHead(404, { "Content-Type": "text/html" });
                    resp.write(`File Not Found ${error.message}`);
                    resp.end();
                }
                resp.writeHead(404, { "Content-Type": "text/html" });
                // the response will be HTML Stream from the home.html
                resp.write(file);
                resp.end();
            }
        );
    }



    if (req.method === "GET" && req.url === "/api/getAll") {
        console.log('Inside Get statement');
        resp.writeHead(200, { "Content-Type": "application/json" });
        resp.write(JSON.stringify(employees));
        resp.end();

    }


    if (req.method === "POST" && req.url === "/api/post") {
        console.log('Insode post method');
        let receivedData;
        req.on('data', (chunk) => {
            receivedData = JSON.parse(chunk);
        });
        req.on('end', () => {
            employees.push(receivedData);
            resp.writeHead(200, { "Content-Type": "application/json" });
            resp.write(JSON.stringify(employees));
            resp.end;
        });
    }

    if (req.method === "PUT" && req.url === `/api/update/${id}`) {
        let receivedData;
        let emps = employees.filter((e, i) => {
            return e.EmpNo === id;
        });
        req.on('data', (chunk) => {
            receivedData = JSON.parse(chunk);
        });
        req.on('end', () => {
            emps.push(receivedData);
            resp.writeHead(200, { "Content-Type": "application/json" });
            resp.write(JSON.stringify(emps));
            resp.end;
        });
    }
    if (req.method === "DELETE" && req.url === `/api/delete/${id}`) {
        let receivedData;
        let emps = employees.filter((e, i) => {
            return e.EmpNo === id;
        });
        req.on('data', (chunk) => {
            receivedData = JSON.parse(chunk);
        });
        req.on('end', () => {
            emps.pop(receivedData);
            resp.writeHead(200, { "Content-Type": "application/json" });
            resp.write(JSON.stringify(emps));
            resp.end;
        });
    }


});

server.listen(9090);

