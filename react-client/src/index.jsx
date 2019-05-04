import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import CustomStory from './components/CustomStory.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <h1>You are a...</h1>
        <Display />
        <CustomStory />
        <button>I Need a New Story!</button>
      </div>
    )}
}

ReactDOM.render(<App />, document.getElementById('app'));