import Backbone from 'backbone';
import usersRow from '../templates/user-row';
import { delay } from '../utils';
import { REMOVING_MSG, REQUEST_DELAY, SAVING_MSG } from '../const';

class UserView extends Backbone.View {
  get tagName() {
    return 'tr';
  }

  get template() {
    return _.template(usersRow);
  }

  get events() {
    return {
      'click ._btn-edit': 'editUser',
      'click ._btn-save': 'saveUser',
      'click ._btn-remove': 'destroyUser',
      'keypress ._btn-edit': 'updateOnEnter',
      'keydown .edit': 'revertOnEscape',
    };
  }

  initialize() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.$el;
  }

  toggleBaseInputsDisabledParam(inputs, flag) {
    if (!inputs.length) {
      return;
    }

    inputs.forEach((inputItem) => {
      inputItem.disabled = flag;
    });
  }

  toggleControlBtnsDisabledParam(flag) {
    [...this.el.querySelectorAll('button')].forEach((button) => {
      button.disabled = flag;
    });
  }

  getMsgElement(text) {
    const msgElement = document.createElement('p');
    msgElement.classList.add('saving-text');
    msgElement.textContent = text;

    return msgElement;
  }

  editUser() {
    this.model.set({
      isEdit: true,
    });
  }

  saveUser(evt) {
    evt.preventDefault();
    const nameInput = this.el.querySelector('._user-name');
    const telInput = this.el.querySelector('._user-tel');
    const tableActions = this.el.querySelector('.table-actions');

    const msgElement = this.getMsgElement(SAVING_MSG);
    tableActions.appendChild(msgElement);
    this.toggleBaseInputsDisabledParam([nameInput, telInput], true);
    this.toggleControlBtnsDisabledParam(true);

    // Imitation of working with the server
    const newState = { ...this.model.attributes };

    newState.name.value = nameInput.value.toString().trim();
    newState.tel.value = telInput.value.toString().trim();
    newState.isEdit = false;

    delay(REQUEST_DELAY / 2).then(() => {
      this.toggleControlBtnsDisabledParam(false);
      msgElement.remove();
      this.toggleBaseInputsDisabledParam([nameInput, telInput], false);

      this.model.set(newState, { validate: true });
      this.render();
    });
  }

  destroyUser(evt) {
    evt.preventDefault();
    const tableActions = this.el.querySelector('.table-actions');

    const msgElement = this.getMsgElement(REMOVING_MSG);
    tableActions.appendChild(msgElement);
    this.toggleControlBtnsDisabledParam(true);

    // Imitation of working with the server
    delay(REQUEST_DELAY / 2).then(() => {
      msgElement.remove();
      this.toggleControlBtnsDisabledParam(false);

      this.model.destroy();
    });
  }
}

export default UserView;
