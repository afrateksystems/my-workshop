package LMS;
public class UtilValidate {
     public static boolean validateString(String input) {
    	 return(input!=null && !input.trim().equals(""));
    	 
     }
     public static boolean validateNumeric(float input) {
    	 return(input>0);
    	 
     }
}
