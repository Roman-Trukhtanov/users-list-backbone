import Backbone from 'backbone';
import {
  ERROR_NAME_MSG,
  ERROR_TEL_MSG, MAX_NAME_LENGTH,
  MAX_TEL_LENGTH,
  MIN_TEL_LENGTH,
  NAME_PATTERN,
  TEL_PATTERN,
} from '../const';

class UserModel extends Backbone.Model {
  get defaults() {
    return {
      id: (Math.random() * 100000).toFixed(0),
      name: {
        value: '',
        isCorrect: false,
      },
      tel: {
        value: '',
        isCorrect: false,
      },
      isEdit: false,
    };
  }

  initialize() {}

  setIsCorrectModelParam(prop, flag) {
    const newState = { ...this.attributes };
    newState[prop].isCorrect = flag;
    this.set(newState);
  }

  validate({ name, tel }) {
    let errMsg = '';

    if (
      !name.value ||
      name.value.trim().length >= MAX_NAME_LENGTH ||
      !NAME_PATTERN.test(name.value.trim())
    ) {
      this.setIsCorrectModelParam('name', false);
      errMsg = ERROR_NAME_MSG;
    } else {
      this.setIsCorrectModelParam('name', true);
    }

    if (
      !tel.value ||
      tel.value.length < MIN_TEL_LENGTH ||
      tel.value.length >= MAX_TEL_LENGTH ||
      !TEL_PATTERN.test(tel.value.trim())
    ) {
      this.setIsCorrectModelParam('tel', false);
      errMsg = ERROR_TEL_MSG;
    } else {
      this.setIsCorrectModelParam('tel', true);
    }

    return errMsg || null;
  }

  sync() {}

  fetch() {}

  save() {}
}

export default UserModel;
