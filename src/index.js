// STYLES
import '@/styles/main.scss';

// DATA
import users from './js/data/users';

// MODULES
import UsersView from './js/views/users-view';
import UsersCollection from './js/collections/users-collection';
import UserModel from './js/models/user-model';
import { delay } from './js/utils';
import { LOADING_MSG, REQUEST_DELAY } from './js/const';

// APP
const usersMainWrap = document.querySelector('.users .users__main-wrap');

class UsersApp {
  constructor(usersData, usersContainer) {
    this.usersData = usersData;
    this.usersContainer = usersContainer;

    this._usersCollection = null;
    this._usersView = null;
  }

  init() {
    this.initUsersCollection();
    this.initUsersView();
  }

  initUsersCollection() {
    if (!this.usersData) {
      return;
    }

    const usersModels = [];

    this.usersData.forEach((user) => {
      const userModel = new UserModel({
        id: user.id,
        name: {
          value: user.name,
          isCorrect: true,
        },
        tel: {
          value: user.tel,
          isCorrect: true,
        },
      });
      usersModels.push(userModel);
    });

    this._usersCollection = new UsersCollection(usersModels);
  }

  initUsersView() {
    const msgElement = this.getMsgElement(LOADING_MSG);
    this.usersContainer.appendChild(msgElement);

    // Imitation of working with the server
    delay(REQUEST_DELAY).then(() => {
      msgElement.remove();

      this._usersView = new UsersView(
        { el: this.usersContainer },
        this._usersCollection
      );
    });
  }

  getMsgElement(text) {
    const msgElement = document.createElement('p');
    msgElement.classList.add('loading-text');
    msgElement.textContent = text;

    return msgElement;
  }
}

window.usersApp = new UsersApp(users, usersMainWrap);
window.usersApp.init();
