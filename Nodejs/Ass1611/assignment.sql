-- Creating Database 
create database ecom;

use ecom;

-- Create Category Table 
create table category(
	categoryId varchar(30) primary key,
    categoryName varchar(100) not null,
    manufacturer varchar(100) not null
);
-- Inserting records into Category Table 
insert into category(categoryId, categoryName,manufacturer) values('c-01','Electronics','Dell');
insert into category(categoryId, categoryName,manufacturer) values('c-02','Fashion','Raymand');
insert into category(categoryId, categoryName,manufacturer) values('c-03','Fruits','Farmer');
insert into category(categoryId, categoryName,manufacturer) values('c-04','ECL','Bajaj');
insert into category(categoryId, categoryName,manufacturer) values('c-05','Food','Parle');

-- Creating Product table 
create table product(
	productRowId int primary key,
    productId varchar(100) unique not null,
    productName varchar(100) not null,
    price int not null,
    quantityAvailable int not null,
    categoryId varchar(30) not null,
    INDEX categoryIdx (categoryId),
    FOREIGN KEY (categoryId)
		REFERENCES category(categoryId)
        ON DELETE CASCADE
);


-- Inserting records into Product Table
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(01,'p-01','Mobile',21999,10,'c-01');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(02,'p-02','Wireless Earphones',3000,20,'c-01');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(03,'p-03','Wearable Bands',35990,5,'c-01');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(04,'p-04','Casual Shirt',4599,120,'c-02');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(05,'p-05','Formal Pants',3599,12,'c-02');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(06,'p-06','Study Table',10999,10,'c-03');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(07,'p-07','Chair',7600,60,'c-03');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(08,'p-08','Gaming Console',25999,5,'c-04');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(09,'p-09','Wheel Covers',5999,10,'c-05');
insert into product(productRowId, productId,productName,price,quantityAvailable,categoryId) values(10,'p-10','Seat Covers',15999,100,'c-05');

-- Creating Customer Table
create table customer(
	customerId int not null primary key,
    customerName varchar(200) not null
);

-- Inserting records into Customer Table
insert into customer(customerId,customerName) values (01,'ABC');
insert into customer(customerId,customerName) values (02,'BCD');
insert into customer(customerId,customerName) values (03,'CDE');
insert into customer(customerId,customerName) values (04,'DEF');
insert into customer(customerId,customerName) values (05,'EFG');
insert into customer(customerId,customerName) values (06,'FGH');
insert into customer(customerId,customerName) values (07,'GHI');
insert into customer(customerId,customerName) values (08,'HIJ');
insert into customer(customerId,customerName) values (09,'IJK');
insert into customer(customerId,customerName) values (10,'JKL');

-- Creating ProductOrder table
create table productOrder(
	orderId int primary key,
    productRowId int not null,
    orderDate datetime not null,
    quantityOrdered int not null,
    totalPrice int not null,
    customerId int not null,
    
    
    INDEX productRowIdx (productRowId),
    INDEX (customerId),
    FOREIGN KEY (productRowId)
		REFERENCES product(productRowId)
        ON DELETE NO ACTION,
	FOREIGN KEY(customerId)
		REFERENCES customer(customerId)
        ON DELETE CASCADE
);
