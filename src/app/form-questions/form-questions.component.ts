import { Component, OnInit } from '@angular/core';

const CATEGORIES_LINK = 'https://opentdb.com/api_category.php';


type Difficulty = 'easy' | 'medium' | 'hard';
type FormData = {
  category: number;
  difficulty: Difficulty;
  amount: number;
}

@Component({
  selector: 'app-form-questions',
  templateUrl: './form-questions.component.html',
  styleUrls: ['./form-questions.component.scss']
})
export class FormQuestionsComponent implements OnInit {
  categories: string[] = [];
  difficulties:string[] = [];

  formData:FormData = {
    category: 9,
    difficulty: 'easy',
    amount: 10
  };

  constructor() {
    this.getCategoryNames();
    this.difficulties = ['Easy', 'Medium', 'Hard'];
  }

  ngOnInit(): void {

  }

  async getCategoryNames():Promise<void> {
    const req = await fetch(CATEGORIES_LINK);
    const data = await req.json() as any;
    this.categories = data.trivia_categories
      .map((obj:any) => obj.name);
  }

  watchCategory() {
    this.formData.category = parseInt(
      document.querySelector<HTMLSelectElement>('#category')?.value || '9'
    );
  }

  watchDifficulty() {
    this.formData.difficulty = document
      .querySelector<HTMLSelectElement>('#difficulty')?.value as Difficulty
  }

  watchAmount() {
    const amount = document.querySelector<HTMLInputElement>('#amount')?.value || '10';
    this.formData.amount = parseInt(amount);
  }

  submitForm() {
    if (isNaN(this.formData.amount)) {
      return alert('Amount must be a number')
    } else if (this.formData.amount < 1 || this.formData.amount > 50) {
      return alert('Amount must be between 1 and 50');
    } else {
      document.write(JSON.stringify(this.formData));
    }
  }
}
