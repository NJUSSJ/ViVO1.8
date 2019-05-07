

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CustomerTest {
	
	private static final double DOUBLE_DELTA = 1e-15;
	
	@Test(timeout=4000)
	public void test1(){

        Account checkingAccount = new Account(Account.CHECKING);
        Account savingsAccount = new Account(Account.SAVINGS);
        Account maxisavingsAccount = new Account(Account.MAXI_SAVINGS);

        Customer henry = new Customer("Henry");
        henry.openAccount(checkingAccount);
        henry.openAccount(savingsAccount);
        henry.openAccount(maxisavingsAccount);
        checkingAccount.deposit(100.0);
        checkingAccount.withdraw(50.0);
        savingsAccount.deposit(4000.0);
        savingsAccount.withdraw(200.0);
        maxisavingsAccount.deposit(500);

        assertEquals("Statement for Henry\n" +
                "\n" +
                "Checking Account\n" +
                "  deposit $100.00\n" +
                "  withdrawal $50.00\n" +
                "Total $50.00\n" +
                "\n" +
                "Savings Account\n" +
                "  deposit $4,000.00\n" +
                "  withdrawal $200.00\n" +
                "Total $3,800.00\n" +
                "\n" +
                "Maxi Savings Account\n" +
                "  deposit $500.00\n" +
                "Total $500.00\n" +
                "\n" +
                "Total In All Accounts $4,350.00", henry.getStatement());
    }

	@Test(timeout=4000)
    public void test2(){
		Bank bank = new Bank();
	    Account checkingAccount1 = new Account(Account.MAXI_SAVINGS);
	    Account checkingAccount2 = new Account(Account.SAVINGS);
	    Customer bill = new Customer("Bill");
	    bank.addCustomer(bill.openAccount(checkingAccount1));
	    bank.addCustomer(bill.openAccount(checkingAccount2));
	    checkingAccount1.deposit(3000.0);
	    checkingAccount2.deposit(1000.0);
	    assertEquals(171.0, bill.totalInterestEarned(), DOUBLE_DELTA);
    }
}
