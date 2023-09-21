// Import the EventTarget class from the DOM API
// import { EventTarget } from 'event-target-shim';

// Define the initial game state
export type GameStateObject = {
  money: number,
  ethicalLevel: number,
  inventory: any[]
}
export class GameState extends EventTarget {
  money: number;
  ethicalLevel: number; // Add ethical level
  inventory: any[];

  constructor() {
    super(); // Call the constructor of the EventTarget class
    this.money = 100; // Initial money
    this.ethicalLevel = 50; // Initial ethical level (you can set it to your desired starting value)
    this.inventory = []; // Initial empty inventory
  }

  // Update the money
  updateMoney(amount: number) {
    this.money += amount;
    // Dispatch a custom event to notify listeners of the state change
    this.money = parseFloat(this.money.toFixed(2));
    this.dispatchEvent(new Event('state-change'));
  }

  // Add an item to the inventory
  addToInventory(item: any) {
    this.inventory.push(item);
    // Dispatch a custom event to notify listeners of the state change
    this.dispatchEvent(new Event('state-change'));
  }

  // Remove an item from the inventory
  removeFromInventory(item: any) {
    const itemIndex = this.inventory.indexOf(item);
    if (itemIndex !== -1) {
      this.inventory.splice(itemIndex, 1);
      // Dispatch a custom event to notify listeners of the state change
      this.dispatchEvent(new Event('state-change'));
    }
  }

  // Get the player's inventory
  getInventory() {
    return this.inventory;
  }


  // Update the ethical level
  updateEthicalLevel(newEthicalLevel: number) {
    this.ethicalLevel = newEthicalLevel;
    // Dispatch a custom event to notify listeners of the state change
    this.dispatchEvent(new Event('state-change'));
  }

  // Increase the ethical level
  increaseEthicalLevel(amount: number) {
    this.ethicalLevel += amount;
    // Ensure the ethical level stays within a certain range (e.g., 0 to 100)
    this.ethicalLevel = Math.min(Math.max(this.ethicalLevel, 0), 100);
    // Dispatch a custom event to notify listeners of the state change
    this.dispatchEvent(new Event('state-change'));
  }

  // Decrease the ethical level
  decreaseEthicalLevel(amount: number) {
    this.ethicalLevel -= amount;
    // Ensure the ethical level stays within a certain range (e.g., 0 to 100)
    this.ethicalLevel = Math.min(Math.max(this.ethicalLevel, 0), 100);
    // Dispatch a custom event to notify listeners of the state change
    this.dispatchEvent(new Event('state-change'));
  }
}

// Create a singleton instance of the game state
const gameState = new GameState();

// Export the game state instance
export default gameState;
