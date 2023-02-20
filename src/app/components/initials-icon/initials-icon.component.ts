import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-initials-icon',
  templateUrl: './initials-icon.component.html',
  styleUrls: ['./initials-icon.component.scss']
})
export class InitialsIconComponent {
  @Input() initials: string = "";
}
