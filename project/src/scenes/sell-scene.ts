import { html } from "lit";
import Scene from "./scene";
import { scenesConfig } from "./scene-config";
import gameState from "../game-state";
import { ItemEngine } from "../engines/item-engine"; // Import the ItemEngine

export default class SellScene extends Scene {
  private itemEngine: ItemEngine; // Add an instance of the ItemEngine

  constructor() {
    super();
    this.itemEngine = ItemEngine.getInstance(); // Initialize the ItemEngine
  }

  enter() {
    super.enter();
  }

processInput(input: string) {
  const selectedItem = this.itemEngine.getCityItems().find(item => item.id === input);

  if (!selectedItem) {
    // Handle invalid input
    switch (input) {
      case 'back':
        this.notifySceneChange('main');
        break;
      default:
        // Handle other cases if needed
        break;
    }
  } else {
    // Handle the selected item
    const itemInInventory = gameState.getInventory().find(item => item === selectedItem.name);

    if (itemInInventory) {
      // Implement logic for selling the item, e.g., adding money to gameState
      gameState.updateMoney(selectedItem.price); // Add money to the player's balance
      gameState.removeFromInventory(selectedItem.name); // Remove the sold item from inventory
    } else {
      // The player doesn't have this item in their inventory
      console.log("You don't have this item in your inventory.");
    }
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
        <p class="description">${scenesConfig.sell.description}</p>
        <ul class="options">
          ${this.itemEngine.getCityItems().map(
            (item) => html`
              <li class="option-item"><button class="option-button" @click="${() => this.handleOptionClick(item.id)}">${item.name} - $${item.price}</button></li>
            `
          )}
          <li class="option-item"><button class="option-button" @click="${() => this.handleOptionClick('back')}">Back</button></li>
        </ul>
      </div>
    `;
  }

  handleOptionClick(optionKey: string) {
    this.processInput(optionKey)
    // Handle the option click event and update the game state
  }
}