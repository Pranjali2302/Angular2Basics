
import { UserService } from './services/user/user.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { PlaceholderComponent } from './component/placeholder/placeholder.component';
import { HeaderComponent } from './component/header/header.component';
import { SubjectComponent } from './component/subject/subject.component';
import { IncrementComponent } from './component/increment/increment.component';
import { DecrementComponent } from './component/decrement/decrement.component';
import { BuildInAtrDirComponent } from './component/build-in-atr-dir/build-in-atr-dir.component';
import { BuildInStrDirComponent } from './component/build-in-str-dir/build-in-str-dir.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { ChangeCaseDirective } from './directives/change-case/change-case.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { PipeComponent } from './component/pipe/pipe.component';
import { FilterPipe } from './pipe/filter/filter.pipe';
import { AppendorPipe } from './pipe/appendor/appendor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    PlaceholderComponent,
    HeaderComponent,
    SubjectComponent,
    IncrementComponent,
    DecrementComponent,
    BuildInAtrDirComponent,
    BuildInStrDirComponent,
    DirectivesComponent,
    ChangeCaseDirective,
    UnlessDirective,
    TemplateFormComponent,
    ReactiveFormComponent,
    PipeComponent,
    AppendorPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPRIEt8me3T7GeCtJwy2KiWsscixjZ9rM'
    }),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
