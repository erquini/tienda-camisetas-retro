import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que esta línea esté presente

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CamisetasComponent } from './paginas/camisetas/camisetas.component';
import { HistoriasComponent } from './paginas/historias/historias.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { ListaCamisetasComponent } from './componentes/lista-camisetas/lista-camisetas.component';
import { FiltrosComponent } from './componentes/filtros/filtros.component';
import { CamisetasService } from './servicios/camisetas.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CamisetasComponent,
    HistoriasComponent,
    ContactoComponent,
    CarritoComponent,
    ListaCamisetasComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Asegúrate de que este módulo esté aquí
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CamisetasService],
  })
export class AppModule { }
