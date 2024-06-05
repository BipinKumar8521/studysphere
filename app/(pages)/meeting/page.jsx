"use client";

import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MeetingPage = () => {
  const { user } = useUser();
  const client = useStreamVideoClient();
  const router = useRouter();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    Link: "",
  });
  const [callDetails, setCallDetails] = useState({});

  const handleCreateMeeting = async () => {
    if (!client || !user) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Call not created");

      const startAt =
        values.dateTime.toISOString() || new Date(new Date()).toISOString();

      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);
      router.push(`/meeting/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Meeting Page</h1>
      <button onClick={handleCreateMeeting}> Create Meeting</button>
    </div>
  );
};

export default MeetingPage;
