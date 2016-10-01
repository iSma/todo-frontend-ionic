import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Todos } from '../pages/todos/todos';
import { Tags } from '../pages/tags/tags';

@NgModule({
  declarations: [
    MyApp,
    Todos,
    Tags
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Todos,
    Tags
  ],
  providers: []
})
export class AppModule {}
