import React from 'react';

class Greetings extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Helooooooooo</h1>
        <div className="row">
            <div class="col-md-12">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-danger">Danger</button>
              <button className="btn btn-neutral">Neutral</button>
            </div>
          </div>
      </div>
      
    )
  }
}

export default Greetings;