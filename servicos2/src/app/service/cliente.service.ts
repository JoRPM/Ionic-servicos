import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';

const API_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders (
    {'Content-Type' : 'application/json; charset=utf-8'}
  )
};

@Injectable({
  //senha e login do banco de dados....
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

 /* CRUD */

 //Inserir os Dados do Cliente

 addCliente(cliente: Cliente){
   return this.http.post(`${API_URL}/cliente`, cliente, httpOptions)
 }

//Pesquisar o cliente pelo email

getCliente(email: string){
  return this.http.get<Cliente>(`${API_URL}/cliente?emailCliente=${(email)}`, httpOptions);
}
//Pesquisar todos os clientes

getClientes(){
  return this.http.get<Cliente[]>(`${API_URL}/cliente`, httpOptions);
}

updateCliente(cliente: Cliente){
  return this.http.post<Cliente>(`${API_URL}/cliente`, cliente, httpOptions);
}

//Apagar um registro
deleteCliente(email: Cliente){
  return this.http.delete(`${API_URL}/cliente/${email}`, httpOptions);
}


}
