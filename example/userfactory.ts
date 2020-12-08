import { UserInterface } from "./userinterface";
import { User } from "./user";
import { RegisteredUser } from "./registereduser";

class UserFactory {
  public getUserType(userType: string) : UserInterface {
    if(userType == "" || userType == null) 
      return new User();
    if(userType == "RegisteredUser")
      return new RegisteredUser();
  }
}