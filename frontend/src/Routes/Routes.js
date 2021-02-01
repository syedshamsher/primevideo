import React from 'react'
import { Route } from 'react-router-dom'
import { Nav } from '../Components/Nav/Nav'

export const Routes = () => {
    return (
        <div>
            <Route to="/" render={() => <Nav/> } />
        </div>
    )
}
