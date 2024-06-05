const MeetingRoomPage = ({ params }) => {
  const meetingId = params.meetId;

  return (
    <div>
      <h1>Meeting Room Page</h1>
      <h2>
        Meeting Id : <span> {meetingId} </span>
      </h2>
    </div>
  );
};

export default MeetingRoomPage;
