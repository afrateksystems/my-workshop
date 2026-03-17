
public class DuplicateArray {
	public static void main(String[] args) {
		int[] arr = {1,6,3,6,4,3,9,99};
		int duplicateValues[] = new int[20];
		int k=0;
		for(int i=0;i<arr.length;i++) {
			for(int j=i+1;j<arr.length;j++) {
				if(arr[i]==arr[j]) {
					duplicateValues[k]=arr[i];
					System.out.println(duplicateValues[k]);
					
					k++;
					
				}
			}
		}
		System.out.println("the total number of duplicates"+k);
	}

}
