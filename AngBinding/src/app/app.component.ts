import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>welcome {{title}}</h2>
    <h2 class='text-success'>CodeEvolution</h2>
    <h2 [class]='successClass'>CodeEvolution</h2>
    <h2 [class.text-danger] ="hasError">CodeEvolution</h2>  
    <h2 [ngClass] ="messageClasses">CodeEvolution</h2>  

    `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class AppComponent {
  title = 'AngBinding';
 public successClass= "text-success"
 public hasError = true
 public isSpecial = false
 public messageClasses = {
   "text-success": this.hasError,
   "text-danger" : this.hasError,
   "teaxt-special" : this.isSpecial
 }
}
