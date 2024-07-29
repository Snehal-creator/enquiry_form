import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testProject';

  selectedDate:any;
  video = 'assets/img/bg.mp4';
}
