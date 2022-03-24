import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>welcome {{title}}</h2>
    <input [id] = "myId" type="text" value="name">
    <input [disabled] = "isDisabled" type="text" value="name">
    <input bind-disabled = "isDisabled" type="text" value="name">

    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngBinding';
  myId = "testId";
  isDisabled = true;
}
