import Student

alireza_id = int(input("Enter id : "))
alireza_height = int(input("Enter Height : "))
alireza = Student.Set_Shomare_Daneshjooe(alireza_id)
print(f"your student id is {Student.Get_Shomare_Daneshjooe()}")


n = int(input("How many classes are u participating in rightnow : "))

for i in range(n):
    Classname = input(f"Enter {i}th classes name :  ")
    Classgrade = int(input(f"Enter your grade in the {i}th class : "))
