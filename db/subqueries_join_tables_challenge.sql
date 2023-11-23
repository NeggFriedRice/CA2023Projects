-- Show the full name of the teacher who is teaching the Programming subject (with subquery).

SELECT f_name, l_name
FROM teachers
WHERE teacher_id = (SELECT teacher_id FROM subjects WHERE subject_name = 'Programming');

-- Show the subject names where student 4 is enrolled.

SELECT subjects.subject_name
FROM subject.subjects_id, enrollments.enrollment_id
WHERE subjects_subject_id = enrollments.subject_id 
AND enrollments_student_id = 4;

-- Show student's full name and email that are enrolled in subject 2.

SELECT students.f_name, students.l_name, students.email
FROM students, enrollments
WHERE students.student_id = enrollments.student_id
AND enrollments.subject_id = 2;

-- Show a list with students full name, enrolment date and subject name.

SELECT students.f_name, students.l_name, enrollments.enrollment_date, subjects.subject_name
FROM students, enrollments, subjects
WHERE students.student_id = enrollments.student_id AND subjects.subject_id = enrollments.id;

-- Show a list with students full name, enrolment date, subject name and the teacher's name teaching each subject.
SELECT ST.f_name,  ST.l_name, E.enrollment_date, SU.subject_name, T.f_name, T.l_name  
FROM STUDENTS ST, ENROLLMENTS E, SUBJECTS SU, TEACHERS T 
WHERE ST.student_id = E.student_id 
AND E.subject_id = SU.subject_id 
AND SU.teacher_id = T.teacher_id;