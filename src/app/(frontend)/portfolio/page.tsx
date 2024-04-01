"use client"
import React from "react";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner
        background={{ color: 'red' }}
        text={<span>Explore Our Portfolio Or <br /> <span className="italic font-bold">Recent Work.</span></span>}
      />
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;