import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>(); //"bpCreated = alias"
  // newServerName = '';
  // newServerContent = '';
  @ViewChild("serverContentInput") serverContentInput: ElementRef;



  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) { //called servernameInput in the HTML, nameInput = html element, need value
    console.log(nameInput, this.serverContentInput); 
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
