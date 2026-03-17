
public class SecondLargeArray {
	public static void main(String[] args) {
		int[] arr = {1,6,4,3,9};
		int largest=arr[0];
		int secondlargest=Integer.MIN_VALUE;
		for(int i=1;i<arr.length;i++) {
			if(arr[i]>largest) {
				 secondlargest = largest;
			     largest = arr[i];
			}
			else if(arr[i]>secondlargest && arr[i]!=largest){
				 secondlargest = arr[i];
				 
			}
			
		}
		System.out.println(secondlargest);
	}

}
