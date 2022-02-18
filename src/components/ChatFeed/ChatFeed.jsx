import MessageForm from "../MessageForm/MessageForm";
import MyMessage from "../MyMessage/MyMessage";
import TheirMessage from "../TheirMessage/TheirMessage";
import "./ChatFeed.css";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => {
      return (
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              display: "flex",
              width: "20px",
              heigh: "20px",
              justifyContent: isMyMessage ? "flex-start" : "flex-end",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          >
            <img
              className="read-receipt__img"
              src={`${person?.person?.avatar}`}
              alt=""
            />
          </div>
        )
      );
    });
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div
            className="message-block"
            style={{ justifyContent: isMyMessage ? "flex-end" : "flex-start" }}
          >
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>

          <div
            className="read-receipts"
            style={{
              display: "flex",
              marginRight: isMyMessage ? "20px" : "0px",
              marginLeft: isMyMessage ? "0px" : "56px",
              justifyContent: isMyMessage ? "flex-end" : "flex-start",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  renderMessages();

  if (!chat) return "Loading...";

  return (
    <>
      <div className="chat-feed">
        <div className="chat-title-container">
          <div className="chat-title">{chat?.title}</div>
          <div className="chat-subtitle">
            Users in chat:{" "}
            {chat.people.map((person) => `* ${person.person.username} `)}
          </div>
        </div>
        {renderMessages()}
        <div style={{ height: "100px" }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>

      <MyMessage {...props} />
      <TheirMessage {...props} />
    </>
  );
};

export default ChatFeed;
