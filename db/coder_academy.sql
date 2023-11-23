DROP DATABASE coder_academy;
CREATE DATABASE coder_academy;
\c coder_academy

create table students (
    student_id serial primary key,
    f_name text not null,
    l_name text not null,
    dob date);

create table teachers (
    teacher_id serial primary key,
    name text NOT NULL);

create table subjects (
    subject_id serial primary key,
    subject_name text NOT NULL,
    teacher_id integer,
    FOREIGN KEY (teacher_id) REFERENCES teachers (teacher_id) ON DELETE SET NULL);

create table enrollments (
    enrollment_id serial primary key,
    student_id integer not null,
    subject_id integer not null,
    enrollment_date date DEFAULT CURRENT_DATE,
    FOREIGN KEY (student_id) REFERENCES students (student_id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES subjects (subject_id) ON DELETE CASCADE);

ALTER TABLE students 
    ADD COLUMN email text not null;

ALTER TABLE teachers 
    RENAME COLUMN name 
    TO f_name;

ALTER TABLE teachers
    ADD COLUMN l_name text not null;

ALTER TABLE subjects 
    ADD COLUMN area text DEFAULT 'Databases';

DROP TABLE subjects