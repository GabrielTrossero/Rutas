import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  idEmpleado: number;

  constructor(private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idEmpleado = params.empleadoId;
    });
  }

}
