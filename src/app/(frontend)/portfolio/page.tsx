"use client"
import React from "react";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioCard from "@/components/portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <div>
      <PortfolioBanner
        background={{ color: 'red' }}
        text={"See Our Portfolio \n OR \n Efficient Recent Work."}
      />
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;