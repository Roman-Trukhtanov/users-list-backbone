import Backbone from 'backbone';
import UserModel from '../models/user-model';

class UsersCollection extends Backbone.Collection {
  constructor(props) {
    super(props);
    this.model = UserModel;
  }
}

export default UsersCollection;

