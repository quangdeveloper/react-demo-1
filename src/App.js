import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
        //khai bao 1 ham moi trong class
        // react ko tu nhan ra  function trong class nen phai khai bao thu cong
        this.setStateHandler = this.setStateHandler.bind(this);

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    setStateHandler()  {
        var item = "setState....";
        var myArr = this.state.data.slice();
        myArr.push(item);
        this.setState({data: myArr});
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    findDomNodeHandler(){
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
    }

    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>

                <div>
                    <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
                    <h4>Random number: {Math.random()}</h4>
                </div>

                <div>
                    <button onClick = {this.findDomNodeHandler}>Find DOM handler</button>
                    <div id="myDiv"> This is my div</div>
                </div>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> This Is Header </h1>
            </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

class Content extends React.Component {
    render() {
        var i = 2;
        var myStyle = {
            color: 'red',
            fontsize: 100
        }
        return (
            <div>
                <h2>Hello {i == 1 ? 'Quang' : 'Xuyen'}</h2>
                <p style={myStyle}>
                    This is my page
                </p>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.footer} </h1>
            </div>
        );
    }
}

export default App;