import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public name : string="";
  counter=120;

  public points: number=0;
  public currentQuestion:number = 0;
  public questionList : any = [];
  correctAnswer:number = 0;
  inCorrectAnswer:number = 0;
  interval$:any;
  progress:string="0"
  isQuizCompleted : boolean=false;

  public points1: number=0;
  public currentQuestion1:number=0;
  public questionList1: any = [];
  correctAnswer1:number = 0;
  inCorrectAnswer1:number = 0;
  interval1$:any;
  progress1:string="0"
  isApptitudeCompleted : boolean=false;

  public points2: number=0;
  public currentQuestion2:number=0;
  public questionList2: any = [];
  correctAnswer2:number = 0;
  inCorrectAnswer2:number = 0;
  interval2$:any;
  progress2:string="0"
  isVerbalCompleted : boolean=false;


  constructor(private questionService : QuestionService) { }


  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();

    this.getAllQuestions1();
    this.startCounter1();

    this.getAllQuestions2();
    this.startCounter2();
  }
  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      this.questionList = res.questions;
    })
  }
  nextQuestion(){
    this.currentQuestion++;
  }
  previousQuestion(){
    this.currentQuestion--;
  }
  answer(currentQno:number,option:any){
    if(currentQno === this.questionList.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if(option.correct){
      this.points+=10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    }else{
      setTimeout(() =>{
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      },1000)
      this.points-=10;
    }
  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=120;
        this.points-=10;
      }
    });
    setTimeout(()=>{
      this.interval$.unsubscribe();
    },600000);
  }
  stopCounter(){
    this.interval$.unsubscribe();
    this.counter=0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=120;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=120;
    this.currentQuestion=0;
    this.progress="0"
  }
  getProgressPercent(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }


  getAllQuestions1(){
    this.questionService.getQuestionJson1()
    .subscribe(res=>{
      this.questionList1 = res.questions1;
    })
  }
  nextQuestion1(){
    this.currentQuestion1++;
  }
  previousQuestion1(){
    this.currentQuestion1--;
  }
  answer1(currentQno1:number,option1:any){
    if(currentQno1 === this.questionList1.length){
      this.isQuizCompleted = true;
      this.isApptitudeCompleted = true;
      this.stopCounter1();
    }
    if(option1.correct){
      this.points1+=10;
      this.correctAnswer1++;
      setTimeout(() => {
        this.currentQuestion1++;
        this.resetCounter1();
        this.getProgressPercent1();
      }, 1000);
    }else{
      setTimeout(() =>{
        this.currentQuestion1++;
        this.inCorrectAnswer1++;
        this.resetCounter1();
        this.getProgressPercent1();
      },1000)
      this.points1-=10;
    }
  }
  startCounter1(){
    this.interval1$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion1++;
        this.counter=120;
        this.points1-=10;
      }
    });
    setTimeout(()=>{
      this.interval1$.unsubscribe();
    },600000);
  }
  stopCounter1(){
    this.interval1$.unsubscribe();
    this.counter=0;
  }
  resetCounter1(){
    this.stopCounter1();
    this.counter=120;
    this.startCounter1();
  }
  resetQuiz1(){
    this.resetCounter1();
    this.getAllQuestions1();
    this.points1=0;
    this.counter=120;
    this.currentQuestion1=0;
    this.progress1="0"
  }
  getProgressPercent1(){
    this.progress1 = ((this.currentQuestion1/this.questionList1.length)*100).toString();
    return this.progress1;
  }
   //Verbal Section
  getAllQuestions2(){
    this.questionService.getQuestionJson2()
    .subscribe(res=>{
      this.questionList2 = res.questions2;
    })
  }
  nextQuestion2(){
    this.currentQuestion2++;
  }
  previousQuestion2(){
    this.currentQuestion2--;
  }
  answer2(currentQno2:number,option2:any){
    if(currentQno2 === this.questionList2.length){
      this.isQuizCompleted = true;
      this.isApptitudeCompleted = true;
      this.isVerbalCompleted = true;
      this.stopCounter2();
    }
    if(option2.correct){
      this.points2+=10;
      this.correctAnswer2++;
      setTimeout(() => {
        this.currentQuestion2++;
        this.resetCounter2();
        this.getProgressPercent2();
      }, 1000);
    }else{
      setTimeout(() =>{
        this.currentQuestion2++;
        this.inCorrectAnswer2++;
        this.resetCounter2();
        this.getProgressPercent2();
      },1000)
      this.points2-=10;
    }
  }
  startCounter2(){
    this.interval2$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion2++;
        this.counter=120;
        this.points2-=10;
      }
    });
    setTimeout(()=>{
      this.interval2$.unsubscribe();
    },600000);
  }
  stopCounter2(){
    this.interval2$.unsubscribe();
    this.counter=0;
  }
  resetCounter2(){
    this.stopCounter2();
    this.counter=120;
    this.startCounter2();
  }
  resetQuiz2(){
    this.resetCounter2();
    this.getAllQuestions2();
    this.points2=0;
    this.counter=120;
    this.currentQuestion2=0;
    this.progress2="0"
  }
  getProgressPercent2(){
    this.progress2 = ((this.currentQuestion2/this.questionList2.length)*100).toString();
    return this.progress2;
  }
}
