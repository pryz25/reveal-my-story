import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import CustomStory from './components/CustomStory.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genStory: 'temp', 
      userStory: '',
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/generator', 
      success: (data) => {
        this.setState({
          genStory: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleChange(e) {
    this.setState({
      userStory: e.target.value,
    });
  }

  storyButton() {
    $.ajax({
      url: '/generator', 
      success: (data) => {
        this.setState({
          genStory: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  saveButton() {
    $.ajax({
      url: '/generator',
      type: 'POST',
    })
  }

  render () {
    return (
      <div>
        <h1>You are a...</h1>
        <Display genStory={this.state.genStory} />
        <CustomStory userStory={this.state.userStory} handleChange={this.handleChange.bind(this)} />
        <button onClick={this.storyButton.bind(this)}>I Need a New Story!</button>
        <button onClick={this.saveButton.bind(this)}>Save Story</button>
      </div>
    )}
}

ReactDOM.render(<App />, document.getElementById('app'));