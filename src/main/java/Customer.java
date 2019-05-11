

import java.util.ArrayList;
import java.util.HashMap;
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
        HashMap<String, Double> map = new HashMap<String, Double>();
        int[] typeNums = new int[3];

        // 遍历所有账户
        for (Account account: accounts) {

            // 遍历每一个账户的交易详情
            for (Transaction transaction: account.transactions ) {

                String typeName = this.getAccountTypeName(account.getAccountType());
                String deposit = typeName + "Deposit";
                String withdrawal = typeName + "Withdrawal";
                if (transaction.amount > 0){
                    map.put(deposit, map.containsKey(deposit)? (map.get(deposit)+transaction.amount) :  transaction.amount);
                } else {
                    map.put(withdrawal, map.containsKey(withdrawal) ? (map.get(withdrawal) + Math.abs(transaction.amount)) : Math.abs(transaction.amount));
                }
                typeNums[account.getAccountType()]+=1;
            }
        }

        StringBuilder builder = new StringBuilder();
        builder.append("Statement for ")
                .append(this.name)
                .append("\n\n");

        if (typeNums[0] != 0) {
            builder.append("Checking" + " Account\n");
            builder.append(printDetail(0, map));
        }
        if (typeNums[1] != 0) {
            builder.append("Savings" + " Account\n");
            builder.append(printDetail(1, map));
        }
        if (typeNums[2] != 0) {
            builder.append("Maxi Savings" + " Account\n");
            builder.append(printDetail(2, map));
        }

        builder.append("Total In All Accounts ")
                .append(toDollars(
                        ( map.containsKey("checkDeposit")? map.get("checkDeposit"): 0.00 )
                                - (map.containsKey("checkWithdrawal")? map.get("checkWithdrawal"): 0.00)
                        + ( map.containsKey("savingDeposit")? map.get("savingDeposit"): 0.00 )
                                - (map.containsKey("savingWithdrawal")? map.get("savingWithdrawal"): 0.00)
                        + ( map.containsKey("maxiDeposit")? map.get("maxiDeposit"): 0.00 )
                                - (map.containsKey("maxiWithdrawal")? map.get("maxiWithdrawal"): 0.00)
                ));

     return builder.toString();
    }

    private String getAccountTypeName(int type) {
        switch (type){
            case 0: return "check";
            case 1: return "saving";
            default: return "maxi";
        }
    }

    private String printDetail(int type, HashMap<String, Double> map) {
        StringBuilder stringBuilder = new StringBuilder();
        String typeName = getAccountTypeName(type);

        double deposit = map.containsKey(typeName+"Deposit") ? map.get(typeName+"Deposit"): 0.00;
        double withdrawal = map.containsKey(typeName+"Withdrawal") ? map.get(typeName+"Withdrawal"): 0.00;

        if (deposit!=0) {
            stringBuilder
                    .append("  deposit ")
                    .append(toDollars(deposit))
                    .append("\n");
        }
        if (withdrawal!=0) {
            stringBuilder
                    .append("  withdrawal ")
                    .append(toDollars(withdrawal))
                    .append("\n");
        }
        stringBuilder.append("Total " + toDollars(deposit-withdrawal))
            .append("\n\n");

        return stringBuilder.toString();
    }
        
    //格式化金额输出，无需修改,可直接引用
    private String toDollars(double d){
        return String.format("$%,.2f", abs(d));
    }
}
