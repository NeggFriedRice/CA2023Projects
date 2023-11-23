-- Show all the teachers.

-- Show the subject's different areas.

-- Show the subject names alphabetically ordered.

-- Show the first name, last name and dob of birth of the students starting with the youngest.

-- Show the enrollments of the students 4 and 5

-- Show the email of students who were born in the 90s decade

-- Show the students whose last name starts with an A.

SELECT * FROM teachers;

SELECT DISTINCT area FROM subjects;

SELECT subject_name FROM subjects ORDER BY subject_name;

SELECT f_name, l_name, dob FROM students ORDER BY dob DESC;

SELECT * FROM enrollments WHERE student_id = 4 OR student_id = 5;

SELECT email FROM students WHERE BETWEEN '01/01/1991' AND '31/12/1991';

SELECT * FROM students WHERE l_name LIKE 'A%';