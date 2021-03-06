import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./pages/Main"
import Search from "./pages/Search";
import Reviews from "./pages/Reviews";
import Article from "./pages/Article";
import SingleReview from "./components/SingleReview";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/app-food" component={Main}/>
        <Route exact path="/app-food/posts/:id" component={SingleReview}/>
        <Route exact path="/article" component={Article}/>
        <Route exact path="/search-recipe" component={Search}/>
        <Route exact path="/review" component={Reviews}/>
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