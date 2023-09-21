import { html } from "lit";
import Scene from "./scene";
import { scenesConfig } from "./scene-config";

export default class CityScene extends Scene {
  enter() {
    super.enter();
  }

  processInput(input: string) {
    // Process user input for the city scene
    switch (input) {
      // Implement city scene options here
      case 'buy':
        // Handle the 'buy' option
        this.notifySceneChange('buy');
        break;
      case 'sell':
        // Handle the 'sell' option
        this.notifySceneChange('sell');
        break;
      case 'back':
        // Handle the 'back' option
        this.notifySceneChange('main');
        break;
      default:
        // Handle invalid input
        break;
    }
  }

  render() {
    return html`
    <style>
    .menu-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
    }

    .description {
      font-size: 18px;
      margin-bottom: 20px;
      margin-top: 0px;
    }

    .options {
      list-style-type: none;
      padding: 0;
    }

    .option-item {
      margin-bottom: 10px;
    }

    .option-button {
      background-color: #df9763;
      color: white;
      border: none;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .option-button:hover {
      background-color: #a77856;
    }
    </style>
      <div class="menu-container">
        <p class="description">${scenesConfig.city.description}</p>
        <ul class="options">
          ${scenesConfig.city.options.map(
            (option) => html`
              <li class="option-item"><button class="option-button" @click="${() => this.handleOptionClick(option.key)}">${option.description}</button></li>
            `
          )}
        </ul>
      </div>
    `;
  }

  handleOptionClick(optionKey: string) {
    // Handle the option click event and update the game state
    this.processInput(optionKey);
  }
}

