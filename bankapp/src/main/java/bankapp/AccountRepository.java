package bankapp;

public interface AccountRepository {

    Account findById(int accountNumber);

    void save(Account account);
}

