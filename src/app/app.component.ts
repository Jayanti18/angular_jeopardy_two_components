import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'app';

  questionInfo;
  usersScore: number = 0;
  usersAnswer: string = "";

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
           this.questionInfo = questionInfo[0];
           console.log(this.questionInfo.answer)
        }
      )
  }

  ngOnInit(){
    this.getQuestionInfo()
  }

  checkAnswer(theAnswer){
    
    this.usersAnswer = theAnswer;

    if(this.usersAnswer.toLowerCase() === this.questionInfo.answer.toLowerCase()){
      this.usersScore = this.usersScore + this.questionInfo.value
    }else{
      this.usersScore = this.usersScore - this.questionInfo.value
    }
    this.getQuestionInfo()
    this.usersAnswer = "";
  }

}
