import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UserAdapter } from 'src/app/adapters/user.adapter';
import { ARUser } from 'src/app/models/ar/ARUser';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  public userData: UserAdapter[] = [];

  public get tHead(): (keyof UserAdapter)[] {
    return ['id', 'name', 'email', 'action'];
  }

  constructor(
    private readonly firestore: FirestoreService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.getData();
  }

  private async getData(): Promise<void> {
    await this.firestore.getData('users').then((data: ARUser[]) => {
      this.userData = data.map((user: ARUser) => new UserAdapter(user));
      this.cdr.detectChanges();
    });
  }

  public viewUser(user: ARUser): void {
    //TODO
  }

  public editUser(user: ARUser): void {
    //TODO
  }

  public deleteUser(user: ARUser): void {
    //TODO
  }
}
