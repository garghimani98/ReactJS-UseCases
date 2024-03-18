
import './App.css';
import CheckoutStepper from './components/CheckoutStepper.js';


const CHECKOUT_STEPS=[
  {
    name:"Customer Info",
    Component:()=><div>Provide your personal details</div>,
  },
  {
    name:"Shipping infor",
    Component:()=><div>Provide your Shipping details</div>
  },
  {
    name:"Payment",
    Component:()=><div>Complete Payment</div>
  },
  {
    name:"Delivered",
    Component:()=><div>Order delivered</div>
  },

];

function App() {
  return (
    <div >
      <h2></h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS}/>
    </div>
  );
}

export default App;
