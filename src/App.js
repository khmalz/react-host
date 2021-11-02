import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router";

function Home() {
   return <h2>Halaman Home</h2>;
}

function ListView() {
   return (
      <div>
         <h2>Semua User</h2>

         <ul>
            <Link to="user/akmal">Akmal</Link> <br />
            <Link to="user/oso">Oso</Link> <br />
            <Link to="user/akbar">Akbar</Link> <br />
            <Link to="user/rakhmat">Rakhmat</Link>
         </ul>
      </div>
   );
}

function DetailView() {
   let { name } = useParams();

   return (
      <div>
         <h2>Ini Halaman {name}</h2>
      </div>
   );
}

function NoMatch() {
   return <h2>Halaman tidak ditemukan</h2>;
}

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div>
               <nav>
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/user">User</Link>
                  </li>
               </nav>

               <main>
                  <Switch>
                     <Route path="/" exact component={Home} />
                     <Route path="/user" exact component={ListView} />
                     <Route path="/user/:name" exact component={DetailView} />
                     <Route component={NoMatch} />
                  </Switch>
               </main>
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
