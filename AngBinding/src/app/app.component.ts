import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>welcome {{title}}</h2>
    <h2 [style.color]= "'red'">CodeEvolution</h2>
    <h2 [style.color]= "hasError ? 'red' : 'blue'">CodeEvolution</h2>
    <h2 [style.color]= "highlightColor">CodeEvolution</h2>
    <h2 [ngStyle]= "titleStyles">CodeEvolution</h2>

    `,
  styles: []
})
export class AppComponent {
  title = 'AngBinding';
 public successClass= "text-success"
 public hasError = false
 public isSpecial = false
 public highlightColor = "orange"
 public titleStyles = {
   color : 'aqua',
   fontStyle: 'italic'
 }
}
