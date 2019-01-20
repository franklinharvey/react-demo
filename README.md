```import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "<SECRET API KEY>",
      authDomain: "<APP UID>.firebaseapp.com",
      databaseURL: "<APP UID>.firebaseio.com",
      projectId: "<APP UID>",
      storageBucket: "<APP UID>.appspot.com",
      messagingSenderId: "<APP SENDER ID>"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}
```
