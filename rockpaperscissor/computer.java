import java.util.random;
public class computer
{
	public int getInput()
	{
		Random random=new Random();
		int input=random.nextInput(3)+1;
		return input;
	}
}