"use client"
import React from "react";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner
        background={{ color: 'red' }}
        text={"Explore Our Services \n & \n Transform Your Business."}
      />
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;