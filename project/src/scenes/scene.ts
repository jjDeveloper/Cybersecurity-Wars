import { LitElement } from "lit";
import { CybersecurityWars } from "../cybersecurity-wars";

export default class Scene {
  render() {
    throw new Error('Method not implemented.');
  }
  currentScene: string = 'main';

  enter() {
    // This method will be called when the scene is entered
  }

  processInput(input: string) {
    // Process user input and update the scene or game state
  }


  private exit() {
    // Perform any necessary cleanup or exit logic for the current scene
  }


  notifySceneChange(sceneKey: string) {
    const cyberWars = document.querySelector('cybersecurity-wars') as CybersecurityWars;
    if (cyberWars) {
      cyberWars.changeScene(sceneKey);
    }
  }
}
