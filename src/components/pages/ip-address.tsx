import React, { useState, useEffect } from "react";
import { QRGenerator } from "..";

const IPTracker = () => {
  const [ipInfo, setIpInfo] = useState<{
    ip?: string;
    country_name?: string;
    city?: string;
    region?: string;
  }>({});

  useEffect(() => {
    async function fetchIPInfo() {
      try {
        const response = await fetch("https://ipapi.co/json");
        const data = await response.json();
        setIpInfo(data);
      } catch (error) {
        console.error("Error fetching IP information:", error);
      }
    }

    fetchIPInfo();
  }, []);

  console.log(ipInfo);
  return (
    <div className="text-white text-xs">
      <QRGenerator />
      <h2 className="text-5xl">Your IP Address: {ipInfo && ipInfo?.ip}</h2>
      {ipInfo && (
        <div className="text-3xl flex justify-center flex-col">
          <p className="">Country: {ipInfo?.country_name}</p>
          <p>City: {ipInfo?.city}</p>
          <p>Region: {ipInfo?.region}</p>
        </div>
      )}
    </div>
  );
};

export default IPTracker;
