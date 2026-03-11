
public class person {
       private String name;
       private int age; //immutable
       private Address address;
       private Phone phone;
       Pet pet;
       public Pet getPet() {
		return pet;
	}
	   public void setPet(Pet pet) {
		   this.pet = pet;
	   }
	   public void adoptPet(String pet) {
    	   
       }
       public String getName() {
		return name;
	}
	   public void setName(String name) {
		   this.name = name;
	   }
	   public Address getAddress() {
		   return address;
	   }
	   public void setAddress(Address address) {
		   this.address = address;
	   }
	   public Phone getPhone() {
		   return phone;
	   }
	   public void setPhone(Phone phone) {
		   this.phone = phone;
	   }
	   
       
}
