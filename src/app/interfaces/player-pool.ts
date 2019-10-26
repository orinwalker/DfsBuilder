import {Player} from './player';
export interface PlayerPool {
    // players: Record<number, Player>;
    // players: { player: Player };
    players: { player: PlayerPool };
}
