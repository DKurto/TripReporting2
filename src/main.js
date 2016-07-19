import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Reports from './containers/Reports'
import NewReports from './containers/NewReport'
import EditReports from './containers/EditReport'
//import './styles/index.css'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Reports}/>
            <Route path='new_report' component={NewReport}/>
            <Route path="/:reportId" component={EditReport}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);