import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticleList from './components/articleList/ArticleList'
import ArticlePage from './components/articlePage/ArticlePage'
import ListHeader from './components/articleList/ListHeader'
import './App.css';

//Using function component here for performance 
export default function App() {
  return (
    <div>
      <Router>
        <div>
          {/* Don't understnd render={props=>()} */}
          <Route exact path="/" render={props => (
            <div style={homeContainer}>
              <ListHeader />
              <ArticleList />
            </div>
          )} />
          <Route path="/articlepage/:id" component={ArticlePage} />
        </div>
      </Router>
    </div>
  )
}

const homeContainer = {
  margin: "0 auto",
  width: "80%"
}

//CLASS NOTES
//setting state in function component

/*
home -> <a href='article/:id'></a>
article -> 
loop through the data to find routeid props.match...whatever from props passed as the parameter for the function

set state of the page by finding the date with a matching id (id === routeid) (useEffect, useState)
(so you can set state with function components)

use the state to display data TADA~~~
*/

//{useEffect, useState} from 'react'

/*
const [stateVal, setStateVal = useState('')] --> initial state
useEffect(() => {
    console.log('yes')
}, [])
*/

//CLASS COMPONENT ATTEMPT
// import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import ArticleList from './components/ArticleList'
// import ArticlePage from './components/ArticlePage'
// import './App.css';

// //Use functional components
// //style the project

// export default class App extends Component {
//   render() {
//     return (
// <Router>
//   <div>
//     {/* Don't understnd render={props=>()} */}
//     <Route exact path="/" render={props=>(
//       <React.Fragment>
//         <ArticleList/>
//       </React.Fragment>
//     )}/>

//     <Route path="/articlepage" component={ArticlePage}/>
//   </div>
// </Router>
//     )
//   }
// }