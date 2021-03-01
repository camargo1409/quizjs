import {
    BrowserRouter,Route,Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/quiz" exact component={Quiz} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes