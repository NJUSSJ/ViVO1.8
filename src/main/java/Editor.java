import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.regex.Pattern;


public class Editor extends Worker {

	public Editor() {

	}
	
	//初始化Editor
	public Editor(String name, int age, int salary) {
        super(name, age, salary, "Editor");
	}
		
	/**
     * 文本对齐
     *
     * 根据统计经验，用户在手机上阅读英文新闻的时候，
     * 一行最多显示32个字节（1个中文占2个字节）时最适合用户阅读。
     * 给定一段字符串，重新排版，使得每行恰好有32个字节，并输出至控制台
     * 首行缩进4个字节，其余行数左对齐，每个短句不超过32个字节，
     * 每行最后一个有效字符必须为标点符号
     *
     * 示例：
     * 
     * String：给定一段字符串，重新排版，使得每行恰好有32个字符，并输出至控制台首行缩进，其余行数左对齐，每个短句不超过32个字符。
     * 
     * 控制台输出:    
     *     给定一段字符串，重新排版，  
     * 使得每行恰好有32个字符，
     * 并输出至控制台首行缩进，         
     * 其余行数左对齐，
     * 每个短句不超过32个字符。
     * 
     */
    public void  textExtraction(String data){
        String sep = System.getProperty("line.separator");
        int start=0;
        int prePunctuation=0;
        int count=4;
        int N=data.length();
        char c;
        int i=0;
        StringBuilder res=new StringBuilder("    ");
        data=data.replaceAll(" ","");
        while(i<N){
            c=data.charAt(i);
            if(isChineseByScript(c)||isChinesePunctuation(c)){
                count+=2;
            }else {
                count++;
            }
            if(count>32){
                res.append(data, start, prePunctuation+1);
                res.append(sep);
                count=0;
                start=prePunctuation+1;
                i=start;
                continue;
            }
            if(isChinesePunctuation(c)||isPunctuation(c)){
                prePunctuation=i;
            }
            i++;
        }
        res.append(data,start,N);
        System.out.println(res.toString());
    }

    private boolean isPunctuation(char c){
        return Pattern.matches("\\p{Punct}", c + "");
    }

    private boolean isChineseByScript(char c){
        Character.UnicodeScript sc=Character.UnicodeScript.of(c);
        return sc == Character.UnicodeScript.HAN;
    }

    private boolean isChinesePunctuation(char c) {
        Character.UnicodeBlock ub = Character.UnicodeBlock.of(c);
        return ub == Character.UnicodeBlock.GENERAL_PUNCTUATION
                || ub == Character.UnicodeBlock.CJK_SYMBOLS_AND_PUNCTUATION
                || ub == Character.UnicodeBlock.HALFWIDTH_AND_FULLWIDTH_FORMS
                || ub == Character.UnicodeBlock.CJK_COMPATIBILITY_FORMS
                || ub == Character.UnicodeBlock.VERTICAL_FORMS;
    }


    /**
     * 标题排序
     * 
     * 将给定的新闻标题按照拼音首字母进行排序，
     * 首字母相同则按第二个字母，如果首字母相同，则首字拼音没有后续的首字排在前面，如  鹅(e)与二(er)，
     *            以鹅为开头的新闻排在以二为开头的新闻前。
     * 如果新闻标题第一个字的拼音完全相同，则按照后续单词进行排序。如 新闻1为 第一次...  新闻2为 第二次...，
     *            则新闻2应该排在新闻1之前。
     * 示例：
     *            
     * newsList：我是谁；谁是我；我是我
     * 
     * return：谁是我；我是谁；我是我；
     *
     * @param newsList
     */
    public ArrayList<String> newsSort(ArrayList<String> newsList){
		return newsList;

    }


    /**
     * 热词搜索
     * 
     * 根据给定的新闻内容，找到文中出现频次最高的一个词语，词语长度最少为2（即4个字节），最多为10（即20个字节），且词语中不包含标点符号，可以出现英文，同频词语选择在文中更早出现的词语。
     * 
     * 示例：
     * 
     * String: 今天的中国，呈现给世界的不仅有波澜壮阔的改革发展图景，更有一以贯之的平安祥和稳定。这平安祥和稳定的背后，凝聚着中国治国理政的卓越智慧，也凝结着中国公安民警的辛勤奉献。
     * 
     * return：中国
     * 
     * @param newsContent
     */
    public String findHotWords(String newsContent){
        String mostFrequentPhrase = "";
        int mostFrequency = 0;

        for(int startPoint = 0; startPoint < newsContent.length(); startPoint++){
            StringBuilder phrase = new StringBuilder();
            int phraseLength = 0;
            for(int stringLength = 1; stringLength <= 20; stringLength++){  // stringLength为词语字符串长度
                char newChar = newsContent.charAt(startPoint + stringLength - 1);
                if(!includedInWord(newChar)){
                    break;
                }
                phrase.append(newChar);
                if(isChineseByScript(newChar))
                    phraseLength += 2;
                else
                    phraseLength += 1;
                if(phraseLength < 4)
                    continue;
                if(phraseLength > 20)
                    break;

                int frequency = countFrequency(newsContent, phrase.toString());
                if(frequency > mostFrequency){
                    mostFrequentPhrase = phrase.toString();
                    mostFrequency = frequency;
                }


            }
        }
		return mostFrequentPhrase;

    }


    private boolean isEnglishPunctuation(char c){
        return Pattern.matches("\\p{Punct}", c + "");
    }

    private boolean includedInWord(char c){
        return !isChinesePunctuation(c) && !isEnglishPunctuation(c) && (c != ' ');
    }

    private int countFrequency(String text, String pattern){
        int frequency = 0;
        for(int i = 0; i < text.length() - pattern.length(); i++){
            boolean matched = true;
            for(int j = 0; j < pattern.length(); j++){
                if(text.charAt(i+j) != pattern.charAt(j)) {
                    matched = false;
                    break;
                }
            }
            if(matched)
                frequency++;
        }
        return frequency;
    }

    /**
    *
    *相似度对比
    *
    * 为了检测新闻标题之间的相似度，公司需要一个评估字符串相似度的算法。
    * 即一个新闻标题A修改到新闻标题B需要几步操作，我们将最少需要的次数定义为 最少操作数
    * 操作包括三种： 替换：一个字符替换成为另一个字符，
    *              插入：在某位置插入一个字符，
    *              删除：删除某位置的字符
    *  示例：
    *      中国队是冠军  -> 我们是冠军
    *      最少需要三步来完成。第一步删除第一个字符  "中"
    *                       第二步替换第二个字符  "国"->"我"
    *                       第三步替换第三个字符  "队"->"们"
    *      因此 最少的操作步数就是 3
    *
    * 定义相似度= 1 - 最少操作次数/较长字符串的长度
    * 如在上例中：相似度为  (1 - 3/6) * 100= 50.00（结果保留2位小数，四舍五入，范围在0.00-100.00之间）
    *
    *
    * @param title1
    * @param title2
    */
   public double minDistance(String title1, String title2){
       int[][] d;
       int n=title1.length();
       int m=title2.length();
       int i;
       int j;
       char ch1;
       char ch2;
       int temp;
       if(n == 0){
           return getSimilarityRatio(title1,title2,m);
       }
       if(m == 0){
           return getSimilarityRatio(title1,title2,n);
       }
       d=new int[n + 1][m + 1];
       for(i = 0; i <= n; i++){
           d[i][0] = i;
       }
       for(j = 0; j <= m; j++){
           d[0][j]=j;
       }
       for(i = 1;i <= n; i++){
           ch1 = title1.charAt(i -1);
           for(j = 1;j <= m; j++){
               ch2 = title2.charAt(j - 1);
               if(ch1 == ch2){
                   temp = 0;
               }else{
                   temp = 1;
               }
               d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + temp);
           }
       }
       return getSimilarityRatio(title1,title2,d[n][m]);
   }

   private int min(int a,int b,int c){
       if(a >= b){
           a =b;
       }
       return a < c ? a : c;
   }

   private double getSimilarityRatio(String str1,String str2,int minStep){
       double res = (1-(double)minStep/Math.max(str1.length(),str2.length()))*100;
       return BigDecimal.valueOf(res).setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
   }
}
