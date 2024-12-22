import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [SignupComponent]
})
export class SignupModule { }