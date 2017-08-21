import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../models/Question';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	baseUrl:string = "https://sellinghive.applite.com/NgService/";
	questions:Question[];
	constructor(public http: Http) { }

	getQuestions() {
		return this.http.get(this.baseUrl+'loadFaqQuestion')
		.map(res => res.json());
	}

	addQuestion(question) {
		return this.http.post(this.baseUrl+'addFaqQuestion', question)
		.map(res => res.json());
	}

	removeQuestion(question) {
		return this.http.post(this.baseUrl+'removeFaqQuestion', question)
		.map(res => res.json());
	}
}
