import GameModal from '../components/game-modal';
import TriviaModal from '../components/trivia-modal';
import gameState from '../game-state';
import EthicalEngine from './ethical-engine';
import { hackTriviaQuestions, defendTriviaQuestions } from '../config/trivia-config';
import { cityItems, blackMarketItems } from '../config/items-config';

export type ActionResult = {
  success: boolean,
  money: number,
  script: string,
  triviaQuestion: any,
};

export default class ActionEngine {
  static minMoneyGain = 100;
  static maxMoneyGain = 500;

  static performHack(): void {
    const question = hackTriviaQuestions[Math.floor(Math.random() * hackTriviaQuestions.length)];
    const triviaModal = document.getElementsByTagName('trivia-modal')[0] as TriviaModal;

    triviaModal.question = `Question: ${question.question}`;
    triviaModal.answerChoices = question.options;
    triviaModal.answerCallback = (choice: string) => {
      this.processTriviaAnswer(question.correctAnswer, choice, triviaModal, 'hack');
      triviaModal.close();
    };

    triviaModal.isopen = true;
    triviaModal.open();
  }

  static performDefend(): void {
    const question = defendTriviaQuestions[Math.floor(Math.random() * defendTriviaQuestions.length)];
    const triviaModal = document.getElementsByTagName('trivia-modal')[0] as TriviaModal;

    triviaModal.question = `Question: ${question.question}`;
    triviaModal.answerChoices = question.options;
    triviaModal.answerCallback = (choice: string) => {
      this.processTriviaAnswer(question.correctAnswer, choice, triviaModal, 'defend');
      triviaModal.close();
    };

    triviaModal.isopen = true;
    triviaModal.open();
  }

  static processTriviaAnswer(answer: string, choice: string, triviaModal: TriviaModal, actionType: string): void {
    const gameModal = document.getElementsByTagName('game-modal')[0] as GameModal;
    const correctAnswer = answer;
    const isCorrect = choice === correctAnswer;
    const inventory = gameState.inventory || [];

    let moneyGain = 0;
    let ethicalLevelChange = 0;
    let script = '';

    if (actionType === 'hack') {
      if (isCorrect) {
        moneyGain = 0; // No money gain for successful defends
        script = `Your answer: ${choice}\nCorrect! You gained an item`;
        // Add a new item to the inventory for successful hacks
        const newItem = blackMarketItems[Math.floor(Math.random() * blackMarketItems.length)];
        inventory.push(newItem.name);
      } else {
        moneyGain = -20;
        ethicalLevelChange = -10;
        script = `Your answer: ${choice}\nWrong! The correct answer is: ${correctAnswer}\nYou lost some money: $${moneyGain}\nYour ethical level decreased by ${ethicalLevelChange}`;
      }
    } else if (actionType === 'defend') {
      if (isCorrect) {
        moneyGain = Math.floor(Math.random() * (ActionEngine.maxMoneyGain - ActionEngine.minMoneyGain + 1) + ActionEngine.minMoneyGain);
        ethicalLevelChange = 10; // Increase ethical level for successful defends
        script = `Your answer: ${choice}\nCorrect! You gained some money: $${moneyGain}\nYour ethical level increased by ${ethicalLevelChange}`;
      } else {
        moneyGain = -20;
        ethicalLevelChange = -10;
        script = `Your answer: ${choice}\nWrong! The correct answer is: ${correctAnswer}\nYou lost some money: $${moneyGain}\nYour ethical level decreased by ${ethicalLevelChange}`;
      }
    }

    gameModal.content = script;
    gameModal.style.whiteSpace = 'pre-line';
    gameModal.open();

    // Update the game state based on the result
    gameState.updateMoney(moneyGain);
    gameState.updateEthicalLevel(EthicalEngine.decreaseEthicalLevel(gameState.ethicalLevel, ethicalLevelChange));
    gameState.inventory = inventory;
  }
}
