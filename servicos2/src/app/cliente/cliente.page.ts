import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  formCliente: FormGroup;

  constructor(
    private formBuilder: FormBuilder, //métodos de validação
    private clienteService: ClienteService,//método criado para manipular os dados na base
    private router: Router //rota para uma outra página, para respota ao usuário
  ) {
    
   }

  ngOnInit(): void{

    this.formCliente = this.formBuilder.group({
      nome: ["",[
        //parâmetro responsável pela validação do contéudo do campo
        Validators.required, //Campo requirido
        Validators.minLength(2), //Quantidade mínima de caracteres
        Validators.maxLength(100), //Quantidade máxima de caracteres
        Validators.pattern(/^[a-zA-Z]+$/),//Validação tipo de caracteres
      ]
        
      ],
      email: [
        "",[

          Validators.required,
          Validators.maxLength(100),
          Validators.email
        ]
      ],
      endereco:["",
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      senha:["",
        [
          Validators.required
        ]
      ]
    })   
  }
  
  add(){
    //enviar para os serviços
    /*resgatando os valores dos campos e fazendo um cast(conversão)
    para o modelo(template) Cliente */

      const novoCliente = this.formCliente.getRawValue() as Cliente;
console.log(novoCliente)
      this.clienteService.addCliente(novoCliente)
      .subscribe(
        () => this.router.navigateByUrl(''), //faz um redirecionamento
      )

      error => {
        console.log(error);
        this.formCliente.reset();
      }
  }
}