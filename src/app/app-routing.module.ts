import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { ThreadNewComponent } from "./threads/thread-new/thread-new.component";
import { ThreadPageComponent } from "./threads/thread-page/thread-page.component";
import { UnselectedPageComponent } from "./threads/unselected-page/unselected-page.component";

const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
        children: [
            {
                path: 'thread',
                title: 'thread',
                component: MainComponent,
                children: [
                    {
                        path: 'new',
                        title: 'new',
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
                component: UnselectedPageComponent
            },
        ]
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