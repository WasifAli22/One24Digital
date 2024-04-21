"use client"
import React from "react";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { useQuery } from "@apollo/client";
import { getPortfolio } from "@/app/lib/queries";
import SkeletonService from "../test/page";


const Portfolio =   () => {
  const { loading, error, data } = useQuery(getPortfolio, {
    fetchPolicy: "cache-and-network",
  });
  if (error) return <p>Error : while Loading Portfolio</p>;
  if (loading) return <p><SkeletonService  /></p>
  return (
    <div>
      <PortfolioBanner
        background={{ color: "red" }}
        text={"See Our Portfolio \n OR \n Efficient Recent Work."}
      />
      <PortfolioCard portfolioData={data?.getPortfolio?.PortfolioData}/>
    </div>
  );
};

export default Portfolio;
