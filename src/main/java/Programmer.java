import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Programmer extends Worker {
	public String language;
	public String type;

	public Programmer() {
	}

	// Programmer类的初始化
	public Programmer(String name, int age, int salary, String language,
			String type) {
		super(name, age, salary, "Programmer");
		this.language = language;
		this.type = type;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	// 按照规则计算当月的奖金
	public String getBonus(int overtime) {
		if (overtime < 0) {
			throw new IllegalArgumentException("Overtime illegal!");
		}

		double reward = 0.00;

		if (this.type.equals("Develop")) {
			reward += (this.salary*0.2 +
						(overtime >= 5? 500: overtime*100));
		}
		else if (this.type.equals("Test")) {
			reward += (this.salary*0.15 +
					(overtime >= 7? 1000: overtime*150));
		}
		else {
			reward += (this.salary*0.25 +
					(overtime >= 6? 300: overtime*50));
		}

		return String.format("%,.2f", Math.abs(reward));
	}

	// 展示基本信息
	public String show() {
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.append("My name is ")
				.append(this.name)
				.append(" ; age : ")
				.append(this.age)
				.append(" ; language : ")
				.append(this.language)
				.append(" ; salary : ")
				.append(this.salary + ".");

		return stringBuilder.toString();

	}


	/**
	 * 信息隐藏
	 * 
	 * 为了保护用户的隐私，系统需要将用户号码和邮箱隐藏起来。 对输入的邮箱或电话号码进行加密。 commnet
	 * 可能是一个邮箱地址，也可能是一个电话号码。
	 *
	 * 1. 电子邮箱 邮箱格式为 str1@str2
	 * 电子邮箱的名称str1是一个长度大于2.并且仅仅包含大小写字母和数字的字符串，名称str1后紧接符号@
	 * 最后是邮箱所在的服务器str2,str2中可能包含多个. 如qq.com smail.nju.edu.cn等 邮箱地址是有效的，一个正确的示例为:
	 * str1@smail.nju.edu.cn 为了隐藏电子邮箱，所有的str1和str2中的字母必须被转换成小写的，
	 * 并且名称str1的第一个字和最后一个字的中间的所有字由 5 个 '*' 代替。 如果邮箱中含有非法字符或格式不正确，则返回illegal
	 * 
	 * 示例：
	 * 
	 * comment: "Qm@Qq.com"
	 * 
	 * return: "q*****m@qq.com"
	 *
	 * 2. 电话号码 电话号码是一串包括数字 0-9，以及 {'+', '-', '(', ')', ' '} 这几个字符的字符串。
	 * 你可以假设电话号码包含 10 到 13 个数字。 电话号码的最后 10 个数字组成本地号码，在这之前的数字组成国际号码。
	 * 国际号码是可选的。我们只暴露最后 4 个数字并隐藏所有其他数字。 本地号码有格式，并且如 "***-***-1111" 这样显示，
	 * 为了隐藏有国际号码的电话号码，像 "+111 111 111 1111"，我们以 "+***-***-***-1111"
	 * 的格式来显示。在本地号码前面的 '+' 号 和第一个 '-' 号仅当电话号码中包含国际号码时存在。 例如，一个 12 位的电话号码应当以
	 * "+**-" 开头进行显示。 注意：像 "("，")"，" " 这样的不相干的字符以及不符合上述格式的额外的减号或者加号都应当被删除。 
	 * 示例1:
	 * 
	 * comment: "1(234)567-890" 
	 * 
	 * return: "***-***-7890" 
	 * 
	 * 示例2: 
	 * 
	 * comment: "86-(10)12345678" 
	 * 
	 * return: "+**-***-***-5678"
	 * 
	 * @param comment
	 */
	public String hideUserinfo(String comment) {

		Pattern pattern = Pattern.compile("(@)"); // 通过是否含有@ 判断邮箱
		Matcher matcher = pattern.matcher(comment);
		boolean isMail = matcher.find();

		if (isMail) {
			Pattern validMail = Pattern.compile("^[A-Za-z0-9@]+$"); // 通过是否含有@ 判断邮箱
			Matcher validMatcher = pattern.matcher(comment);

			if (validMatcher.find())

			comment = comment.toLowerCase();
			int mid = matcher.start(); // @的位置
			comment = comment.substring(0, 1) + "*****" +comment.substring(mid-1);
		} else {
			String numStr = comment.replaceAll("[+\\(\\)\\[\\[\\{}-]", "");
			// 从字符串中提取出数字
			String lastFour = numStr.substring(numStr.length()-4);

			if (comment.charAt(0) == '+' || comment.charAt(0) == '-' || numStr.length()>10) {
				// 国际号码
				if (numStr.length() - 10 == 1) {
					comment = "+*-";
				} else if (numStr.length() - 10 == 2) {
					comment = "+**-";
				}
			}
			else {
				comment = "***-***-" + lastFour;
			}

		}


		return comment;
	}

}
