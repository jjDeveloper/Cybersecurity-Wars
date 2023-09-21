import { LitElement, html, css, property } from 'lit-element';

export default class TriviaModal extends LitElement {
  @property({ type: Boolean }) isopen = false;
  @property({ type: String }) question = '';
  @property({ type: Array }) answerChoices: any[] = [];
  @property({ type: Function }) answerCallback: (question: string) => void = () => {};

  static styles = css`
    .modal {
      display: float;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }

    .modal-content {
      background-color: #333;
      margin: 15% auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 600px;
      color: #fff;
    }

    .close {
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }

    .answer-choice {
      display: block;
      margin: 10px 0;
      cursor: pointer;
    }
  `;

  updated(changedProperties: any) {
    if (changedProperties.has('isopen')) {
      if (this.isopen) {
        this.open();
      } else {
        this.close();
      }
    }
  }

  render() {
    return html`
      <dialog class="modal" ?open="${this.isopen}">
        <div class="modal-content">
          <span class="close" @click="${this.close}">&times;</span>
          <p>${this.question}</p>
          ${this.answerChoices.map(
            (choice, index) =>
              html`<button class="answer-choice" @click="${() => this.handleAnswer(choice)}">${choice}</button>`
          )}
        </div>
      </dialog>
    `;
  }

  open() {
    this.isopen = true;
  }

  close() {
    this.isopen = false;
  }

  handleAnswer(choice: any) {
    if (this.answerCallback) {
      this.answerCallback(choice);

    }
  }
}

customElements.define('trivia-modal', TriviaModal);
