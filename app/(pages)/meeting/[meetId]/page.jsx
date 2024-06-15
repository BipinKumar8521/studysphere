"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import MeetingSetup from "../_components/MeetingSetup";
import MeetingRoom from "../_components/MeetingRoom";
import { useGetCallById } from "@/hooks/useGetCallById";

const MeetingRoomPage = ({ params }) => {
  const meetingId = params.meetId;
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(meetingId);

  if (!isLoaded || isCallLoading) return <h1>Loading....</h1>;

  return (
    <div>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </div>
  );
};

export default MeetingRoomPage;
