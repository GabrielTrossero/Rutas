import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { InfoComponent } from './componentes/info/info.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'informacion'}, //ruta raiz 
  {path: 'informacion', component: InfoComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'contacto2', component: ContactComponent}, //podemos reutilizar el componente 
  {path: 'sobre', component: AboutComponent},
  {path: 'about', redirectTo: 'sobre'}, //podemos redirigir a otro componente
  {path: "**", redirectTo: 'contacto'}, //ruta por defecto para cuando ponemos una ruta "mal"
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
