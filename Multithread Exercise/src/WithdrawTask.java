
public class WithdrawTask implements Runnable {
	private final BankAccount account;
	private final int amount;
	public WithdrawTask(BankAccount account,int amount) {
		this.account = account;
		this.amount = amount;
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		String thread = Thread.currentThread().getName();
		System.out.println(thread+"attempting to withdraw Rs."+amount);
		boolean success = account.withdraw(amount);
		if(success) {
			System.out.println(thread+"successfully withdrew Rs."+amount+"(Insufficient Balance)");
		}
	}

}
class DepositTask implements Runnable{
	private final BankAccount account;
	private final int amount;
	public DepositTask(BankAccount account,int amount) {
		this.account=account;
		this.amount=amount;
	}
	@Override
	public void run() {
		String thread = Thread.currentThread().getName();
		System.out.println(thread+"depositing Rs."+amount);
		account.deposit(amount);
		System.out.println(thread+"completed deposit of Rs." +amount);
	}
}
