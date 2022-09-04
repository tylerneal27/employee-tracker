INSERT INTO department (id, name)
VALUES (1, "bobby"),
       (2, "Data"),
       (3, "Bill");

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "sales", 25.86, 1),        
        (2, "HR", 78.87, 2),        
        (3, "bumps", 34578.59, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "who", "dis", 1, NULL),                
        (2, "buzz", "fizz", 2, NULL),                
        (3, "what", "huuh", 3, 1);                