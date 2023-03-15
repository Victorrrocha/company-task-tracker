import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { CheckUnsavedChangesGuard } from "./shared/guards/check-unsaved-changes.guard";
import { OnlyAuthenticatedGuard } from "./shared/guards/only-authenticated.guard";
import { QuotesResolver } from "./shared/resolvers/quotes.resolver";
import { ThreadNewComponent } from "./threads/thread-new/thread-new.component";
import { ThreadPageComponent } from "./threads/thread-page/thread-page.component";
import { UnselectedPageComponent } from "./threads/unselected-page/unselected-page.component";

const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
        canActivate: [OnlyAuthenticatedGuard],
        children: [
            {
                path: 'thread',
                title: 'thread',
                component: MainComponent,
                children: [
                    {
                        path: 'new',
                        title: 'new',
                        canDeactivate: [CheckUnsavedChangesGuard],
                        component: ThreadNewComponent
                    },
                    {
                        path: ':id',
                        title: 'threadid',
                        component: ThreadPageComponent
                    },
                ]
            },
            {
                path: '',
                title: 'thread',
                pathMatch: 'full',
                // resolve: {
                //     quote: QuotesResolver
                // },
                component: UnselectedPageComponent
            },
        ]
    },
    {
        path: 'auth',
        title: 'Authentication',
        component: AuthenticationComponent
    },
    {
        path: '**',
        redirectTo: 'Home Page'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }