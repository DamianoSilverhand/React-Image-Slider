import React, { Component } from 'react';
import './App.css'

 //Component for displaying the like button

export class Form extends Component {
//setting initial state of button and text
constructor(props) {
    super(props);
    this.state = {
        value: '',
        essay: '',
        select: 'coconut',
        myValue:''
};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
    let val = this.input.value;
    //alert('A name was submitted: ' + val );
    event.preventDefault();
    this.setState(
     {myValue: val})
  }


  handleEssay=(event)=>{
      this.setState({essay : event.target.value})
  }

  handleSelect=(event)=>{
    this.setState({select : event.target.value})
}
handleFile=(event)=>{
    event.preventDefault();
    alert(
        `Selected file ~ ${this.fileInput.files[0].name}`
    )
}

  render() {
    return (
        <div className= "form">
      <form onSubmit={this.handleFile}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" /><br/>
        <label>
        Essay:
        <textarea value={this.state.name} onChange={this.handleEssay} />
      </label><br/>
      <label>
      Pick your favorite La Croix flavor:
      <select value={this.state.select} onChange={this.handleSelect}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    </label>
    <input type="submit" value="Submit" /><br/>
    <label>
    Name:
    <input type="text" ref={input=>{this.fileInput=input}} />
  </label>
  <input type="submit" value="Submit" /><br/>
  <label>
  Upload file:
  <input
    type="file"
    ref={input => {
      this.fileInput = input;
    }}
  />
</label>
<input type="submit" value="Upload" /><br/>

      </form>
      <p>{this.state.myValue}</p>
      </div>
    );
  }
}
