
public class ArrayReverse {
	public static void main(String[] args) {
		int[] arr = {5,9,2,7,1};
		int [] rev = new int[5];
		int j =0;
	       for(int i=arr.length-1;i>=0;i--) {
	    	   
	    	   rev[j]=arr[i];
	    	   
	    	   j++;
	    	   
	       }
	       for(int i =0;i<rev.length;i++) {
	    	   System.out.print(rev[i]);
	       }
	}
       
}
