import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Profissional } from '../models/profissional.model';

const API_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders (
    {'Content-Type' : 'application/json; charset=utf-8'}
  )
};


@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http: HttpClient) {}
  
    
    addPro(profissional: Profissional){
      return this.http.post(`${API_URL}/profissional`, profissional, httpOptions)

    }

    getPro(email: string){
      return this.http.get<Profissional>(`${API_URL}/profissional?emailProfissional=${(email)}`, httpOptions);
    }

    getPros(){
      return this.http.get<Profissional[]>(`${API_URL}/profissional`, httpOptions);
    }

    updatePro(profissional: Profissional){
      return this.http.post<Profissional>(`${API_URL}/profissional`, profissional, httpOptions);
    }
    deletePro(email: string){
      return this.http.delete(`${API_URL}/profissional/${email}`, httpOptions);
    }
}
