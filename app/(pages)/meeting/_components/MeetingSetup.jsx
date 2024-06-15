"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import styles from "./MeetingSetup.module.css";

const MeetingSetup = ({ setIsSetupComplete }) => {
  const [isMicCamToggle, setIsMicCamToggle] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error("Call object is not available");
  }

  useEffect(() => {
    if (isMicCamToggle) {
      call.microphone.disable();
      call.camera.disable();
    } else {
      call.microphone.enable();
      call.camera.enable();
    }
  }, [isMicCamToggle, call.camera, call.microphone]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Meeting Setup</h1>
      <VideoPreview />
      <div className={styles.info}>
        <label htmlFor="checkbox" className={styles.label}>
          <input
            type="checkbox"
            checked={isMicCamToggle}
            onChange={(e) => setIsMicCamToggle(e.target.checked)}
          />
          Join with Mic and Camera off
        </label>
        <DeviceSettings />
      </div>
      <button
        onClick={() => {
          setIsSetupComplete(true);
          call.join();
        }}
        className={styles.joinButton}
      >
        Join Meeting
      </button>
    </div>
  );
};

export default MeetingSetup;
