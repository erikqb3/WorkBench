// import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input, ViewEncapsulation, SimpleChanges, ViewChild, ContentChild, ElementRef} from '@angular/core';
import {OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.Emulated //other options: None, Native, css manipualtion stuff
})
export class ServerElementComponent 
  implements 
    OnInit, //HOOKS
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterContentChecked,
    OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string}; //creating attributes, Input makes it work; srvElement is an alias used in the HTML
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
    console.log("constructor called");
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("Text Content" + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " +  this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called!")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log("Text Content of paragraph: " +  this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterChecked called")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  } //AfterView gives you access to HTML template elements (cant access DOM before)
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
  }



}
