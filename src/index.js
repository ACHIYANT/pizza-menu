import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


function App() {
  return (
    <div>
      <h1>Hello React!!!!!</h1>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//  ReactDOM.render(<App />)
