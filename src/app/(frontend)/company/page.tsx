"use client"
import CompanyBanner from '@/components/company/CompanyBanner'
import CompanyCard from '@/components/company/CompanyCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <CompanyBanner
        background={{ color: 'red' }}
        text={"Reach Our Company \n & \n Transform Your Business."}
      />
      <CompanyCard />
    </div>
  )
}

export default page
