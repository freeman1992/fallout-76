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
import { AppRoutingModule } from './modules/app-routing.module';
import { ModsComponent } from './components/mods/mods.component';
import { ChartsComponent } from './components/charts/charts.component';
import { PipboyProfileComponent } from './components/pipboy-profile/pipboy-profile.component';

@NgModule({
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule, AppRoutingModule // imports firebase/storage only needed for storage features
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		ModsComponent,
		ChartsComponent,
		PipboyProfileComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
