import React,{useEffect} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from "./pages/Main"
import Search from "./pages/Search";
import Tasks from "./pages/Tasks";
import Article from "./pages/Article";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/app-food" component={Main}/>
        <Route exact path="/article" component={Article}/>
        <Route exact path="/app-food/#gallery" component={Main}/>
        <Route exact path="/app-food/#about" component={Main}/>
        <Route exact path="/search-recipe" component={Search}/>
        <Route exact path="/tasks" component={Tasks}/>
      </Switch>
    </Router>
  );
}

export default App;



//1. Szukanie potrawy
//2. Budowa Main Page sekcji (Hamburger ETC)
//3. Tworzenie komponenetow w sekcjach
//4. React router
//5.  TODO danego uzytkownika
//6. Pojedynczy todos
//7. Animacje ladowania errorow
//8. Wszystko na github pages



// useEffect(() => {
//   fetch("https://api.edamam.com/search?q=pizza&app_id=8a199d46&app_key=d55ad0c1aaeec55a7a2189cd79135822")
//   .then(response => response.json())
//   .then(json => console.log(json))


//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(json => console.log(json))

// })