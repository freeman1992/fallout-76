import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModsComponent } from './components/mods/mods.component';
import { ChartsComponent } from './components/charts/charts.component';
import { PipboyProfileComponent } from './components/pipboy-profile/pipboy-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';



const routes: Routes = [
	{ path: 'index', redirectTo: '/', pathMatch: 'full' },
	{ path: '', component: HomeComponent },
	{ path: 'pipboy', component: PipboyProfileComponent },
	{ path: 'charts', component: ChartsComponent },
	{ path: 'mods', component: ModsComponent },
	{ path: '**', component: Error404Component }

];


@NgModule({
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule, // imports firebase/storage only needed for storage features
		RouterModule.forRoot(routes),
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ModsComponent,
		ChartsComponent,
		PipboyProfileComponent,
		HomeComponent,
		Error404Component
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [RouterModule]
})
export class AppModule { }
