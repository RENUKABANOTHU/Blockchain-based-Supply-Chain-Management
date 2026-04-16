
import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const history = useHistory();

  const redirect_to_roles = () => history.push("/roles");
  const redirect_to_addmed = () => history.push("/addmed");
  const redirect_to_supply = () => history.push("/supply");
  const redirect_to_track = () => history.push("/track");

  return (
    <div className="home-container">
      <div className="home-card">
        <h3>Supply Chain Flow</h3>

        <h6>
          (Note: <u>Owner</u> is the person who deployed the smart contract on the blockchain)
        </h6>

        <h5>Step 1: Register Stakeholders</h5>
        <h6>(One-time setup: Register Suppliers, Manufacturers, Distributors, and Retailers)</h6>
        <button onClick={redirect_to_roles}>Register</button>

        <h5>Step 2: Order Goods</h5>
        <button onClick={redirect_to_addmed}>Order Goods</button>

        <h5>Step 3: Control Supply Chain</h5>
        <button onClick={redirect_to_supply}>Control Supply Chain</button>

        <hr />

        <h5>Step 4: Track the Goods</h5>
        <button onClick={redirect_to_track}>Track Goods</button>
      </div>
    </div>
  );
}

export default Home;
