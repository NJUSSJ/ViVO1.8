

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
    //存款,需对存款数<=0的情况进行异常处理,异常详情参考测试用例
    public void deposit(double amount) {
        
    }
    
    //取款,需对取款数和账户余额<=0的情况分别进行异常处理,异常详情参考测试用例
    public void withdraw(double amount) {
    	
    }
    
    //根据不同的账号类型，确定不同利率进行利息计算
    public double interestEarned() {
        double amount = sumTransactions();
        switch (accountType){
            case 0:
                amount *= 0.001;
                break;
            case 1:
                if(amount<=1000){
                    amount *= 0.001;
                }else{
                    amount = (amount-1000) * 0.002 + 1;
                }
                break;
            case 2:
                if(amount <= 1000){
                    amount *= 0.02;
                }else if(amount <= 2000){
                    amount = 20 + (amount - 1000) * 0.05;
                }else{
                    amount = 20 + 50 + (amount - 2000) * 0.1;
                }
                break;
        }
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
