import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../network.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  networkStatus: any[];

  constructor(
    private authService: AuthService,
    private networkService: NetworkService,
    private router: Router
  ) { }

  ngOnInit() {
    // Obtenha os dados de status da rede ao carregar a página
    this.fetchNetworkStatus();
  }

  async fetchNetworkStatus() {
    try {
      // Simule a obtenção de dados da API de rede
      this.networkStatus = await this.networkService.getStatus();
    } catch (error) {
      console.error('Erro ao obter status da rede:', error);
    }
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigateByUrl('/login');
      })
      .catch(error => {
        console.error('Erro ao fazer logout:', error);
      });
  }
}
