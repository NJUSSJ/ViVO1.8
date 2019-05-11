import static org.junit.Assert.*;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class EditorTest {
	
	String sep;
	PrintStream console = null;
	ByteArrayOutputStream out = null;

	@Before
	public void setUp() throws Exception {
		out = new ByteArrayOutputStream();
		console = System.out;
		System.setOut(new PrintStream(out));
		sep = System.getProperty("line.separator");
	}

	@After
	public void tearDown() throws Exception {
		out.close();
		System.setOut(console);
	}
	
	@Test(timeout=4000)
	public void test1() {
		Editor s = new Editor("s",21,8000);
		assertEquals("My name is s ; age : 21 ; salary : 8000 ; department : Editor.",s.show());
	}
	
	@Test(timeout=4000)
	public void test2() {
		Editor e = new Editor("e",21,8000);
		String newsContent = "今天的中国，呈现给世界的不仅有波澜壮阔的改革发展图景，更有一以贯之的平安祥和稳定。这平安祥和稳定的背后，凝聚着中国治国理政的卓越智慧，也凝结着中国公安民警的辛勤奉献。";
		assertEquals("中国",e.findHotWords(newsContent));
	}
	
	@Test(timeout=4000)
	public void test3() {
		Editor e = new Editor("e",21,18000);
		String title1 = "中国队是冠军";
		String title2 = "我们是冠军";
		assertEquals(50.00,e.minDistance(title1, title2),0.0000001);
	}
	
	@Test(timeout=4000)
	public void test4() {
		Editor e = new Editor("e",21,18000);
		ArrayList<String> newsList = new ArrayList<String>();
		newsList.add("我是谁");
		newsList.add("谁是我");
		newsList.add("我是我");
		ArrayList<String> finalList = new ArrayList<String>();
		List list = Arrays.asList("谁是我","我是谁","我是我");
		finalList.addAll(list);
		assertEquals(finalList,e.newsSort(newsList));
	}
	
	@Test(timeout=4000)
	public void test5() {
		Editor e = new Editor("e",21,18000);
		String data = "给定一段字符串，重新排版，使得每行恰好有32个字符，并输出至控制台首行缩进，其余行数左对齐，每个短句不超过32个字符。";
		e.textExtraction(data);
		String ans = out.toString();
		assertEquals("    给定一段字符串，重新排版，" + sep + "使得每行恰好有32个字符，" + sep + "并输出至控制台首行缩进，" + sep + "其余行数左对齐，" + sep + "每个短句不超过32个字符。" + sep, ans);
	}
}
