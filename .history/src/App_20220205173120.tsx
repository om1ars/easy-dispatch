import React from "react";


const DefaultLayout = React.lazy(() => import('./layouts/DefaultLayout'))
const Lofin = React.lazy(() => import('./'))

function App() {
  return <div className="App"></div>;
}

export default App;
