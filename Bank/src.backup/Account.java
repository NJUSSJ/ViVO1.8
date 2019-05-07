

import java.util.ArrayList;
import java.util.List;

public class Account {

    public static final int CHECKING = 0;
    public static final int SAVINGS = 1;
    public static final int MAXI_SAVINGS = 2;

    private final int accountType;
    public List<Transaction> transactions;

    public Account(int accountType) {
        this.accountType = accountType;
        this.transactions = new ArrayList<Transaction>();
    }
    //存款,�?对存款数<=0的情况进行异常处�?,异常详情参�?�测试用�?
    public void deposit(double amount) {
        
    }
    
    //取款,�?对取款数和账户余�?<=0的情况分别进行异常处�?,异常详情参�?�测试用�?
    public void withdraw(double amount) {
    	
    }
    
    //根据不同的账号类型，确定不同利率进行利息计算
    public double interestEarned() {
        double amount = sumTransactions();
        return amount;
    }
    
  //返回账号余额
    public double sumTransactions() {
    	 double amount = 0.0;
         return amount;
    }
    
    public int getAccountType() {
        return accountType;
    }

}
