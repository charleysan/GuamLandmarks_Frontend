import axios from "axios";
import { useState, useEffect } from "react";
import { LandmarksIndex } from "./LandmarksIndex";
import { LandmarksNew } from "./LandmarksNew";
import { LandmarksShow } from "./LandmarksShow";
import { Modal } from "./Modal"; 

axios.defaults.baseURL = "http://localhost:3000";

export function LandmarksPage() {
  const [landmarks, setLandmarks] = useState([]);
  const [isLandmarksShowVisible, setIsLandmarksShowVisible] = useState(false);
  const [currentLandmark, setCurrentLandmark] = useState({});

  const handleIndex = () => {
    console.log("HandleIndex");
    axios.get("api/v1/landmarks").then((response) => {
      console.log(response.data);
      setLandmarks(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("HandleCreate");
    axios.post("api/v1/landmarks", params).then((response) => {
      setLandmarks([...landmarks, response.data]);
      successCallback();
    }); 
  };

  const handleShow = (landmark) => {
    console.log("handleShow", landmark);
    setIsPhotosShowVisible(true);
    setCurrentLandmark(landmark);
  };

  useEffect(handleIndex,[]);

  return (
    <main>
      <LandmarksNew onCreate={handleCreate} />
      <LandmarksIndex landmarks={landmarks} onShow={handleShow}/>
      <Modal show={isLandmarksShowVisible} onClose={() => setIsLandmarksShowVisible(false)}>
        <LandmarksShow landmark={currentLandmark} />  
      </Modal>
    </main>
  );
}
