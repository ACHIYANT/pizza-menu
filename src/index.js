import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (

    
    <div className="container">
      {/* <h1>Hello React!!!!!</h1> */}
      <Header />
      <Menu />
      <Footer />
    </div>

    // Use of fragments
    // <>
    //   <Header />
    //   <Menu />
    //   <Footer />
    // </>
  );
}

function Header() {
  // const style = {color:"red", fontSize:"3rem", textTransform:"uppercase"}
  // return <h1 style={style} className="header">First React Pizza Co.</h1>
  return (

    <header className="header">
      <h1 className="header">Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">

      <h2>Our Menu</h2>
      
      {/* Conditional rendering using && */}

      {/* {numPizzas > 0  && (
        <ul className="pizzas">
          {pizzaData.map(function (pizza) {
            console.log(pizza);
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
      )} */}

      {/* Conditional rendering using ternary */}

      {/* Use of fragment */}
      {numPizzas > 0  ? (
        
        <>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all are organic, all delicious.</p>
        <ul className="pizzas">
          {pizzaData.map(function (pizza) {
            console.log(pizza);
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
        </>
      ):<p>we're still working on our menu. Please come back later.</p>}



      {/* <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price = {10}/>
            <Pizza name='Pizza Funghi' ingredients='Tomato, mushrooms, onion, and olive cheese' photoName='pizzas/funghi.jpg' price = {100}/> */}
      {/* <Pizza/>
            <Pizza/>
            <Pizza/> */}
    </main>
  );
}
// Below we are destructuring the props.
function Pizza({pizzaObj}) {
  // console.log(props);
  console.log(pizzaObj);

  // props.price=99;

  // if(pizzaObj.soldOut) return null;



  return (
    // Conditionally setting className.
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      {/* <img src={"pizzas/spinaci.jpg"} alt="Pizza spinaci" /> */}
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        {/* <h3>Pizza Spinaci</h3> */}
        <h3>{pizzaObj.name}</h3>
        {/* <p>Tomato, mozarella, spinach, and ricotta cheese</p> */}
        <p>{pizzaObj.ingredients}</p>

        {/* Conditionally setting text */}
        {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}

        {/* <span>{pizzaObj.soldOut ? 'SOLD OUT': pizzaObj.price + 3}</span> */}

      </div>
    </li>
  );
}
function Footer(props) {
  console.log(props);  

  let hour = new Date().getHours();
  if (hour < 10) hour = "0" + hour;
  const mins = new Date().getMinutes();
  const openHour = 0;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <closeHour;
  console.log(isOpen + "isOpen");
  // if(hour>=openHour && hour<=closeHour)
  //     alert("We're currently open.");
  // else
  //     alert("Sorry we're closed.");

  console.log(hour);
  console.log(closeHour)

  // return <footer className="footer">It's {hour}{`:`}{mins}. We're currently {isOpen?'open':'close'}</footer>

  //Conditional rendering using && based on short circuiting


  if(!isOpen)
  return (
    <footer className="footer">
       <p>It's {hour}:{mins} we are close now. We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
    </footer>
    );
  else
  return (
    <footer className="footer">
    {/* conditional rendering using && */}

      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order Now</button>
        </div>
      )}
      {isOpen === false ? (
        <p>
          It's {hour}
          {`:`}
          {mins}. We will open at {openHour}:00.
        </p>
      ) : (
        null
      )} */}

    {/* conditional rendering using ternaries */}

      {/* {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order Now</button>
        </div>
      ):<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>} */}


    {/* Extracting JSX into a new component */}
      {isOpen ? <Order openHours={openHour} closeHours={closeHour} /> :<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}

    </footer>
  );

  // return <footer>{new Date().toLocaleTimeString()} We're currently open </footer>
  // return React.createElement('footer',null,"We're currently open");
}
function Order(props){
  console.log(props.closeHours);
  return (
    <div className="order">
          <p>We're open from {props.openHours === 0?'00':props.openHours}:00 to {props.closeHours}:00. Come visit us or order online.</p>
          <button className="btn">Order Now</button>
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