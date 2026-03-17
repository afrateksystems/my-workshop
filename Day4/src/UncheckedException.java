
public class UncheckedException {
      public static void main(String[] args) {
		 
		try {
		 
			validateAge(17);
		} catch (InvalidAgeException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		System.out.println("finished");
		
	}
      
      private static void validateAge(int age) {
    	  if(age<18) {
    		  throw new InvalidAgeException("age must be above 18");
    	  }
      }
}
