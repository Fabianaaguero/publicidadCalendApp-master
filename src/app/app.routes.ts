import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { QrComponent } from './componentes/qr/qr.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },        // Ruta por defecto
  { path: 'contacto', component: ContactoComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'qr', component: QrComponent },          // Ruta para el componente QrComponent
  { path: '**', component: InicioComponent },      // Ruta para cualquier otra ruta no definida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
