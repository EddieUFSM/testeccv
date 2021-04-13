import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"


/**
 * Pages
 * Alphabethic order
 */

import Checkout from "./pages/index"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={(props) => <Checkout {...props} />} />
            </Switch>
        </BrowserRouter>
    )
}

