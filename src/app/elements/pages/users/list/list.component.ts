import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UsersService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  onActionChange(event: Event, user: any) {
    const action = (event.target as HTMLSelectElement).value;

    switch (action) {
      case 'update':
        // 
        break;
      case 'delete':
        this.deleteUser(user.id);
        break;
      default:
        // 
        break;
    }
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.users = this.users.filter((user) => user.id !== userId);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(1, 6).subscribe((data: any) => {
      this.users = data.data;
    });
  }
}
