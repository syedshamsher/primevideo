import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Nav } from '../Components/Nav/Nav'
import { Feed } from '../Pages/Feed/Feed'

export const Routes = () => {
    return (
        <div>
            <Route to="/" exact render={() => <Nav/> } />
            <Switch>
                <Route to="/" exact render={() => <Feed/>} />
            </Switch>
        </div>
    )
}
