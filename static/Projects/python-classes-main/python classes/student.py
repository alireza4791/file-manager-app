class Student():
    def __init__(self, Shomare_Daneshjooe, Height):
        self.Shomare_Daneshjooe = Shomare_Daneshjooe
        self.Height = Height
        self.Class_Name_And_Grade = {}

    def Set_Shomare_Daneshjooe(self, Shomare_Daneshjooe):
        self.Shomare_Daneshjooe = Shomare_Daneshjooe

    def Get_Shomare_Daneshjooe(self):
        return self.Shomare_Daneshjooe

    def Set_Height(self, Height):
        self.Height = Height

    def Get_Height(self):
        return self.Height

    def Add_Class_Name_And_Grade(self, Name, Grade):
        if not Grade:
            False
        self.Class_Name_And_Grade[Name] = Grade
        return True
