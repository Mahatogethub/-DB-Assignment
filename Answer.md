 a.Explain the relationship between the "product" and "product_category" entities from the above diagram.

Ans- The relationship between the "product" and "product_category" entities is that each product belongs to a single product category, but each product category can have multiple products associated with it .


b.  How could you ensure that each product in the "product" table has a valid category assigned to it?
Ans - For each product in the "product" table has a valid category assigned to it, we can use a foreign key constraint. The "category_id" column in the "product" table serves as a foreign key referencing the "id" column in the "product_category" table.



