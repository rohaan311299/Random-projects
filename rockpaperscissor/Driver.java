public class Driver
{
	public static final int ROCK=1;
	public static final int PAPER=1;
	public static final int SCISSOR=1;
	public static void display(String who,int s)
	{
		switch(s)
		{
			case Driver.ROCK:
				System.out.println(who+" selected rock ");
				break;
			case Driver.PAPER:
				System.out.println(who+" selected paper ");
				break;
			case Driver.SCISSOR:
				System.out.println(who+" selected scissor ");
				break;
			default;
				break;
		}
	}
	public static int compareSelections(int userSelection,int computerSelection)
	{
		if(userSelection==computerSelection)
			return 0;
		switch(userSelection)
		{
			  case ROCK:
            return (computerSelection == SCISSORS ? 1 : -1);
 
        case PAPER:
            return (computerSelection == ROCK ? 1 : -1);
 
        case SCISSORS:
            return (computerSelection == PAPER ? 1 : -1);
		}
		return 0;
	}
}