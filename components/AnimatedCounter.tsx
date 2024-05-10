"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="amount-full">
      <CountUp duration={0.90} end={amount} decimals={2} decimal="." prefix="₹" />
    </div>
  );
};

export default AnimatedCounter;
