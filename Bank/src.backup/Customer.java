

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
    //计算客户各账户的总利�?
    public double totalInterestEarned() {
        double total = 0;
        return total;
    }
    
    //获取�?有账户详�?
    public String getStatement() {
        String statement = "";
        return statement;
    }
        
    //格式化金额输出，无需修改,可直接引�?
    private String toDollars(double d){
        return String.format("$%,.2f", abs(d));
    }
}
