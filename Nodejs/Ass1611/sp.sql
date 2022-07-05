use ecom;
-- Create Procedure for Get Products
DELIMITER //
CREATE PROCEDURE getProducts()
BEGIN
	SELECT * FROM product;
END //
DELIMITER ; 
-- Call getProducts() procedure
call getProducts();

-- Create procedure for order the product
DELIMITER $$
CREATE PROCEDURE createOrderForProduct(
	IN oId int,
    IN prodRowId int,
    IN orderedDate datetime,
    IN quantOrdered int,
    IN price int,
    IN custId int
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN 
		SELECT 'Error: Quantity is more than available!';
        ROLLBACK;
	END;
    START TRANSACTION;
    
	INSERT INTO productOrder(orderId,productRowId,orderDate,quantityOrdered,totalPrice,customerId)
    VALUES
    (oId,prodRowId,orderedDate,quantOrdered,price,custId);
    UPDATE product p INNER JOIN productorder po on po.productRowId = p.productRowId SET p.quantityAvailable = p.quantityAvailable - po.quantityOrdered , po.totalPrice = po.quantityOrdered * p.price where po.orderId =oId;   
    
END$$
DELIMITER ;
-- call for successfull order
call createOrderForProduct(103,09,'2012-01-01T10:10:10',09,0,09);

-- call for unsuccessfull order
call createOrderForProduct(102,03,'2012-01-01T10:10:10',11,0,06);
SELECT * FROM product;

