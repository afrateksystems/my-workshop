
public class Employee {
	   int empID;
	   String Position;
	   public String getPosition() {
		return Position;
	}
	   public void setPosition(String position) {
		   Position = position;
	   }
	   public int getEmpID() {
		   return empID;
	   }
	   
       public void hire() {
    	   System.out.println("the candidate is hired");
       }
       public void Terminate() {
    	   System.out.println("the employee is terminated");
       }
       public void getHistory() {
    	   System.out.println("the history details of the employee are"+getPosition()+getEmpID());
       }
       public void getCurrent() {
    	   System.out.println("the employee details are"+getPosition()+getEmpID());
       }
}
