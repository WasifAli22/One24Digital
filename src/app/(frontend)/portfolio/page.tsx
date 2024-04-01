"use client"
import React from "react";
import OurServices from "@/components/OurServices";
import PortfolioBanner from "@/components/PortfolioBanner";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner
        background={{ color: 'red' }}
        text={<span>Explore Our Portfolio Or <br /> <span className="italic font-bold">Recent Work.</span></span>}
      />
      <OurServices />
    </div>
  );
};

export default Portfolio;