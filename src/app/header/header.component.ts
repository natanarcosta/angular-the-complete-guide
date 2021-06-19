import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed=true;
  toDisplay = '';
  @Output('page') pageToDisplay = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  showThis(path){
    this.toDisplay = path;
    this.pageToDisplay.emit(this.toDisplay);
  }
}
