import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Add from "./componets/AddMovies/Add";
import ListMovies from "./componets/LIsteMovies/ListMovies";
import Navbar from "./componets/Navbar/Navbar";
import { moviesData } from "./constant/data";
import movieDetails from "./componets/LIsteMovies/movieDetails";
import Error from "./componets/Error";

function App() {
  const [Movies, setMovies] = useState(moviesData);
  const [text, setText] = useState("");
  const [getRate, setgetRate] = useState(1);
  const handelAdd = (add) => {
    setMovies([...Movies, add]);
  };
  const handelDelet = (i) =>
    setMovies(Movies.filter((movie) => movie.id !== i));
  return (
    <div className="App">
      <Navbar setText={setText} setgetRate={setgetRate} />
      <Add handelAdd={handelAdd} />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <ListMovies
              Movies={Movies}
              text={text}
              getRate={getRate}
              handelDelet={handelDelet}
              {...props}
            />
          )}
        />
        <Route exact path="/movieDetails/:id" component={movieDetails} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
