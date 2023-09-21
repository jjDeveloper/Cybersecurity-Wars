import { LitElement, html, css, property } from 'lit-element';

export default class GameModal extends LitElement {
  @property({ type: Boolean }) isopen = false;
  @property({ type: String }) content = '';

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
  `;

  updated(changedProperties: any) {
    if (changedProperties.has('isopen')) {
      if (this.isopen) {
        // Open the dialog when isopen is true
        this.open();
      } else {
        // Close the dialog when isopen is false
        this.close();
      }
    }
  }

  render() {
    return html`
      <dialog class="modal" ?open="${this.isopen}">
        <form method="dialog">
          <div class="modal-content">
            <span class="close" @click="${this.close}">&times;</span>
            <p>${this.content}</p>
          </div>
        </form>
      </dialog>
    `;
  }

  open() {
    const dialog: HTMLDialogElement = this.shadowRoot!.querySelector('.modal') as HTMLDialogElement;
    console.log("open dialog", dialog)
    this.isopen = true;
    dialog.show();
  }

  close() {
    const dialog: HTMLDialogElement = this.shadowRoot!.querySelector('.modal') as HTMLDialogElement;
    this.isopen = false;
    dialog.close();
  }

  // openDialog() {
  //   const dialog = this.shadowRoot!.querySelector('dialog');
  //   if (dialog) {
  //     dialog.showModal();
  //   }
  // }

  // closeDialog() {
  //   const dialog = this.shadowRoot!.querySelector('dialog');
  //   if (dialog) {
  //     dialog.close();
  //   }
  // }
}

customElements.define('game-modal', GameModal);
