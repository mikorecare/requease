import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environment/environment.prod';
import { MatTableModule } from '@angular/material/table';

// Angular Material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NavbarComponent } from './components/navbar/navbar.component';
import { initializeApp } from 'firebase/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getFirestore } from 'firebase/firestore'; // Firestore import
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreService } from './services/firestore.service';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, UsersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule,

    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [
    FirestoreService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    const app = initializeApp(environment);
    const firestore = getFirestore(app);
  }
}
