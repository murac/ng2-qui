import {Component} from '@angular/core';
// import {NgForm}    from '@angular/common';
import {QuestionComponent} from "./question.component";
import {QuizService} from "./quiz.service";
import {Question} from "./question";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'quiz-app',
    directives: [QuestionComponent],
    providers: [QuizService, HTTP_PROVIDERS],
    template: require('./app.component.html')
})
export class AppComponent {
    questions:Question[];
    correctAnswers:Set<string>;
    private answers = new Map<string, string>();

    constructor(private _quizService:QuizService) {
        _quizService.getQuestions().then(questions => this.questions = questions);
    }


    onAnswer(questionId:string, answerId:string) {
        this.answers.set(questionId, answerId);
    }

    isCorrect(questionId):boolean {
        if (this.correctAnswers) {
            return this.correctAnswers.has(questionId);
        }
    }

    check() {
        this.correctAnswers = this._quizService.check(this.answers);
    }

    get checked() {
        return this.correctAnswers !== undefined;
    }


}