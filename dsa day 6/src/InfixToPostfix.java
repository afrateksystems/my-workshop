import java.util.Stack;

public class InfixToPostfix {
	public static void main(String[] args) {
		Stack<Character> stack1 = new Stack<>();
		Stack<Character> stack2 = new Stack<>();
		String expression = "A+B";
		for(char c : expression.toCharArray()) {
			switch (c) {
			case :
				stack1.push(c);
				break;
			case : 
			default:
				System.out.println("Invalid Character Entry");
			}
			}
		}
	}
}
