let simpleMap = new Map();

simpleMap.set(1, 'Sean Connary');
simpleMap.set(2, 'George Luznaby');
simpleMap.set(3, 'Roger Moore');
simpleMap.set(4, 'Triomothy Dalton');
simpleMap.set(5, 'Pierson Brosnon');
simpleMap.set(6, 'Daniel Craig');
simpleMap.set(6, 'Peter Donovan');

console.log(`Size = ${simpleMap.size}`);

simpleMap.forEach((v,i)=>{
    console.log(`Key = ${i} and value = ${v}`);
});

console.log(`is key present ${simpleMap.has(5)}`);
console.log(`Read value for key 5  ${simpleMap.get(5)}`);

let database = new Map();

database.set(1, {actorid: 101, name:"Sean Connary", moviesno: 6, names:['Dr.No', 'GoldFinger'], fees:450000});
database.set(2, {actorid: 102, name:"George Luznaby", movies: 1, fees:450000});
database.set(3, {actorid: 103, name:"Roger Moore", movies: 8, fees:450000});
database.set(1, {actorid: 104, name:"Triomothy Dalton", movies: 2, fees:450000});
database.set(1, {actorid: 105, name:"Pierson Brosnon", movies: 4, fees:450000});
