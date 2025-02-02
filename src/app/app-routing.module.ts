import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa los componentes correspondientes a cada página
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CamisetasComponent } from './paginas/camisetas/camisetas.component';
import { HistoriasComponent } from './paginas/historias/historias.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';

// Define las rutas principales
const routes: Routes = [
  { path: '', component: InicioComponent }, // Ruta por defecto (página de inicio)
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'historias', component: HistoriasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: '' } // Redirige cualquier ruta desconocida al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas globales
  exports: [RouterModule] // Exporta RouterModule para usarlo en otros módulos
})
export class AppRoutingModule { }