import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import $ from 'jquery';
import Display from './components/Display.jsx';
import CustomStory from './components/CustomStory.jsx';
import adjective from './possibilities/adjective.jsx';
import backstory from './possibilities/backstory.jsx';
import classes from './possibilities/classes.jsx';
import locations from './possibilities/locations.jsx';
import races from './possibilities/races.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genStory: 'temp', 
      userStory: '',
      justSaved: false,
      user: '',
    }
  }

  componentDidMount() {
    this.storyButton()
  }

  handleChange(e) {
    this.setState({
      userStory: e.target.value,
    });
  }

  storyButton() {
    let adj = adjective[Math.floor(Math.random() * adjective.length)];
    let back = backstory[Math.floor(Math.random() * backstory.length)];
    let role = classes[Math.floor(Math.random() * classes.length)];
    let locale = locations[Math.floor(Math.random() * locations.length)];
    let race = races[Math.floor(Math.random() * races.length)];
    
    this.setState({
      genStory: `${adj} ${race} ${role} from ${locale} who ${back}`,
    });
  }

  saveButton() {
    let charUser = faker.random.alphaNumeric(10)
    $.ajax({
      url: '/generator',
      type: 'POST',
      data: {
        user: charUser,
        genStory: this.state.genStory,
        userStory: this.state.userStory,
      },
      success: () => {
        this.setState({
          user: charUser,
          justSaved: true,
          userStory: '',
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  render () {
    let userId;
    if (this.state.justSaved) {
      userId = <span>Your recovery ID is: {this.state.user}</span>
    }
    return (
      <div>
        <h1>You are a...</h1>
        <Display genStory={this.state.genStory} />
        <CustomStory userStory={this.state.userStory} handleChange={this.handleChange.bind(this)} />
        <button onClick={this.storyButton.bind(this)}>I Need a New Story!</button>
        <button onClick={this.saveButton.bind(this)}>Save Story</button>
        {userId}
      </div>
    )}
}

ReactDOM.render(<App />, document.getElementById('app'));