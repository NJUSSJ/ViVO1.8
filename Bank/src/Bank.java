

import java.util.ArrayList;
import java.util.List;

public class Bank {
    private List<Customer> customers;

    public Bank() {
        customers = new ArrayList<Customer>();
    }

    public void addCustomer(Customer customer) {
        customers.add(customer);
    }
    
    //返回固定格式的客户列表,格式参考测试用例
    public String customerSummary() {
        String summary = "";
        return summary;
    }
    
    //返回支付所有客户的利息总和
    public double totalInterestPaid() {
        double total = 0;
        return total;
    }

}
