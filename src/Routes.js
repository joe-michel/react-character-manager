import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Main from "./Main"
import Character from "./Character"
import Edit from "./Edit"
import Create from "./Create"

const Routes = () => (
    <div >
        <Route exact path="/Bottom" component={Main} />
        <Route exact path="/Character/:id" component={Character} />
        <Route exact path="/Edit/:id" component={Edit} />
        <Route exact path="/Create" component={Create} />
    </div>)


export default Routes