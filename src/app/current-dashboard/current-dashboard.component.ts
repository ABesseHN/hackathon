import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-current-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './current-dashboard.component.html',
  styleUrl: './current-dashboard.component.css'
})
export class CurrentDashboardComponent {

}
