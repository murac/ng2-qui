import {Injectable} from '@angular/core';
import {Question} from "./question";
import {Http} from "@angular/http";

@Injectable()
export class QuizService {

    private _questions:Question[];

    constructor(private _http:Http) {

    }

    getQuestions(): Promise<Question[]>{
        return this._http.get('/questions.json').toPromise().then(response => this._questions = response.json());
    }

    check(answers:Map<string, string>):Set<string> {
        const correctAnswers = new Set<string>();
        for (const question of this._questions) {
            if (answers.get(question.id) === question.solution) {
                correctAnswers.add(question.id);
            }
        }
        return correctAnswers;
    }
}