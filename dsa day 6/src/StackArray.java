
public class StackArray {
	int top=-1;
	int size=5;
	int [] stack = new int[size];
	
	void push(int x) {
		if(top==size-1) {
			System.out.println("Stack overflow");
		}
		else {
			stack[++top]=x;
		}
	}
int pop() {
	if(top==-1) {
		System.out.println("Stack underflow");
		return -1;
		
	}
	return stack[top--];
}
}
