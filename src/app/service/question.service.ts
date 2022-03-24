import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
  getQuestionJson1(){
    return this.http.get<any>("assets/questions1.json");
  }
  getQuestionJson2(){
    return this.http.get<any>("assets/questions2.json");
  }
}
