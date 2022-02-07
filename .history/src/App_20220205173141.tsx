import React from "react";


const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'))
const Login = React.lazy(() => import('./pages/Login/index'))
const Page404 = React.lazy(() => import('./pages/Page404/index'))

function App() {
  return <div className="App"></div>;
}

export default App;
