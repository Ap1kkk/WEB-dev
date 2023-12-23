import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { ScoreboardPageComponent } from "./scoreboard-page/scoreboard-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { UserProfilePageComponent } from "./user-profile-page/user-profile-page.component";
import { UnityComponent } from "./unity/unity.component";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AdminGuard } from "../shared/guards/admin.guard";
import { AuthenticatedGuard } from "../shared/guards/authenticated.guard";

const routes: Routes = [
    {path: 'system', component: SystemComponent, canActivate: [AuthenticatedGuard], children: [
        {path: 'game', component: UnityComponent},
        {path: 'scoreboard', component: ScoreboardPageComponent},
        {path: 'main',component: MainPageComponent},
        {path: 'user-profile', component: UserProfilePageComponent},
        {path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard] },
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {

}