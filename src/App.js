import { Navigate, useState } from "react"
import Landing from "./landing"
import Login from "./Login"
import Register from "./Register"
import UserMainPage from "./UserMainPage"
import GuestMainPage from "./GuestMainPage"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { LoginContext } from "./Context"
import SearchResult from "./SearchResult"
import SearchApplied from "./SearchApplied"

var userId = "";

function App() {

  const[loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing/>}/>
            <Route path="/login" exact element={<Login/>}/>
            <Route path="/register" exact element={<Register/>}/>
            <Route path="/main-user" exact element={<UserMainPage/>}/>
            <Route path="/main-guest" exact element={<GuestMainPage/>}/>
            <Route path="/search-result" exact element={<SearchResult/>}/>
            <Route path="/search-applied" exact element={<SearchApplied/>}/>
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
