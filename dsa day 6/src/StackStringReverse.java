import java.util.Stack;

public class StackStringReverse {
	public static void main(String[] args) {
		Stack<Character> stack = new Stack<>();
		String string ="afra";
		for(char c : string.toCharArray()) {
			stack.push(c);
		}
		for(int i=0;i<string.length();i++) {
			System.out.print(stack.pop()); 
		}
		 
	}
    
}
