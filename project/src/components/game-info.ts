import { LitElement, html, css, property } from 'lit-element';
import gameState, { GameStateObject } from '../game-state';

class GameInfo extends LitElement {
  @property({ type: Object }) state: GameStateObject = gameState;

  static styles = css`
    :host {
      display: block;
      font-size: 18px;
      padding: 20px;
      background-color: #333; /* Dark background color */
      color: #fff; /* Text color */
      border-radius: 5px;
    }

    .info-item {
      margin-bottom: 10px;
      text-align: left;
    }

    .info-label {
      font-weight: bold;
      margin-right: 10px;
    }

    /* Inventory table styles */
    .inventory-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    .inventory-table th {
      background-color: #555; /* Header background color */
      color: #fff;
      padding: 10px;
      text-align: left;
    }

    .inventory-table td {
      padding: 5px 10px;
      border-bottom: 1px solid #ddd; /* Border color */
    }
  `;

  // Use a property observer to update the 'state' property when 'gameState' changes
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('state')) {
      this.requestUpdate();
    }
  }

  constructor() {
    super();
    // Add a property observer for 'gameState'
    this.observeGameState();
  }

  // Property observer for 'gameState'
  private observeGameState(): void {
    gameState.addEventListener('state-change', () => {
      this.state = { ...gameState };
    });
  }

  render() {
    return html`
      <div>
        <div class="info-item">
          <span class="info-label">Money:</span> $${this.state.money}
        </div>
        <div class="info-item">
          <span class="info-label">Ethical Level:</span> ${this.state.ethicalLevel}
        </div>
        <div class="info-item">
          <span class="info-label">Inventory:</span>
          <table class="inventory-table">
            <thead>
              <tr>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
              ${this.state.inventory.map(
                (item) => html`<tr><td>${item}</td></tr>`
              )}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

customElements.define('game-info', GameInfo);
