import { useEffect, useState } from "react";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useGetCallById = (callId) => {
  const [call, setCall] = useState();
  const client = useStreamVideoClient();

  const [isCallLoading, setIsCallLoading] = useState(true);

  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id: callId,
        },
      });

      if (calls.length > 0) {
        setCall(calls[0]);
      }
      setIsCallLoading(false);
    };
    loadCall();
  }, [callId, client]);

  return { call, isCallLoading };
};
