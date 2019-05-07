

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.abs;

public class Customer {
    private String name;
    private List<Account> accounts;

    public Customer(String name) {
        this.name = name;
        this.accounts = new ArrayList<Account>();
    }

    public String getName() {
        return name;
    }
    
    public Customer openAccount(Account account) {
        accounts.add(account);
        return this;
    }
    
    public int getNumberOfAccounts() {
        return accounts.size();
    }
    //计算客户各账户的总利率
    public double totalInterestEarned() {
        double total = 0;
        for(Account account:accounts){
            total+=account.interestEarned();
        }
        return total;
    }
    
    //获取所有账户详情
    public String getStatement() {
        String statement = "";
        double checkingDeposit = 0.00, checkingWithdrawal = 0.00,
            savingDeposit = 0.00, savingWithdrawal = 0.00,
            maxiDeposit = 0.00, maxiWithdrawal= 0.00;


        // 遍历所有账户
        for (Account account: accounts) {

            // 遍历每一个账户的交易详情
            for (Transaction transaction: account.transactions ) {
                switch (account.getAccountType()) {

                    case Account.CHECKING:{
                        if (transaction.amount > 0) {
                            checkingDeposit += transaction.amount;
                        }
                        else {
                            checkingWithdrawal += Math.abs(transaction.amount); // 取绝对值
                        }
                        break;
                    }

                    case Account.SAVINGS:{
                        if (transaction.amount > 0) {
                            savingDeposit += transaction.amount;
                        }
                        else {
                            savingWithdrawal += Math.abs(transaction.amount); // 取绝对值
                        }
                        break;
                    }

                    case Account.MAXI_SAVINGS:{
                        if (transaction.amount > 0) {
                            maxiDeposit += transaction.amount;
                        }
                        else {
                            maxiWithdrawal += Math.abs(transaction.amount); // 取绝对值
                        }
                        break;
                    }
                }
            }
        }


        statement += "Statement for "+ this.name +"\n" +
                "\n" +
                "Checking Account\n" +
                (checkingDeposit != 0.00? "  deposit $" + checkingDeposit + "\n": "") +
                (checkingWithdrawal != 0.00? "  withdrawal" + checkingWithdrawal + "\n": "") +
                "Total $" + (checkingDeposit-checkingWithdrawal) + "\n" +
                "\n" +
                "Savings Account\n" +
                (savingDeposit != 0.00? "  deposit $" + savingDeposit + "\n": "") +
                (savingWithdrawal != 0.00?"  withdrawal $" + savingWithdrawal + "\n": "") +
                "Total $" + (savingDeposit - savingWithdrawal) + "\n" +
                "\n" +
                "Maxi Savings Account\n" +
                (maxiDeposit != 0.00? "  deposit $" + maxiDeposit + "\n": "") +
                (maxiWithdrawal != 0.00? "  withdrawal $" + maxiDeposit + "\n": "") +
                "Total $" + (maxiDeposit - maxiWithdrawal) + "\n" +
                "\n" +
                "Total In All Accounts $" + (checkingDeposit-checkingWithdrawal) +
                (savingDeposit - savingWithdrawal) + (maxiDeposit - maxiWithdrawal);

        return statement;
    }
        
    //格式化金额输出，无需修改,可直接引用
    private String toDollars(double d){
        return String.format("$%,.2f", abs(d));
    }
}
