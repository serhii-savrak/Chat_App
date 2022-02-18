import "./TheirMessage.css";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div className="message-avatar">
          {" "}
          <img
            className="message-avatar__image"
            src={message?.sender?.avatar && `${message?.sender?.avatar}`}
            alt=""
            width="50px"
            height="50px"
          />
        </div>
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
          }}
        >
          {message?.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
