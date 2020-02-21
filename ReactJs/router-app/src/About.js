import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function About() {
    let {path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Abouts</h2>
        <ul>
          <li>
            <Link to={`${url}/lucu`}>Our Product</Link>
          </li>
          <li>
            <Link to={`${url}/tapi rese`}>High Price</Link>
          </li>
          <li>
            <Link to={`${url}/batal`}>Level Up</Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${path}/:AboutId`}>
            <Abouts />
          </Route>
        </Switch>
      </div>
    )
  }
  
  function Abouts() {
    let { AboutId } = useParams();
  
    return (
      <div>
        <h3 className="more">{AboutId}</h3>
      </div>
    );
  }
  
export default About;