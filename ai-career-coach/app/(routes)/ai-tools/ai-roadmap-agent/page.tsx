"use client"
import React from 'react'
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import RoadMapCanvas from './_components/RoadMapCanvas';

      const RoadMapGeneratorAgent = () => {
const [latestRoadMap, setLatestRoadMap] = useState<any>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
    useEffect(() => {
    const fetchLatestRoadMap = async () => {
      try {
        const response = await axios.get("/api/roadmap/latest");
        setLatestRoadMap(response.data[0]); 
        console.log("data:", response.data[0].roadMapData)
      } catch (err: any) {
        console.error(err);
        setError("Failed to fetch latest road map");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestRoadMap();
  }, []);

  return (
     <div>



     </div>
  )
};


export default RoadMapGeneratorAgent;

