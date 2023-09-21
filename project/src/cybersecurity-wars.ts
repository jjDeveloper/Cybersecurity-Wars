import { LitElement, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import { scenesConfig } from './scenes/scene-config';
import Scene from './scenes/scene';
import MainScene from './scenes/main-scene';
import CityScene from './scenes/city-scene';
import BlackMarketScene from './scenes/black-market-scene';
import TravelScene from './scenes/travel-scene';
import BuyScene from './scenes/buy-scene';
import SellScene from './scenes/sell-scene';
import ThemedSection from './components/themed-section';
import BmBuyScene from './scenes/bm-buy-scene';
import BmSellScene from './scenes/bm-sell-scene';
import { CybersecurityEventEngine } from './engines/cybersecurity-event-engine'; 

@customElement('cybersecurity-wars')
export class CybersecurityWars extends LitElement {
  @property({ type: String }) currentScene = 'main';
  @state() scene: Scene | null = null;
  private cybersecurityEventEngine: CybersecurityEventEngine; 

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    // this.changeScene(this.currentScene);
  }

  constructor() {
    super();
    this.changeScene(this.currentScene);
    this.cybersecurityEventEngine = CybersecurityEventEngine.getInstance(); 
  }

  processUserInput(input: string) {
    if (this.scene) {
      this.scene.processInput(input);
      this.requestUpdate();
    }
  }

  changeScene(sceneKey: string) {
    const newScene = this.getSceneInstance(sceneKey);
    if (newScene) {
      this.scene = newScene; // Update the scene property
      console.log('change scene main game', this.scene);
      this.scene.enter(); // Call the enter method of the new scene
      this.requestUpdate(); // Request an update to trigger rendering

      // Check if a random cybersecurity event should occur after changing the scene
      this.checkRandomCybersecurityEvent();
    }
  }

  getSceneInstance(sceneName: string): Scene | null {
    switch (sceneName) {
      case 'main':
        return new MainScene();
      case 'city':
        return new CityScene();
      case 'blackmarket':
        return new BlackMarketScene();
      case 'travel':
        return new TravelScene();
      case 'buy':
        return new BuyScene();
      case 'bmbuy':
        return new BmBuyScene();
      case 'sell':
        return new SellScene();
      case 'bmsell':
        return new BmSellScene();
      default:
        return null;
    }
  }

  render() {
    if (this.scene) {
      return this.scene.render();
    }
    return html`<div>Invalid Scene</div>`;
  }

  handleSceneOption(optionKey: string) {
    this.processUserInput(optionKey);
  }

  // Method to check if a random cybersecurity event should occur
  private checkRandomCybersecurityEvent() {
    // Define a probability (e.g., 20%) for a random event to occur
    const probability = 0.05; // Adjust as needed

    if (Math.random() < probability) {
      this.cybersecurityEventEngine.triggerRandomEvent();
    }
  }
}
