# https://www.codewars.com/kata/5956d127a817c7c51b000026/train/python

class Student:

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        # Create blank grade attribute for each student upon initialisation
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        return sum(self.grades) / len(self.grades)
    

student1 = Student("John", "Doe")
student2 = Student("Jane", "Doe")

student1.add_grade(98)

student2.add_grade(77)
print(student1.grades)
print(student2.grades)