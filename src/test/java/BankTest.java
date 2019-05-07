

import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.assertEquals;

import org.junit.Rule;

public class BankTest {
    private static final double DOUBLE_DELTA = 1e-15;
    
	@Rule
	public ExpectedException thrown= ExpectedException.none();
	
    @Test(timeout=4000)
    public void test1() {
        Bank bank = new Bank();
        Customer john = new Customer("John");
        john.openAccount(new Account(Account.CHECKING));
        bank.addCustomer(john);

        assertEquals("Customer Summary\n - John (1 account)", bank.customerSummary());
    }

    @Test(timeout=4000)
    public void test2() {
        Bank bank = new Bank();
        Account checkingAccount1 = new Account(Account.CHECKING);
        Account checkingAccount2 = new Account(Account.SAVINGS);
        Customer bill = new Customer("Bill").openAccount(checkingAccount1);
        Customer tim = new Customer("Tim").openAccount(checkingAccount2);
        bank.addCustomer(bill);
        bank.addCustomer(tim);
        checkingAccount1.deposit(100.0);
        checkingAccount2.deposit(1000.0);
        
        assertEquals(1.1, bank.totalInterestPaid(), DOUBLE_DELTA);
    }

    @Test(timeout=4000)
    public void test3() {
        Bank bank = new Bank();
        Account checkingAccount = new Account(Account.SAVINGS);
        bank.addCustomer(new Customer("Bill").openAccount(checkingAccount));

        checkingAccount.deposit(1500.0);

        assertEquals(2.0, bank.totalInterestPaid(), DOUBLE_DELTA);
    }

    @Test(timeout=4000)
    public void test4() {
        Bank bank = new Bank();
        Account checkingAccount = new Account(Account.MAXI_SAVINGS);
        bank.addCustomer(new Customer("Bill").openAccount(checkingAccount));

        checkingAccount.deposit(3000.0);

        assertEquals(170.0, bank.totalInterestPaid(), DOUBLE_DELTA);
    }
    
    @Test(timeout=4000)
    public void test5() {
        Bank bank = new Bank();
        Customer john = new Customer("John");
        Customer jack = new Customer("Jack");
        john.openAccount(new Account(Account.CHECKING));
        john.openAccount(new Account(Account.SAVINGS));
        jack.openAccount(new Account(Account.MAXI_SAVINGS));
        bank.addCustomer(john);
        bank.addCustomer(jack);
        assertEquals("Customer Summary\n - John (2 accounts)\n - Jack (1 account)", bank.customerSummary());
    }
    
}
