"use client"
import React from "react";
import { getCompany } from "@/app/lib/queries";
import CompanyBanner from "@/components/company/CompanyBanner";
import CompanyCard from "@/components/company/CompanyCard";
import { useQuery } from "@apollo/client";
import SkeletonService from "@/components/skeletons/PagSkeleton";

const Company = () => {
 

  const { loading, error, data } = useQuery(getCompany, {
    fetchPolicy: "cache-and-network",
  });

  // console.log("🚀 ~ company ~ client side -> data:", data?.getCompany?.CompanyData)
  if (error) return <p>Error : while Loading Portfolio</p>;
  if (loading)
    return (
      <p>
        <SkeletonService />
      </p>
    );
  return (
    <div>
      <CompanyBanner
        background={{ color: "red" }}
        text={"Reach Our Company \n & \n Transform Your Business."}
      />
      <CompanyCard companyData={data?.getCompany?.CompanyData}/>
    </div>
  );
};

export default Company;
