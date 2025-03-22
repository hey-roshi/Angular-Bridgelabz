import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Helloworld";
  imgUrl = "assets/bridgelabzlogo.webp";
  url = "https://www.bridgelabz.com/";
  nameError: string = "";
  
  private _userName: string = "";

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    if (value.length >= 3 && /^[A-Z][a-zA-Z]*$/.test(value)) {
      this._userName = value;
      this.nameError = "";
    } else {
      this.nameError = "Invalid Name: First letter should be capital & at least 3 letters.";
    }
  }

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz!!!";
  }

  onClick($event: Event) {
    console.log("Logo Clicked!", $event);
    window.open(this.url, "_blank");
  }
}
