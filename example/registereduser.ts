import { UserInterface } from "./userinterface";

export class RegisteredUser implements UserInterface {
  constructor() {

  }

  public playVideo() : void {
    console.log("A");
  }
}