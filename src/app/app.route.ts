
import {Routes} from "@angular/router"
import { WelcomeComponent } from './welcome.component';
import { ResourceNotFoundComponent} from './notfouunt.component';
export const appRoutes:Routes = [
    {path:"home",component:WelcomeComponent},
    {path:"home",component:WelcomeComponent},
    {path:"**",component:ResourceNotFoundComponent}
];