CREATE TABLE employee (
	id serial NOT NULL,
	"name" varchar NOT NULL,
	gender char(1) NOT NULL,
	age int NULL,
	"location" varchar NULL,
	department varchar NULL,
	"role" varchar NULL,
	join_date date NULL,
	salary int NULL
);

INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('James', 'M', 29, 'Austin', 'Sales', 'Manager', to_date('01/01/2016','dd/mm/yyyy'), 65000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('John','M',31,'Chicago','Marketing','Associate',to_date('01/02/18','dd/mm/yy'),50000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Robert','M',26,'Memphis','Finance','Admin',to_date('03/03/16','dd/mm/yy'),35000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Michael','M',33,'Atlanta','Sales','Manager',to_date('04/01/16','dd/mm/yy'),68000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('William','M',36,'Austin','Marketing','Associate',to_date('05/11/17','dd/mm/yy'),48000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('David','M',23,'Chicago','Finance','Admin',to_date('06/01/16','dd/mm/yy'),48000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Richard','M',22,'Memphis','Sales','Manager',to_date('07/01/19','dd/mm/yy'),68000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Joseph','M',31,'Atlanta','Marketing','Associate',to_date('08/08/16','dd/mm/yy'),48000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Thomas','M',36,'Austin','Finance','Admin',to_date('09/01/14','dd/mm/yy'),45000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Charles','M',32,'Chicago','Sales','Manager',to_date('10/01/16','dd/mm/yy'),68000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Karen','F',21,'Memphis','Marketing','Associate',to_date('11/12/20','dd/mm/yy'),48000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Sarah','F',24,'Atlanta','Finance','Manager',to_date('12/01/15','dd/mm/yy'),68000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Jessica','F',32,'Austin','Sales','Associate',to_date('13/01/17','dd/mm/yy'),48000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Susan','F',35,'Chicago','Marketing','Associate',to_date('14/01/13','dd/mm/yy'),51000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Barbara','F',32,'Memphis','Finance','Associate',to_date('15/04/09','dd/mm/yy'),47000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Elizabeth','F',28,'Atlanta','Sales','Associate',to_date('16/01/14','dd/mm/yy'),55000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Linda','F',26,'Austin','Marketing','Associate',to_date('17/07/18','dd/mm/yy'),53000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Jennifer','F',24,'Chicago','Finance','Associate',to_date('18/01/16','dd/mm/yy'),49500);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Patricia','F',33,'Memphis','Sales','Associate',to_date('19/11/19','dd/mm/yy'),47000);
INSERT INTO employee ("name", gender, age, "location", department, "role", join_date, salary) VALUES('Mary','F',26,'Atlanta','Admin','Associate',to_date('31/01/20','dd/mm/yy'),52000);