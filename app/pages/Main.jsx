import React from 'react';
import { Switch,Route } from 'react-router-dom';

import About from './About.jsx'
import History from './History.jsx'
import Nav from './Nav.jsx'
import Home from './Home.jsx'


class Main extends React.Component{


    previousLocation = this.props.location

    componentWillUpdate(nextProps) {
        const { location } = this.props
        // set previousLocation if props.location is not modal
        if (
        nextProps.history.action !== 'POP' &&
        (!location.state || !location.state.modal)
        ) {
        this.previousLocation = this.props.location
        }
    }

    render(){
        const { location } = this.props
        const isModal = !!(
        location &&
        location.state &&
        location.state.modal &&
        this.previousLocation !== location // not initial render
        )
        return (
            <div>
                <Route path="/" component={Nav}/>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/history" component={History}/>
                    <Route path='/note/:id' component={Detail} />
                </Switch>
                {isModal ? <Route path='/note/:id' component={Modal} /> : null}
            </div>
        ) 
    }
}

const Detail = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
)

const Modal = ({ match, history }) => {

    const back = (e) => {
        e.stopPropagation()
        history.goBack()
    }
    return (
        <div
        onClick={back}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.15)'
        }}
        >
        <div className='modal' style={{
        position: 'absolute',
            background: '#fff',
            top: 25,
            left: '10%',
            right: '10%',
            padding: 15,
            border: '2px solid #444'
        }}>
            <h3>ID: {match.params.id}</h3>
            <button type='button' onClick={back}>
            Close
            </button>
        </div>
        </div>
    )
}

module.exports = Main;