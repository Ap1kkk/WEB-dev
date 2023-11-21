import { Component } from '@angular/core';

@Component({
  selector: 'app-scoreboard-page',
  templateUrl: './scoreboard-page.component.html',
  styleUrls: ['./scoreboard-page.component.css']
})
export class ScoreboardPageComponent {
    scoreboardData = [
        { rank: 1, name: 'Player 1', score: 100 },
        { rank: 2, name: 'Player 2', score: 90 },
        { rank: 3, name: 'Player 3', score: 80 },
        // Add more scoreboard data as needed
      ];
}
