let map = new Map();

map.set(1, {eno:101,ename:'Manisha',deptname:'CS',salary:'400000'});

map.set(2, {eno:102,ename:'Vaibhav',deptname:'IT',salary:'500000'});

map.set(3, {eno:103,ename:'Sweety',deptname:'CS',salary:'800000'});

map.set(4, {eno:104,ename:'Sangam',deptname:'CIVIL',salary:'900000'});

map.set(5, {eno:105,ename:'Subhash',deptname:'IT',salary:'300000'});

map.set(6, {eno:106,ename:'Sumit',deptname:'CIVIL',salary:'700000'});

map.set(7, {eno:107,ename:'Shital',deptname:'IT',salary:'200000'});

map.set(8, {eno:108,ename:'Manali',deptname:'CIVIL',salary:'500000'});

map.set(9, {eno:109,ename:'Ayushi',deptname:'CS',salary:'300000'});

map.set(10, {eno:110,ename:'Yami',deptname:'IT',salary:'400000'});


console.log(`Size of map is = ${map.size}`);


console.log(`Value in map for key =5 is = ${JSON.stringify(map.get(5))}`);


console.log(`Record available for key 5 is = ${map.has(5)}`);




map.forEach((value,key)=>{

    console.log(`Value ate key = ${key} is= ${JSON.stringify(value)}`);

});


map.forEach((value,key)=>{

    console.log(`Value ate key = ${key} is= ${JSON.stringify(value)}`);

});



