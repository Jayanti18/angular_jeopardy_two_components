import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  @Input() questionInfo;
  @Input() usersScore;
  usersAnswer = "";
  @Output() userClickedSubmit = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  tellParentToCheckAnswer(){
    this.userClickedSubmit.emit(this.usersAnswer);
    this.usersAnswer = "";
  }

}
