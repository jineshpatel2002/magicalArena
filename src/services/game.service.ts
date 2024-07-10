import { Player } from '../models/player.model';
import { IPlayer } from '../interfaces/player.interface';
import { diceRoller } from '../utils/diceRoller';

export class GameService {
  private player1: Player;
  private player2: Player;

  public initializeGame(player1IFC: IPlayer, player2IFC: IPlayer): { player1: Player, player2: Player } {
    this.player1 = new Player(player1IFC.health, player1IFC.strength, player1IFC.attack, player1IFC.name);
    this.player2 = new Player(player2IFC.health, player2IFC.strength, player2IFC.attack, player2IFC.name);
    return { player1: this.player1, player2: this.player2 };
  }

  public playRound(attackerName: string): { message: string, attacker: Player, defender: Player, attackPower: number, defencePower: number, defenderHealth: number } {
    const attacker = this.player1.name === attackerName ? this.player1 : this.player2;
    const defender = attacker === this.player1 ? this.player2 : this.player1;

    const attackRoll = diceRoller.roll();
    const defendRoll = diceRoller.roll();

    const attackDamage = attacker.attack * attackRoll;
    const defendDamage = defender.strength * defendRoll;

    const damageDealt = attackDamage - defendDamage;
    if (damageDealt > 0) {
      defender.health -= damageDealt;
      if (defender.health <= 0) {
        defender.health = 0;
        defender.isAlive = false;
      }
    }

    return {
      message: 'Round played',
      attacker,
      defender,
      attackPower: attackDamage,
      defencePower: defendDamage,
      defenderHealth: defender.health,
    };
  }

  public getStatus(): { player1: Player, player2: Player } {
    return { player1: this.player1, player2: this.player2 };
  }
}
