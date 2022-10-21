import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  imgUrl = "../assets/bridgelabz.jpg";
  Url = "https://www.bridgelabz.com";
  name = "";
  nameError = "";

 ngOnInit(): void {
    this.title = "Hello from Bridgelabz";
  }
  onClick($event:any){
    console.log("button clicked", $event)
    window.open(this.Url, "blank")
  }
  onInput($event:any){
    console.log ("chenge event occurd",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-z]{2,}$');
    if (nameRegex.test(this.name)) {
      this.nameError = "";
      return;
    } else {
      this.nameError = "Name is InCorrect";
    }
  }
}
