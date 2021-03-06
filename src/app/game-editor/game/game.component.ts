import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LocaleMessages} from '../../locale-messages';
import {GameFixtureDto, GameStatus} from '../../model/model';
import {GameEditorService} from '../game-editor.service';
import {MatDialog} from '@angular/material';
import {StartGameDialogComponent} from '../start-game-dialog/start-game-dialog.component';
import {TranslateService} from '@ngx-translate/core';
import {FinishGameDialogComponent} from '../finish-game-dialog/finish-game-dialog.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  lm = LocaleMessages;

  @Output() gameStatusEvent = new EventEmitter<GameStatus>();

  @Input() gameFixture: GameFixtureDto;

  constructor(
    private gameEditorService: GameEditorService,
    private translate: TranslateService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {

  }

  startGameBtnClick(): void {
    this.dialog.open(StartGameDialogComponent, {
      width: '100vh',
      data: {
        competitionType: this.gameFixture.competitionType,
        gameId: this.gameFixture.id,
        tournamentId: this.gameFixture.tournamentId
      }
    }).afterClosed().subscribe(game => {
      if (game) {
        this.gameFixture = game;
        this.gameStatusEvent.emit(this.gameFixture.gameStatus);
      }
    })
  }

  finishGameBtnClick(): void {
    this.dialog.open(FinishGameDialogComponent, {
      width: '100vh',
      data: {
        competitionType: this.gameFixture.competitionType,
        gameId: this.gameFixture.id,
        tournamentId: this.gameFixture.tournamentId,
        homeName: this.gameFixture.homeParticipant.name,
        awayName: this.gameFixture.awayParticipant.name,
        periodsConfig: this.gameFixture.periodsConfig
      }
    }).afterClosed().subscribe(game => {
      if (game) {
        this.gameFixture = game;
        this.gameStatusEvent.emit(this.gameFixture.gameStatus);
      }
    });
  }

  isGameInProgress(): boolean {
    return this.gameFixture ? this.gameFixture.gameStatus === GameStatus.IN_PROGRESS : false;
  }

  isGameBeforeStart(): boolean {
    return this.gameFixture ? this.gameFixture.gameStatus === GameStatus.BEFORE_START : false;
  }

  isGameEnded(): boolean {
    return this.gameFixture ? this.gameFixture.gameStatus === GameStatus.ENDED : false;
  }

  getGameHeaderText(): string {
    const roundText = this.translate.instant(this.lm.round) + ' ' + this.gameFixture.round + ': ';
    return roundText + this.gameFixture.homeParticipant.name + ' vs ' + this.gameFixture.awayParticipant.name;
  }
}
