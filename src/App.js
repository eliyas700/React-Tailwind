import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import PricingOptions from "./Components/Pricing Options/PricingOptions";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-5xl my-6">Welcome To my Shop!</h1>
      <PricingOptions></PricingOptions>
    </div>
  );
}

export default App;
