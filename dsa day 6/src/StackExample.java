import java.util.Stack;

public class StackExample {
	public static void main(String[] args) {
		Stack<Integer> stack = new Stack<>();
		stack.push(40);
		stack.push(30);
		stack.push(20);
		System.out.println(stack.pop());
		System.out.println(stack.peek());
	}

}
