import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed/ChatFeed";
import LoginForm from "./components/LoginForm/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="5bb5440e-e720-4a50-bfb1-74ad2a5dee71"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  );
};

export default App;
