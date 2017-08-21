import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Question } from '../../models/Question';

@Component({
	selector: 'app-question-list',
	templateUrl: './question-list.component.html',
	styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
	questions:Question[];

	constructor(public dataService: DataService) {

	}

	ngOnInit() {
		this.dataService.getQuestions()
		.subscribe(res => {
			this.questions = res.result
		});
	}

	addQuestion(question) {
		return this.dataService.addQuestion(question).subscribe(res => {
			console.log(res);
			this.questions.splice(0, 0, res.result);
		});
	}
}
