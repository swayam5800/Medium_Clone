// SubscriptionSelection.js
import React from "react";

const SubscriptionSelection = ({ onSubscribe }) => {
  const handleSubscribe = (plan) => {
    // Pass the selected plan to the onSubscribe callback
    onSubscribe(plan);
  };

  return (
    <div>
      <h2>Choose Your Subscription Plan</h2>
      <ul>
        <li>
          <h3>Free Plan</h3>
          <p>Access to limited posts per day</p>
          <button onClick={() => handleSubscribe("free")}>Subscribe</button>
        </li>
        <li>
          <h3>$3 Plan</h3>
          <p>Access to more posts per day</p>
          <button onClick={() => handleSubscribe("3")}>Subscribe</button>
        </li>
        <li>
          <h3>$5 Plan</h3>
          <p>Access to even more posts per day</p>
          <button onClick={() => handleSubscribe("5")}>Subscribe</button>
        </li>
        <li>
          <h3>$10 Plan</h3>
          <p>Unlimited access to posts per day</p>
          <button onClick={() => handleSubscribe("10")}>Subscribe</button>
        </li>
      </ul>
    </div>
  );
};

export default SubscriptionSelection;
