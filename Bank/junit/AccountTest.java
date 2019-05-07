import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class AccountTest {
	private static final double DOUBLE_DELTA = 1e-15;
	
	@Rule
	public ExpectedException thrown= ExpectedException.none();
	
    @Test(timeout=4000)
    public void test1() {
        Bank bank = new Bank();
        Account checkingAccount = new Account(Account.CHECKING);
        Customer bill = new Customer("Bill").openAccount(checkingAccount);
        bank.addCustomer(bill);
        thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("amount must be greater than zero");
        checkingAccount.withdraw(-100.0);
    }
    
    @Test(timeout=4000)
    public void test2() {
        Bank bank = new Bank();
        Account checkingAccount = new Account(Account.CHECKING);
        Customer bill = new Customer("Bill").openAccount(checkingAccount);
        bank.addCustomer(bill);
        thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("sumTransactions must be greater than zero");
        checkingAccount.withdraw(100.0);
    }
    
    @Test(timeout=4000)
    public void test4() {
        Bank bank = new Bank();
        Account checkingAccount = new Account(Account.CHECKING);
        Customer bill = new Customer("Bill").openAccount(checkingAccount);
        bank.addCustomer(bill);
        thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("amount must be greater than zero");
        checkingAccount.deposit(-100.0);
    }
    
    @Test(timeout=4000)
    public void test5() {
        Bank bank = new Bank();
        Account checkingAccount = new Account(Account.MAXI_SAVINGS);
        bank.addCustomer(new Customer("Bill").openAccount(checkingAccount));

        checkingAccount.deposit(1400.0);
        checkingAccount.withdraw(700.0);

        assertEquals(700.0, checkingAccount.sumTransactions(), DOUBLE_DELTA);
    }
}
