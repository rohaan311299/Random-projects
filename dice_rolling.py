#dice rolling game in python
import random
print("welcome to my dic rolling pogramme")
print("\n you will get a number between 1 to 6 and the number depends totally on your luck")
roll_again='y'
while roll_again=='y':
    print(random.randint(1,6))
    roll_again=input("do you want to continue(y/n)")
print("thanks for playing")
        
