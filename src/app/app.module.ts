import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderCompoenent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { sharedModule } from "./shared/card/shared.module";
import { tasksModule} from "./tasks/tasks.module";


@NgModule ({
    declarations: [
        AppComponent, 
        HeaderCompoenent, 
        UserComponent, 
        TaskComponent, 
        NewTaskComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, sharedModule, tasksModule]
})
export class AppMouule {} 