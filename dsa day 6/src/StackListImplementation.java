import java.util.ArrayList;

public class StackListImplementation {
	ArrayList<Integer> stack = new ArrayList<>();

	void push(int x) {
		stack.add(x);
	}

	int pop() {
		if (stack.isEmpty()) {
			System.out.println("Stack is empty");
			return -1;
		}
		return stack.remove(stack.size() - 1);
	}
}