INSERT INTO students (name) VALUES ('John', 'Susan', 'Ben', 'Chris', 'Joseph');

UPDATE students
SET dob = 28/08/1991
WHERE student_id = 1;

UPDATE subjects
SET subject_name = 'Programming'
WHERE subject_name = 'Software Development';

DELETE FROM enrollments WHERE id = 1 or id = 2;

