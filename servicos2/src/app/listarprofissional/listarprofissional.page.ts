import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from '../service/profissional.service';
import { Router } from '@angular/router';
import { Profissional } from '../models/profissional.model';

@Component({
  selector: 'app-listarprofissional',
  templateUrl: './listarprofissional.page.html',
  styleUrls: ['./listarprofissional.page.scss'],
})
export class ListarprofissionalPage implements OnInit {

  private profissional : Profissional[];
  
  
  constructor(private profissionalService:ProfissionalService) { }
  private router: Router;
  ngOnInit() {
    
    this.listaProfissional();
  }
    listaProfissional() {
      this.profissionalService.getPros().subscribe(
      profissionalDB => this.profissional = profissionalDB,
      erroDB => console.log(erroDB)
      );
      }
  }