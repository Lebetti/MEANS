import { NgModule } from "@angular/core";

//Componente principal
import { PagesComponent } from './pages.component';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

//Modulo Shared
import { SharedModule } from '../shared/shared.module';

//Pages routing
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        ProgressComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ],
    exports:[
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        ProgressComponent
    ]

})
export class PagesModule{}