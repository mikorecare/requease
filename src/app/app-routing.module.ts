import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventEquipmentComponent } from './pages/event-equipment/event-equipment.component';
import { EventVenueComponent } from './pages/event-venue/event-venue.component';
import { OfficialDocumentsComponent } from './pages/official-documents/official-documents.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { DocumentRequestsComponent } from './pages/document-requests/document-requests.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'official-documents', component: OfficialDocumentsComponent },
  { path: 'event-venue', component: EventVenueComponent },
  { path: 'event-equipment', component: EventEquipmentComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'document-requests', component: DocumentRequestsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
