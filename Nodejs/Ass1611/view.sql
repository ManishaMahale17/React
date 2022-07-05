CREATE View ProductOrdered
AS
SELECT customerName, productName, categoryName, orderDate, totalPrice
FROM customer, product, productorder, category
WHERE productorder.customerId = customer.customerId and productorder.productRowId = product.productRowId and product.categoryId = category.categoryId;

SELECT * FROM ProductOrdered;
