
public class BankAccount {
	private int balance;
	public BankAccount(int balance) {
		balance=this.balance;
	}
	public synchronized int getBalance() {
		return balance;
	}
	public synchronized boolean withdraw(int amount) {
		System.out.println(Thread.currentThread().getName()+"checking balance....");
		if (balance >= amount) {
			balance -= amount;
			return true;
		}
		return false ;
	}
	public synchronized void deposit(int amount) {
		try {
			Thread.sleep(2000);
			
		} catch (InterruptedException e) {
			// TODO: handle exception
		}
		balance += amount;
	}
}
