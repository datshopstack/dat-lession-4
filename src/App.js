import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Infofield extends React.Component {
  render() {
    return (
      <div className="info-field">
        <label className="info-label">
          {this.props.label}
        </label> :
        <span> {this.props.value}</span>
      </div>
    );
  }
}

class App extends Component {

  renderField(lab,vl) {
    return <Infofield value={vl} label={lab} />;
  }
   
  constructor(props) {
    super(props);
     this.state = {
      show: false
     };
  } 

  handleClick() {
    
    if(this.state.show == true){
      this.setState({show: false});
    }else{
      this.setState({show: true});
    }
    
  };
 
  render() {
    const classShow = "details "+((this.state.show == true)?"show":"hide");
    return (
      <div className="App">
        <div className="info-row">
           {this.renderField('First Name','Dat')}
           {this.renderField('Last Name','Hoang Quoc')}
           {this.renderField('Email','dat@shopstack.asia')}
           {this.renderField('Birthday','09-1984')}
           {this.renderField('Job','web developer')}
        </div>
        <p className="load-more"  onClick={() => this.handleClick()}>{this.state.show?"hide details...":"more details..."}</p>
        <span id="details" className={classShow} > Born with a curiosity of the computer area and how to develop its software, 
          I was soon into programming since I was a high school boy, 
          especially with PHP language and its open-source solutions for the web development like Magento. 
          Understanding the importance of creating highly readable and easily maintainable source code, 
          I’m eager to become a professional result-oriented developer. 
          Personally, I also believe that good time management is one of the key factors that makes a project run successfully. 
          Therefore, I always organize my tasks into a priority matrix so that none of them will be missed. 
        </span>
      </div>
    );
  }
}

export default App;
