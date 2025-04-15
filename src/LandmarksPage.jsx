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
    setIsLandmarksShowVisible(true);
    setCurrentLandmark(landmark);
  };

  const handleUpdate = (landmark, params, successCallback) => {
    console.log("handleUpdate");
    axios.patch(`api/v1/landmarks/${landmark.id}`, params).then((response)=> {
      setLandmarks(landmarks.map(l => l.id === response.data.id ? response.data : l));
      successCallback();
      setIsLandmarksShowVisible(false);
    });
  };

  const handleDestroy = (landmark) => {
    console.log("handleDestroy", landmark);
    axios.delete(`api/v1/landmarks/${landmark.id}`).then((response) => {
      setLandmarks(landmarks.filter((l)=> l.id !== landmark.id));
      setIsLandmarksShowVisible(false);
    });
  };

  useEffect(handleIndex,[]);

  return (
    <main>
      <LandmarksNew onCreate={handleCreate} />
      <LandmarksIndex landmarks={landmarks} onShow={handleShow}/>
      <Modal show={isLandmarksShowVisible} onClose={() => setIsLandmarksShowVisible(false)}>
        <LandmarksShow landmark={currentLandmark} onUpdate={handleUpdate} onDestroy={handleDestroy} />  
      </Modal>
    </main>
  );
}
