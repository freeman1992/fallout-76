import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipboyProfileComponent } from '../components/pipboy-profile/pipboy-profile.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: []
})
export class AppRoutingModule {

}

const routes: Routes = [
	{ path: 'pipboy', component: PipboyProfileComponent }
];
