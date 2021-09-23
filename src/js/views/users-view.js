import Backbone from 'backbone';
import UserView from './user-view';

import usersContainer from '../templates/users-container';
import {
  ADDING_MSG,
  ERROR_NAME_MSG,
  ERROR_TEL_MSG,
  MAX_NAME_LENGTH,
  MAX_TEL_LENGTH,
  MIN_TEL_LENGTH,
  NAME_PATTERN,
  REQUEST_DELAY,
  TEL_PATTERN,
} from '../const';
import { delay } from '../utils';

class UsersView extends Backbone.View {
  constructor(props, usersCollection) {
    super(props);

    this.usersCollection = usersCollection;

    this.tableBody = this.el.querySelector('#users-table tbody');
    this.usersControls = this.el.querySelector('.users .users__controls');
    this.addUserBtn = this.usersControls.querySelector('._add-user-btn');

    this.baseNameInput = this.el.querySelector(
      '#users-container #base-name-input'
    );
    this.baseTelInput = this.el.querySelector(
      '#users-container #base-tel-input'
    );

    this.initCollection();
  }

  get template() {
    return _.template(usersContainer);
  }

  get events() {
    return {
      'click ._add-user-btn': 'addNewUser',
      'submit #add-user-form': 'addNewUser',
      'click .toJSON': 'toJSON',
    };
  }

  initialize() {
    this.$el.html(this.template());
  }

  initCollection() {
    this.render();
    this.listenTo(this.usersCollection, 'add', this.addOne);
  }

  render() {
    this.usersCollection.each((user) => {
      const userView = new UserView({
        model: user,
      });
      this.tableBody.appendChild(userView.render().get(0));
    });
  }

  clearBaseInputs() {
    this.baseNameInput.value = '';
    this.baseTelInput.value = '';
  }

  toggleBaseInputsDisabledParam(flag) {
    this.baseNameInput.disabled = flag;
    this.baseTelInput.disabled = flag;
  }

  addErrorMsgToInput(input, msg) {
    const msgElement = `<p class="form-error-msg text-danger m-0">${msg}</p>`;
    input.insertAdjacentHTML('afterend', msgElement);
  }

  getErrorMsgElem(input) {
    return input.closest('.form-label').querySelector('.form-error-msg');
  }

  validateBaseInputs({ name, tel }) {
    let isValid = true;

    const nameErrMsgElem = this.getErrorMsgElem(this.baseNameInput);
    const telErrMsgElem = this.getErrorMsgElem(this.baseTelInput);

    if (
      !name ||
      name.trim().length >= MAX_NAME_LENGTH ||
      !NAME_PATTERN.test(name.trim())
    ) {
      if (!nameErrMsgElem) {
        this.addErrorMsgToInput(this.baseNameInput, ERROR_NAME_MSG);
      }

      isValid = false;
    } else if (nameErrMsgElem) {
      nameErrMsgElem.remove();
    }

    if (
      !tel ||
      tel.length < MIN_TEL_LENGTH ||
      tel.length >= MAX_TEL_LENGTH ||
      !TEL_PATTERN.test(tel.trim())
    ) {
      if (!telErrMsgElem) {
        this.addErrorMsgToInput(this.baseTelInput, ERROR_TEL_MSG);
      }

      isValid = false;
    } else if (telErrMsgElem) {
      telErrMsgElem.remove();
    }

    return isValid;
  }

  getMsgElement(text) {
    const msgElement = document.createElement('p');
    msgElement.classList.add('adding-text');
    msgElement.textContent = text;

    return msgElement;
  }

  addNewUser(evt) {
    evt.preventDefault();

    const name = this.baseNameInput.value.toString().trim();
    const tel = this.baseTelInput.value.toString().trim();

    if (!this.validateBaseInputs({ name, tel })) {
      return;
    }

    const msgElement = this.getMsgElement(ADDING_MSG);
    this.usersControls.appendChild(msgElement);
    this.toggleBaseInputsDisabledParam(true);
    this.addUserBtn.disabled = true;

    // Imitation of working with the server
    delay(REQUEST_DELAY).then(() => {
      this.toggleBaseInputsDisabledParam(false);
      msgElement.remove();
      this.addUserBtn.disabled = false;

      this.usersCollection.add({
        name: {
          value: name,
          isCorrect: true,
        },
        tel: {
          value: tel,
          isCorrect: true,
        },
      });
    });
  }

  addOne(model) {
    const userView = new UserView({ model });
    this.tableBody.appendChild(userView.render().get(0));
    this.clearBaseInputs();
  }

  toJSON() {
    return this.usersCollection.toJSON();
  }
}

export default UsersView;
