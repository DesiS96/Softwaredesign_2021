import { UserInterface } from "./userinterface";

export class User implements UserInterface {
  constructor() {

  }

  public playVideo() : void {
    console.log("A");
  }
}