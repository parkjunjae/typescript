import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";


@NgModule({
    declarations: [TasksComponent],
    exports: [TasksComponent]
})

export class tasksModule {}