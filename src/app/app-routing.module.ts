import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { DetalleEmpleadoComponent } from './componentes/detalle-empleado/detalle-empleado.component';
import { CurriculumComponent } from './componentes/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './componentes/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/empleados/proyectos/proyectos.component';
import { InfoComponent } from './componentes/info/info.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'informacion'}, //ruta raiz 
  {path: 'informacion', component: InfoComponent, canActivate: [RandomGuard]}, //filtro aplicado
  {path: 'contacto', component: ContactComponent},
  {path: 'contacto2', component: ContactComponent}, //podemos reutilizar el componente 
  {path: 'sobre', component: AboutComponent},
  {path: 'about', redirectTo: 'sobre'}, //podemos redirigir a otro componente
  {path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children: [
    {path: 'proyectos', component: ProyectosComponent}, //rutas hijas de empleados
    {path: 'experiencia', component: ExperienciaComponent}, //se accede como "empleado/122/experiencia"
    {path: 'curriculum', component: CurriculumComponent},
  ]},
  {path: "**", redirectTo: 'contacto'}, //ruta por defecto para cuando ponemos una ruta "mal"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
