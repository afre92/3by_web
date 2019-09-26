import React from 'react';

class Greetings extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Helooooooooo</h1>
        <div class="row">
            <div class="col-md-12">
              <button class="btn">Default</button>
              <button class="btn btn-primary">Primary</button>
              <button class="btn btn-info">Info</button>
              <button class="btn btn-success">Success</button>
              <button class="btn btn-warning">Warning</button>
              <button class="btn btn-danger">Danger</button>
              <button class="btn btn-neutral">Neutral</button>
            </div>
          </div>
      </div>
      
    )
  }
}

export default Greetings;