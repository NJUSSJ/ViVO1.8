import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class ProgrammerTest {
	
	@Rule
	public ExpectedException thrown= ExpectedException.none();

	@Test(timeout=4000)
	public void test1() {
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertEquals("My name is p ; age : 21 ; language : Java ; salary : 8000.",p.show());
	}
	
	@Test(timeout=4000)
	public void test2() {
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertEquals("2,250.00",p.getBonus(5));
	}

	@Test(timeout=4000)
	public void test3() {
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("Overtime illegal!");
		p.getBonus(-1);
	}
	
	@Test(timeout=4000)
	public void test4() {
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertEquals("q*****m@qq.com",p.hideUserinfo("Qm@Qq.com"));
	}
	
	@Test(timeout=4000)
	public void test5() {
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertEquals("***-***-7890",p.hideUserinfo("1(234)567-890"));
	}
	
	@Test(timeout=4000)
	public void test6() {
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertEquals("+**-***-***-5678",p.hideUserinfo("86-(10)12345678"));
	}
}
