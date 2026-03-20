import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class BankingApp {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter initial bank balance :");
		int initialBalance = sc.nextInt();
		BankAccount account = new BankAccount(initialBalance);
		//thread pool with 3 worker threads
		ExecutorService executor = Executors.newFixedThreadPool(3);
		while(true) {
			System.out.println("1 Check Balance");
            System.out.println("2 Deposit Money");
            System.out.println("3 Withdraw Money"); 
            System.out.println("4 Simulate Parallel Withdrawals");
            System.out.println("5 Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();
            switch(choice) {
            case 1: System.out.println("current Balance"+account.getBalance());
            break;
            case 2: System.out.println("enter the amount to deposit");
            int dep = sc.nextInt();
				executor.execute(new DepositTask(account,dep));
            break;
            case 3: System.out.println("enter the amount to deposit");
            int w = sc.nextInt();
            executor.execute(new WithdrawTask(account,w));
            break;
            case 4: System.out.println("simulating parallel withdrawl of Rs."+(initialBalance/2));
            executor.execute(new WithdrawTask(account, initialBalance / 2));
            executor.execute(new WithdrawTask(account, initialBalance / 2));
            break;
            case 5:System.out.println("shutting down the banking system");
            executor.shutdown();
            sc.close();
            System.exit(0);
            break;
            default : System.out.println("Invalid Choice! Please try again");
            }
		}
				}
}
