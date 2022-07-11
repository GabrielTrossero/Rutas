import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { InfoComponent } from './componentes/info/info.component';

const routes: Routes = [
  {path: 'informacion', component: InfoComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'contacto2', component: ContactComponent}, //podemos reutilizar el componente 
  {path: 'sobre', component: AboutComponent},
  {path: 'about', redirectTo: 'sobre'}, //o podemos redirigir a otro componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
