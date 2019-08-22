import React from 'react';
import Widget from './Widget';
import '../css/style.css';

class App extends React.Component {

  handleChangeAction = (arg) => {
    console.log(`Displaying ${arg} placeholder image.`);
    return `https://placeimg.com/640/480/${arg}/grayscale`;
  }

  render(){
    return(
      <main className="bg-gray">
        <div className="container mx-auto flex items-center justify-center flex-col full-screen-height p-4 text-gray-800">
          <h1 className="sm:text-4xl text-3xl text-center">Choose Photo Category</h1>
          <Widget handleChange={this.handleChangeAction}/>
        </div>
      </main>
    )
  }
};

export default App;
