import { cybersecurityEvents } from '../config/cybersecurity-events-config';
import gameState from '../game-state';
import { CybersecurityEvent } from '../classes/cybersecurity-event';
import GameModal from '../components/game-modal';

export class CybersecurityEventEngine {
  private static instance: CybersecurityEventEngine;

  private constructor() {}

  public static getInstance(): CybersecurityEventEngine {
    if (!CybersecurityEventEngine.instance) {
      CybersecurityEventEngine.instance = new CybersecurityEventEngine();
    }
    return CybersecurityEventEngine.instance;
  }

  public triggerRandomEvent(): void {
    const randomIndex = Math.floor(Math.random() * cybersecurityEvents.length);
    const randomEvent = cybersecurityEvents[randomIndex];

    // Update game state based on the event
    gameState.updateMoney(randomEvent.moneyImpact);
    gameState.updateEthicalLevel(gameState.ethicalLevel + randomEvent.ethicalImpact);

    // Display the event using the GameModal component
    const gameModal: GameModal = document.querySelector('game-modal') as GameModal;
    if (gameModal) {
      gameModal.content = `Cybersecurity Event: ${randomEvent.description}\n\n` +
        `Money Impact: ${randomEvent.moneyImpact > 0 ? '+' : ''}$${randomEvent.moneyImpact}\n` +
        `Ethical Impact: ${randomEvent.ethicalImpact > 0 ? '+' : ''}${randomEvent.ethicalImpact}`;
      gameModal.open();
    }
  }
}
