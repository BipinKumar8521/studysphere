"use client";
import { tokenProvider } from "@/actions/stream.actions";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export const StreamVideoProvider = ({ children }) => {
  const [videoClient, setVideoClient] = useState();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) {
      console.log("User not loaded");
      return;
    }
    if (!apiKey) throw new Error("Stream API key is required");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.fullName || user.id,
        image: user.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [isLoaded, user]);

  if (!videoClient) return <h1>Loading...</h1>;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};
