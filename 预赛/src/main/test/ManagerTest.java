import static org.junit.Assert.*;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class ManagerTest {
	
	@Rule
	public ExpectedException thrown= ExpectedException.none();
	
	@Test(timeout=4000)
	public void test1() {
		thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("age must be greater than 18 and salary must be greater than 2000.");
		Manager m = new Manager("a",1,1,"Programmer");
	}
	
	@Test(timeout=4000)
	public void test2() {
		Manager m = new Manager("a",19,10000,"Programmer");
		assertEquals("My name is a ; age : 19 ; salary : 10000 ; department : Programmer.",m.show());
	}
	
	@Test(timeout=4000)
	public void test3() {
		Manager m = new Manager("a",19,10000,"Programmer");
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertEquals("My name is p ; age : 21 ; language : Java ; salary : 8000.",m.inquire(p));
	}
	
	@Test(timeout=4000)
	public void test4() {
		Manager m = new Manager("a",19,10000,"Editor");
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		thrown.expect(IllegalArgumentException.class);
        thrown.expectMessage("Access denied!");
		m.inquire(p);
	}
	
	@Test(timeout=4000)
	public void test5() {
		Manager m = new Manager("a",19,10000,"Editor");
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertFalse(m.lead(p));
	}
	
	@Test(timeout=4000)
	public void test6() {
		Manager m = new Manager("a",19,10000,"Programmer");
		Programmer p = new Programmer("p",21,8000,"Java","UI");
		assertTrue(m.lead(p));
	}
	
	@Test(timeout=4000)
	public void test7() {
		Manager m = new Manager("a",19,10000,"Programmer");
		assertEquals("Empty",m.print());
	}
	
	@Test(timeout=4000)
	public void test8() {
		Manager m = new Manager("a",19,10000,"Programmer");
		Programmer p1 = new Programmer("p1",21,8000,"Java","UI");
		Programmer p2 = new Programmer("p2",34,9000,"Java","Test");
		m.lead(p1);
		m.lead(p2);
		assertEquals("Statement for a\n - p1\n - p2",m.print());
	}
	
}
