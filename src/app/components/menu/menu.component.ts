import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() startClicked = new EventEmitter();

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  onStart(): void {
    this.gameService.start();
    this.startClicked.emit();
  }

  onNext(): void {
    this.gameService.next();
  }
}
