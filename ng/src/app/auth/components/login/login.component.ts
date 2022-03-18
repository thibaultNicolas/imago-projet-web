import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.authService.login(f.value).subscribe({
      next: () => {
        console.log(`Observer got a next value`);
      },
      error: (err: Error) => {
        console.log(`Observer got an error`);
      }
    });

  }
}
