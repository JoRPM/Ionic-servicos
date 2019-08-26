import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.page.html',
  styleUrls: ['./listacliente.page.scss'],
})
export class ListaclientePage implements OnInit {

  private cliente : Cliente[];
  
  
  constructor(private clienteService:ClienteService) { }
  private router: Router;
  ngOnInit() {
    
    this.listaCliente();
  }
    listaCliente() {
      this.clienteService.getClientes().subscribe(
      clienteDB => this.cliente = clienteDB,
      erroDB => console.log(erroDB)
      )
      }

      deleteCliente(id){
        this.clienteService.deleteCliente(id).subscribe();
    
          window.location.reload();
      }

      atualizaCliente(id: number) {
        this.router.navigateByUrl(`/listacliente`)
        }
  

}
