import {
    BrowserRouter,
    Routes,
    Route } from 'react-router-dom'
import App from './App';
import NotFound from './NotFound';
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/movie/:id' element={<App />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
)

export default Router;

// if loading is present by mocking the promise
// if error is present by mocking the promise
// if data is present by mocking the promise 
    // movie title, description
    // no of photoes, if data exists
    // no of cast tiles
        // check for title, character name, and if profile pic is rendering
        
