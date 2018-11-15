import React, {Component} from 'react';
import PlayerContainer from './containers/PlayerContainer/playerContainer';
import {AlbumsContainer} from './containers/AlbumsContainer/AlbumsContainer';
import {UsersContainer} from "./containers/UsersContainer/UsersContainer";
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Error} from './components/error/error';
import {Navigation} from "./components/navigation/navigation";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route path="/" component={PlayerContainer} exact/>
                            <Route path="/users" component={UsersContainer}/>
                            <Route path="/albums" component={AlbumsContainer}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
