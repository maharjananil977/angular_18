import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 users: Array<string> = ['John','Sam','Smith','Raj']; 
 usersObj: Array<any> = [
  {
    id:1,
    name:'John',
    age: 35
  },
  {
    id:2,
    name:'John',
    age: 35
  },
  {
    id:3,
    name:'John',
    age: 35
  },
  {
    id:4,
    name:'John',
    age: 35
  },
  {
    id:5,
    name:'John',
    age: 35
  }
 ]

 addNewUser(){
  this.usersObj.push({id:6,name:'test',age:33})
 }
 deleteUser(user :any){
  let index = this.usersObj.indexOf(user)
  console.log(index);
  this.usersObj.splice(index, 1);
 }
}
