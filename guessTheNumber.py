#this is guess the number game
import random
secretNumber=random.randint(1,20)
print('i am thinking of a number between 1 to 20')
#ask the player to guess 6 times
for guessesTaken in range(1,7):
    print('take a guess.')
    guess=int(input())
    
    if guess<secretNumber:
        print('too low ')
    elif guess>secretNumber:
        print('too high')
    else:
        print("correct")
        break
if guess==secretNumber:
    print('good job you guessed the number')
else:
    print('nope,all your guesses were wrong')
