import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-stuff',
  templateUrl: './input-stuff.component.html',
  styleUrls: ['./input-stuff.component.css']
})
export class InputStuffComponent implements OnInit {
  output = "output";
  locked = true;
  showSurprise = false;
  clickCount = 0;
  loops = [];
  constructor() { }

  ngOnInit(): void {
  }
  clearOutput(event: any){
    this.output = ""
  }
  revealSurprise(event:any){
    this.showSurprise = !this.showSurprise;
    this.loops.push(this.loops.length + 1);
    this.loops.push(new Date());

   
  }
  onUnlockButton(event:any){
    console.log(event.target.value);
    if ((event.target.value == "output")||(event.target.value == "")){
      console.log("LOCKED")
      this.locked = true;
    }
    else {
      this.locked = false;
    }
    
    // if ((!(event.target.value == "output"))||(!(event.target.value == ""))){
    //   this.locked = false;
    //   console.log("locked")
    // }
  }

}
