import axios from "axios";
import { useState, useEffect } from "react";
import { LandmarksIndex } from "./LandmarksIndex";


export function LandmarksPage() {
  const [landmarks, setLandmarks] = useState([]);

  const handleIndex = () => {
    console.log("HandleIndex");
    axios.get("http://localhost:3000/landmarks").then((response) => {
      console.log(response.data);
      setLandmarks(response.data);
    });
  };

  useEffect(handleIndex,[]);

  return (
    <div>
      <LandmarksIndex landmarks={landmarks}/>
    </div>
  );
}
