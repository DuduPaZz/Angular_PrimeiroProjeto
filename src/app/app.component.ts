import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component'; // Importe o componente do dashboard
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [DashboardComponent, HttpClientModule]  // Adicione o HttpClientModule aqui
})
export class AppComponent {
  title = 'meu-app';
}
