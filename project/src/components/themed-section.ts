import { LitElement, html, css, property } from 'lit-element';
import gameState from '../game-state'; // Import the game state

export default class ThemedSection extends LitElement {
  @property({ type: String }) theme = 'default';

  static styles = css`
    :host {
      display: block;
    }

    .section {
      padding: 40px;
      background-color: var(--section-background, transparent); /* Set the background to transparent */
      color: var(--section-text, #fff);
      transition: all 1s ease;
    }

    :host([theme='ethical']) .section {
      --section-text: #007acc; /* Dark blue section text */
      --section-background: #3f2121;
    }

    :host([theme='unethical']) .section {
      --section-text: #ff5722; /* Orange section text */
      --section-background: #3f2121;
    }
  `;

  constructor() {
    super();
    // Listen for changes in the game state and update the theme accordingly
    gameState.addEventListener('state-change', () => {
      this.updateTheme();
    });
  }

  // Method to update the theme based on the game state
  updateTheme() {
    if (gameState.ethicalLevel >= 50) {
      this.theme = 'ethical'; // Set theme to ethical if ethical level is high
    } else {
      this.theme = 'unethical'; // Set theme to unethical if ethical level is low
    }
  }

  updated(changedProperties: any) {
    if (changedProperties.has('theme')) {
      this.style.setProperty('--section-text', getTextColorForTheme(this.theme));
      this.style.setProperty('--section-background', getBackgroundColorForTheme(this.theme));
    }
  }

  render() {
    return html`
      <div class="section">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('themed-section', ThemedSection);

// Define functions to map theme to CSS custom properties
function getTextColorForTheme(theme: string) {
  switch (theme) {
    case 'ethical':
      return '#007acc'; // Dark blue text for ethical theme
    case 'unethical':
      return '#ff5722'; // Orange text for unethical theme
    default:
      return '#fff'; // Default text color
  }
}
function getBackgroundColorForTheme(theme: string) {
  switch (theme) {
    case 'ethical':
      return '#15172f'; // Dark blue text for ethical theme
    case 'unethical':
      return '#3f2121'; // Orange text for unethical theme
    default:
      return '#333'; // Default text color
  }
}
