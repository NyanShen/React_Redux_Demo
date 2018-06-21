import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import ReduxToastr from "react-redux-toastr";
import configureStore from "reduxModel/configureStore";

class App extends React.Component{

    render() {
        return (
            <Provider store={configureStore}>
                <section>
                    <Router>
                        <Switch>
                            <Route path="/login" component={null}/>
                        </Switch>
                    </Router>
                    <ReduxToastr
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        position="top-center"
                        preventDuplicates
                        newestOnTop={true}
                        timeOut={4000}/>
                </section>
            </Provider>
        );
    };
}
ReactDOM.render(
    <App/>,
    document.getElementById('app'));