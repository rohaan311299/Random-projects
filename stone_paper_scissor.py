import random
print("Winning Rules of the Rock paper scissor game as follows: \n"
                                +"Rock vs paper->paper wins \n"
                                + "Rock vs scissor->Rock wins \n"
                                +"paper vs scissor->scissor wins \n") 
  
while True:
    print("enter choice \n 1 rock \n 2paper \n 3 scissor")
    choice=int(input("user turn.."))

    while choice>3 or choice<1:
        choice=int(input("enter a valid input"))

    if choice==1:
        choice_name="rock"
    elif choice==2:
        choice_name="paper"
    else:
        choice_name="scissors"

    print(f"you're choice is {choice_name}")

    print("\n its the computers now..")
    comp_choice=random.randint(1,3)

    while comp_choice==choice:
        comp_choice=random.randint(1,3)

    
    if comp_choice==1:
        comp_choice_name="rock"
    elif comp_choice==2:
        comp_choice_name="paper"
    else:
        comp_choice_name="scissors"

    print(f"the computers choice is {comp_choice_name}")

    print(choice_name+"VS"+comp_choice_name)
    if((choice==1 and comp_choice==2)or(choice==2 and comp_choice==1)):
        print("paper wins=>",end="")
        result="paper"
    elif((choice == 1 and comp_choice == 3)or(choice == 3 and comp_choice == 1)): 
        print("Rock wins =>", end = "") 
        result = "Rock"
    else: 
        print("scissor wins =>", end = "") 
        result = "scissor"

    if result == choice_name: 
        print("<== User wins ==>") 
    else: 
        print("<== Computer wins ==>") 
          
    print("Do you want to play again? (Y/N)") 
    ans = input() 

    if ans == 'n' or ans == 'N': 
        break


    print("\n thanks for playing")
    
    








    
          

