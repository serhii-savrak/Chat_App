const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ display: "flex", marginLeft: "auto" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message?.text}
    </div>
  );
};

export default MyMessage;
