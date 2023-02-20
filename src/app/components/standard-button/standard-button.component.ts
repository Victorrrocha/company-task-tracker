import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-standard-button',
  templateUrl: './standard-button.component.html',
  styleUrls: ['./standard-button.component.scss']
})
export class StandardButtonComponent {
  @Input() title: string = "";
  @Input() iconName: string = "";
}
