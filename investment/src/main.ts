import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// module을 사용하면 이렇게 사용해야 한다.
platformBrowserDynamic().bootstrapModule(AppModule);
