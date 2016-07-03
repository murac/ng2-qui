import {Component, Output, Input, EventEmitter} from '@angular/core';
import {Question} from "./question";

@Component({
    selector: 'question',
    template: require('./question.component.html')
})
export class QuestionComponent{
    @Input() question: Question;
    @Input() correct: boolean;
    @Output() answer = new EventEmitter<string>();

    get checked(){
        return this.correct !== undefined;
    }
}