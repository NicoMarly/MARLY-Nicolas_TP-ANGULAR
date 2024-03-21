import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { DateComponent } from './components/date/date.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
import { FormulairesComponent } from './forms/formulaires/formulaires.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EtudiantComponent,
    SpecialiteComponent,
    DateComponent,
    EtudiantParisComponent,
    EtudiantHorsParisComponent,
    FormEtudiantComponent,
    FormSpecialiteComponent,
    FormulairesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'etudiant', component: EtudiantComponent },
      { path: 'specialite', component: SpecialiteComponent },
      { path: 'forms', component: FormulairesComponent },
      { path: 'formetudiant', component: FormEtudiantComponent },
      { path: 'formspec', component: FormSpecialiteComponent }
    ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
