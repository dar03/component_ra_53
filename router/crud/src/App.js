import './App.css';
import '../'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateEditPage from "./components/CreateEditPage";
import ListPage from "./components/ListPage";
import ViewEditPage from "./components/ViewEditPage";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" component={ListPage}/>
                <Route path="/posts/new" exact component={CreateEditPage}/>
                <Route exact path="/posts/:id(\d+)" element={ViewEditPage} />
              </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;