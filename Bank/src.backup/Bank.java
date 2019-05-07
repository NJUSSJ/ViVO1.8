

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
    
    //返回固定格式的客户列�?,格式参�?�测试用�?
    public String customerSummary() {
        String summary = "";
        return summary;
    }
    
    //返回支付�?有客户的利息总和
    public double totalInterestPaid() {
        double total = 0;
        return total;
    }

}
