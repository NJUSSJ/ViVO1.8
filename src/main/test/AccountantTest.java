import static org.junit.Assert.*;

import org.junit.Test;


public class AccountantTest {

	@Test
	public void test1() {
		Accountant a = new Accountant("p",21,8000,"IamOK");
		assertEquals(3,a.checkPassword());
	}
	
	@Test
	public void test2() {
		Accountant a = new Accountant("p",21,8000,"Helloworld6");
		assertEquals(0,a.checkPassword());
	}

	@Test
	public void test3() {
		Accountant a = new Accountant("p",21,8000,"IamOK");
		assertEquals("One",a.numberToWords("1"));
	}
	
	@Test
	public void test4() {
		Accountant a = new Accountant("p",21,8000,"IamOK");
		assertEquals("illegal",a.numberToWords("-1"));
	}
}
