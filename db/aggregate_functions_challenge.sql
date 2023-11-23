-- Show the date of birth of the youngest student.

SELECT MIN(dob) 
FROM students;

-- Show the least and most recent enrollment dates in the same query.

SELECT MIN(enrollment_date) as 'Most recent', MAX(enrollment_date) as 'Least recent' 
FROM enrollments;

-- Show how many subjects are per area.

SELECT area, COUNT(subject_name)
FROM subjects
GROUP BY area;

-- Show how many students are enrolled per subject id.

SELECT subject_id, count(student_id)
FROM enrollments
GROUP BY DISTINCT subject_id;

-- Show how many subjects each student is enrolled.

SELECT student_id, count(subject_id)
FROM enrollments
GROUP BY DISTINCT student_id;

-- Show how many students are enrolled in subject 3.
SELECT subject_id, count(student_id)
FROM enrollments
GROUP BY subject_id
HAVING subject_id = 3;