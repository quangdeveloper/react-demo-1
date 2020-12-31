import React from 'react';
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    component: 'First...',
                    id: 1
                },
                {
                    component: 'Second...',
                    id: 2
                },
                {
                    component: 'Third...',
                    id: 3
                }
            ],
        }
        //khai bao 1 ham moi trong class
        // react ko tu nhan ra  function trong class nen phai khai bao thu cong
        this.setStateHandler = this.setStateHandler.bind(this);

        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);

        this.setNewNumber = this.setNewNumber.bind(this);

        this.updateState = this.updateState.bind(this);

        this.getInfo = this.getInfo.bind(this);

        this.clearData = this.clearData.bind(this);
    }

    setStateHandler() {
        var item = "setState....";
        var myArr = this.state.data.slice();
        myArr.push(item);
        this.setState({data: myArr});
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
    }

    setNewNumber() {
        this.setState({data: this.state.data + 10});
    }

    updateState(e) {
        this.setState({data: e.target.value});
    }

    getInfo() {
        var info = this.refs.myInput.value;
        alert(info);
    }

    clearData() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return (
            // <div>
            //     <button onClick={this.setStateHandler}>SET STATE</button>
            //     <h4>State Array: {this.state.data}</h4>
            //
            //     <div>
            //         <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
            //         <h4>Random number: {Math.random()}</h4>
            //     </div>
            //
            //     <div>
            //         <button onClick={this.findDomNodeHandler}>Find DOM handler</button>
            //         <div id="myDiv"> This is my div</div>
            //     </div>
            // </div>

            // <div>
            //     <button onClick={this.setNewNumber}>Increment</button>
            //     <Content number={this.state.data}/>
            // </div>

            // <div>
            //    <Footer inputData={ this.state.data} updateState = {this.updateState}/>
            // </div>

            // <div>
            //     <input value={this.state.data}  onChange={this.updateState} ref = "myInput" type="text"/>
            //     <button onClick={this.clearData} >Click</button>
            //     <h4>{this.state.data}</h4>
            // </div>

            // <div>
            //     <table>
            //         <tbody>
            //         {this.state.data.filter(p => p.age > 25).map((person, i) => <TableRow key={i} data={person}/>)}
            //         </tbody>
            //
            //     </table>
            // </div>

            // <div>
            //     <div>
            //         {this.state.data.map((dynamicComponent, i) => <ComponentContent key={i} componentData={dynamicComponent}/>)}
            //     </div>
            // </div>

            <div>
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true}
                                         transitionAppearTimeout = { 500 }
                                         transitionEnterTimeout = { 500 }
                                         transitionLeaveTimeout = { 300 }>
                    <h1>My Element...</h1>
                </ReactCSSTransitionGroup>
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

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount");
    }

    componentWillReceiveProps(newProps) {
        console.log("component will recieve props");
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update")
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {
        var i = 2;
        var myStyle = {
            color: 'red',
            fontsize: 100
        }
        return (
            // <div>
            //     <h2>Hello {i == 1 ? 'Quang' : 'Xuyen'}</h2>
            //     <p style={myStyle}>
            //         This is my page
            //     </p>
            // </div>
            <div>
                {this.props.number}
            </div>
        );
    }
}

class ComponentContent extends React.Component{

    render() {
        return (
            <div>
                <div>{this.props.componentData.component}</div>
                <div>{this.props.componentData.id}</div>
            </div>
        );
    }

}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.inputData} onChange={this.props.updateState}/>
                <h4>{this.props.inputData}</h4>
            </div>
        );
    }
}

export default App;