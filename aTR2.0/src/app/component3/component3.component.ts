import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-component3]',
  template: `
  <h3>component3</h3>
  <div class="app-servers"></div>
  <h3>component3</h3>
  <div class="app-servers"></div>`, //use back ticks ` to have multi lines, javascript template expressions (use templateUrl if you need to do more than 3 lines of code)
  styles: [`
  h3 {
    color:red;
  }`]
})
export class component3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
