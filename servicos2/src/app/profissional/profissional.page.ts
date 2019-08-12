import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfissionalService } from '../service/profissional.service';
import { Router } from '@angular/router';
import { Profissional } from '../models/profissional.model';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.page.html',
  styleUrls: ['./profissional.page.scss'],
})
export class ProfissionalPage implements OnInit {

  formProfissional: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profissionalService: ProfissionalService,
    private router: Router
  ) { }

  ngOnInit(): void{

    this.formProfissional = this.formBuilder.group({
      nome:["",[
        Validators.required,
        Validators.minLength(2),
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
      ],
      servico: ["",
      [
        Validators.required
      ]
    ]
    

    })
  }

  addP(){

    const novoProfissional = this.formProfissional.getRawValue() as Profissional;
    console.log(novoProfissional)
    this.profissionalService.addPro(novoProfissional)
    .subscribe(
      () => this.router.navigateByUrl(''),
    )

    error => {
      console.log(error);
      this.formProfissional.reset();
    }

  }

}
