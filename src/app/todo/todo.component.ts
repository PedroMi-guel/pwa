import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './todo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  list:string[] = [];
  form:FormGroup = new FormGroup({
    taskName: new FormControl()
  });

  isInstalled!:boolean;
  deferredPrompt:any;

  constructor(
    private router:Router,
  ){
  }

  addTask(){
    this.list.push(this.form.value.taskName)
    this.form.reset();
  }

  removeTask(index:number){
    this.list.splice(index, 1);
  }

  goToRecipes(){
    this.router.navigate(['/recipes'])
  }
}
