"use client";

import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Company {
  name: string;
  value: string;
}

const CompanyNames: NextPage = () => {
  const [companies, setCompanies] = React.useState([
    { id: 814, name: "Tata Infotech", value: "1,50,000" },
    { id: 351, name: "Reliance Solutions", value: "45,000" },
    { id: 270, name: "HCL Technologies", value: "1,20,000" },
    { id: 938, name: "Infosys Limited", value: "1,80,000" },
    { id: 118, name: "Wipro Enterprises", value: "30,000" },
    { id: 475, name: "Mahindra IT", value: "1,00,000" },
    { id: 629, name: "Tech Mahindra", value: "50,000" },
    { id: 742, name: "L&T Infotech", value: "1,40,000" },
    { id: 211, name: "Mphasis Limited", value: "25,000" },
    { id: 985, name: "Mindtree Limited", value: "1,10,000" },
    { id: 463, name: "Hexaware Tech", value: "40,000" },
    { id: 137, name: "KPIT Technologies", value: "1,60,000" },
    { id: 982, name: "Persistent Systems", value: "35,000" },
    { id: 756, name: "Zensar Technologies", value: "1,25,000" },
    { id: 319, name: "NIIT Technologies", value: "20,000" },
    { id: 421, name: "Cyient Limited", value: "1,05,000" },
    { id: 935, name: "Sonata Software", value: "48,000" },
    { id: 118, name: "eClerx Services", value: "1,75,000" },
    { id: 627, name: "Firstsource Solutions", value: "32,000" },
    { id: 351, name: "Mphasis Limited", value: "1,15,000" },
    { id: 270, name: "Happiest Minds", value: "42,000" },
    { id: 814, name: "Infinite Computer", value: "1,02,000" },
    { id: 475, name: "Tata Elxsi", value: "38,000" },
    { id: 938, name: "Quess Corp Limited", value: "1,70,000" },
    { id: 211, name: "Aurionpro Solutions", value: "28,000" },
    { id: 985, name: "RBL Bank Limited", value: "1,08,000" },
    { id: 463, name: "Saksoft Limited", value: "22,000" },
    { id: 137, name: "Websol Energy", value: "1,40,000" },
    { id: 982, name: "Indiabulls Ventures", value: "50,000" },
    { id: 756, name: "Tata Communications", value: "1,30,000" },
    { id: 319, name: "Sasken Technologies", value: "40,000" },
    { id: 421, name: "OnMobile Global", value: "1,20,000" },
    { id: 935, name: "Majesco Limited", value: "35,000" },
    { id: 118, name: "Genesys International", value: "1,10,000" },
    { id: 627, name: "Nucleus Software", value: "30,000" },
    { id: 351, name: "Tata Consultancy", value: "1,80,000" },
    { id: 270, name: "Subex Limited", value: "25,000" },
    { id: 814, name: "Hinduja Global", value: "1,15,000" },
    { id: 475, name: "Geometric Limited", value: "45,000" },
    { id: 938, name: "Everest Industries", value: "1,05,000" },
    { id: 211, name: "R Systems International", value: "38,000" },
    { id: 985, name: "GSS Infotech", value: "1,75,000" },
  ]);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCompanies((prevCompanies) => [
        ...prevCompanies.slice(1),
        prevCompanies[0],
      ]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="border-b-2 border-t-2 p-1 rounded-full overflow-hidden bg-slate-100">
      <div className="flex overflow-hidden text-center w-max my-1 ">
        {companies.map((company, index) => (
          <Link
            href={`/${company.id}`}
            key={index}
            className="mr-4 lg:text-[10px] text-[5px] gap-2 flex bg-emerald-300 px-2 py-1 rounded-full"
          >
            <span className=" font-bold">{company.name}</span>
            <span className="text-gray-600">₹{company.value}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CompanyNames;
