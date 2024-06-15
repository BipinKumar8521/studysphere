import {
  CallControls,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";
import React from "react";

const MeetingRoom = () => {
  const [layout, setLayout] = React.useState("speaker-left");
  const [showParticipants, setShowParticipants] = React.useState(true);

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  return (
    <section>
      <div>
        <div>
          <CallLayout />
        </div>
        <div>
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div>
        <CallControls />
      </div>
    </section>
  );
};

export default MeetingRoom;
