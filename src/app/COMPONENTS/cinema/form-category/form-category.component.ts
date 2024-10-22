import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/MODELS/cinema.model';
import { MovieService } from 'src/app/SERVICES/cinema.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent {

  @Input() categories: Array<Category> = []
  categorySelected: Category | undefined = new Category();

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.required])
  });       
  
  constructor(private service: MovieService){
    this.categorySelected = this.categories[0]
  }

  selectCategory(category?: Category){
    if(category){
      this.categorySelected = category;  
    }
  }

}
