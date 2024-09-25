import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Corrigido para styleUrls
})
export class DashboardComponent {
  ultimoPonto: string | null = null; // Inicialização da variável

  constructor(private http: HttpClient) {}

  baterPonto() {
    const timestamp = new Date();
    this.http.post('http://localhost:8000/api/ponto', { timestamp }).subscribe(
      (response: any) => {
        // Atualiza a mensagem de confirmação
        const pontoMsg = document.getElementById('ponto-msg');
        if (pontoMsg) {
          pontoMsg.innerText = 'Ponto registrado com sucesso!';
        }

        // Atualiza o último ponto registrado
        this.ultimoPonto = timestamp.toLocaleString();
        const ultimoPontoElement = document.getElementById('ultimo-ponto');
        if (ultimoPontoElement) {
          ultimoPontoElement.innerText = this.ultimoPonto;
        }
      },
      (error) => {
        const pontoMsg = document.getElementById('ponto-msg');
        if (pontoMsg) {
          pontoMsg.innerText = 'Erro ao registrar ponto. Tente novamente.';
        }
      }
    );
  }


  
}

