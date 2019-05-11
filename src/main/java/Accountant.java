import java.math.BigDecimal;
import java.math.BigInteger;

public class Accountant extends Worker {
	public String password;

	public Accountant() {

	}
	
	//初始化Accountant
	public Accountant(String name, int age, int salary, String password) {

	}
	
    /**
     * 数字转换
     * 随着公司业务的开展，国际性业务也有相应的拓宽，
     * 会计们需要一个自动将数字转换为英文显示的功能。
     * 编辑们希望有一种简约的方法能将数字直接转化为数字的英文显示。
     * 
     * 给定一个非负整数型输入，将数字转化成对应的英文显示，省略介词and
     * 正常输入为非负整数，且输入小于2^31-1;
     * 如果有非法输入（字母，负数，范围溢出等），返回illegal
     * 
     * 示例：
     * 
     * number: 2132866842
     * return: "Two Billion one Hundred Thirty Two Million Eight Hundred Sixty Six Thousand Eight Hundred Forty Two"
     *
     * number：-1
     * return："illegal"
     * @param number
     */
    public  String numberToWords (String number){
    	long input=0;
    	String illegal="illegal";
    	try{
    		input=Long.parseLong(number);
		}catch(NumberFormatException n){
    		return illegal;
		}
		if(isNumberIllegal(input)){
			return illegal;
		}else{
			int inputI=Integer.parseInt(number);
			if(inputI==0){
				return "Zero";
			}
			String billion="Billion";
			int billionN=1000000000;
			String million="Million";
			int millionN=1000000;
			String thousand="Thousand";
			int thousandN=1000;
			String hundred="Hundred";
			StringBuilder stringBuilder=new StringBuilder();
			int temp=inputI/billionN;
			inputI=inputI%billionN;
			if(temp!=0){
				stringBuilder.append(" ").append(numberToStrLTHundred(temp)).append(" ").append(billion);
			}
			for(int i=0;i<3;i++){
				String tempCalculate;
				int tempCalculateN;
				if(i==0){
					tempCalculate=million;
					tempCalculateN=millionN;
				}else if(i==1){
					tempCalculate=thousand;
					tempCalculateN=thousandN;
				}else{
					tempCalculate="";
					tempCalculateN=1;
				}
				temp=inputI/tempCalculateN;
				inputI=inputI%tempCalculateN;
				if(temp!=0){
					if(temp>=100){
						stringBuilder.append(" ").append(numberToStrLTHundred(temp/100)).append(" ").append(hundred);
					}
					stringBuilder.append(" ").append(numberToStrLTHundred(temp%100)).append(" ").append(tempCalculate);
				}
			}
			return stringBuilder.substring(1,stringBuilder.length()-1);
		}
    }

	/**
	 * 小于100的整数转化为字符串
	 * @param number 小于100的整数
	 * @return 字符串
	 */
	private String numberToStrLTHundred(int number){
		int singleDigit=number%10;
    	int tenDigit=number/10;
    	if(tenDigit==1){
    		switch (singleDigit){
				case 0:
					return "Ten";
				case 1:
					return "Eleven";
				case 2:
					return "Twelve";
				case 3:
					return "Thirteen";
				case 4:
					return "Fourteen";
				case 5:
					return "Fifteen";
				case 6:
					return "Sixteen";
				case 7:
					return "Seventeen";
				case 8:
					return "Eighteen";
				case 9:
					return "Nineteen";
				default:
					return "";
			}
		}else if(tenDigit==0){
    		return singleDigitToStr(singleDigit);
		} else{
    		return tenDigitToStr(tenDigit)+" "+singleDigitToStr(singleDigit);
		}
	}

	private String singleDigitToStr(int n){
		switch (n){
			case 1:
				return "One";
			case 2:
				return "Two";
			case 3:
				return "Three";
			case 4:
				return "Four";
			case 5:
				return "Five";
			case 6:
				return "Six";
			case 7:
				return "Seven";
			case 8:
				return "Eight";
			case 9:
				return "Nine";
			default:
				return "";
		}
	}
	private String tenDigitToStr(int n){
		switch (n){
			case 2:
				return "Twenty";
			case 3:
				return "Thirty";
			case 4:
				return "Forty";
			case 5:
				return "Fifty";
			case 6:
				return "Sixty";
			case 7:
				return "Seventy";
			case 8:
				return "Eighty";
			case 9:
				return "Ninety";
			default:
				return "";
		}
	}
    private boolean isNumberIllegal(Long input){
    	if(input<0){
    		return true;
		}
    	long bound=Integer.MAX_VALUE;
		return input >= bound;
	}
    
    /**
     * 检验密码
     * 由于会计身份的特殊性，对会计的密码安全有较高的要求，
     * 会计的密码需要由8-20位字符组成；
     * 至少包含一个小写字母，一个大写字母和一个数字，不允许出现特殊字符；
     * 同一字符不能连续出现三次 (比如 "...ccc..." 是不允许的, 但是 "...cc...c..." 可以)。
     * 
     * 如果密码符合要求，则返回0;
     * 如果密码不符合要求，则返回将该密码修改满足要求所需要的最小操作数n，插入、删除、修改均算一次操作。
     *
     * 示例：
     * 
     * password: HelloWorld6
     * return: 0
     *
     * password: HelloWorld
     * return: 1
     * 
     *
     */
    public  int checkPassword(){
		return 0;

    }
}
