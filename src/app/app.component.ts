import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';  // Importe o componente do dashboard

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DashboardComponent]  // Certifique-se de adicionar o componente aqui
})
export class AppComponent {
  title = 'meu-app';
}
