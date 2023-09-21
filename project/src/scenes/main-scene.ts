import { LitElement, html, css } from 'lit';
import Scene from './scene';
import { scenesConfig } from './scene-config';
import ActionEngine, { ActionResult } from '../engines/action-engine';
import gameState from '../game-state';
import EthicalEngine from '../engines/ethical-engine';
import GameModal from '../components/game-modal';

export default class MainScene extends Scene {

processInput(input: string) {
  switch (input) {
    case 'hack':
      ActionEngine.performHack();
      break;
    case 'defend':
     ActionEngine.performDefend();
      break;
    case 'travel':
      this.notifySceneChange('travel');
      break;
    default:
      // Handle invalid input
      break;
  }
}


  showModal(message:string, modal: GameModal):void {
    console.log("show modal", modal)
    modal.content = message;
    // modal.isopen = true; 
    modal.open();
  }

  closeModal(modal: GameModal): void {
    modal.isopen = false;
    modal.close();
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
        <p class="description">${scenesConfig.main.description}</p>
        <ul class="options">
          ${scenesConfig.main.options.map(
            (option) => html`
              <li class="option-item">
                <button class="option-button" @click="${() => this.handleOptionClick(option.key)}">${option.description}</button>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  private handleOptionClick(optionKey: string) {
    this.processInput(optionKey);
  }
}
