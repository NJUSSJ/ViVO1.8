import java.util.ArrayList;
import java.util.List;

public class Accountant extends Worker {
	public String password;

	public Accountant() {

	}
	
	//初始化Accountant
	public Accountant(String name, int age, int salary, String password) {
		super(name, age, salary, "Accountant");
		this.password = password;
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
		return password;

    }

    private static final int PASSWORD_MIN_LENGTH = 8;
	private static final int PASSWORD_MAX_LENGTH = 20;
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
     */
    public  int checkPassword(){
    	if(password == null || password.length() == 0){
    		return PASSWORD_MIN_LENGTH;
		}

		int lowerCaseCount = 0;
    	int upperCaseCount = 0;
    	int numberCount = 0;
    	int specialCharCount = 0;
    	for(int i = 0; i < password.length(); i++){
    		char c = password.charAt(i);
			if(isLowerCase(c))
				lowerCaseCount++;
			else if(isUpperCase(c))
				upperCaseCount++;
			else if(isNumber(c))
				numberCount++;
			else
				specialCharCount++;
		}
		if(password.length() < PASSWORD_MIN_LENGTH){
    		return (PASSWORD_MIN_LENGTH - password.length() + specialCharCount); //TODO 太复杂了
		}
		if(password.length() > PASSWORD_MAX_LENGTH){
    		int overflowCharCount = password.length() - PASSWORD_MAX_LENGTH;
    		return (overflowCharCount >= specialCharCount ? overflowCharCount : specialCharCount); //TODO 太复杂了
		}

		List<Integer> dupList = new ArrayList<Integer>(); //将连续的相同字符压缩成一个数字
		char previousChar = 0;
		int previousCharCount = 0;
		for(int i = 0; i < password.length();i++){
			char currentChar = password.charAt(i);
			if(currentChar == previousChar){
				previousCharCount++;
			}
			else{
				if(previousChar != 0){
					dupList.add(previousCharCount);
				}
				previousChar = currentChar;
				previousCharCount = 1;
			}
		}
		dupList.add(previousCharCount); //最后一个

		int numOfCharToChange = 0;
		for (Integer aDupList : dupList) {
			numOfCharToChange += aDupList / 3;
		}

		int numOfCharToAdd = 0;
		if(lowerCaseCount == 0)
			numOfCharToAdd += 1;
		if(upperCaseCount == 0)
			numOfCharToAdd += 1;
		if(numberCount == 0)
			numOfCharToAdd += 1;

		return Math.max(Math.max(numOfCharToAdd, numOfCharToChange), specialCharCount);

    }

    private boolean isLowerCase(char c){
		return c >= 'a' && c <= 'z';
	}

	private boolean isUpperCase(char c){
		return c >= 'A' && c <= 'Z';
	}

	private boolean isNumber(char c){
		return c >= '0' && c <= '9';
	}

//	private boolean isSpecialChar(char c){
//		return !isLowerCase(c) && !isUpperCase(c) && isNumber(c);
//	}
}
