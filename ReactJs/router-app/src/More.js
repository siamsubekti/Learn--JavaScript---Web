import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function More() {
    // let {path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>More</h2>
        {/* <ul>
          <li>
            <Link to={`${url}/Ini Itu`}>To learn other product</Link>
          </li>
          <li>
            <Link to={`${url}/Ngga penting`}>FAQ</Link>
          </li>
          <li>
            <Link to={`${url}/percuma`}>History</Link>
          </li>
        </ul>
  
        <Switch>
          <Route path={`${path}/:MoreId`}>
            <Mores />
          </Route>
        </Switch> */}
      </div>
    )
  }

  // function Mores() {
  //   let { MoreId } = useParams();
  
  //   return (
  //     <div>
  //       <h3 className="more">{MoreId}</h3>
  //     </div>
  //   );
  // }

  export default More;