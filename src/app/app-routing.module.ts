import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalizeRouterModule } from 'localize-router';
import { GreentubeLoginComponent } from './greentube-login/greentube-login.component';

const routes: Routes = [
    { path: 'login', component: GreentubeLoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        LocalizeRouterModule.forRoot(routes)
    ],
    exports: [ RouterModule, LocalizeRouterModule ]
})
export class AppRoutingModule {}