import { useState } from "react";
import useFetchReceipient from "../../hooks/useFetchReceipient";
import { useAuth } from "../../providers/auth.provider";
import { useChat, UserChat } from "../../providers/chat.provider";
import InputEmoji from "react-input-emoji";

function ChatBox() {
  const { user } = useAuth();
  const { currentChat, messages, isMessagesLoading } = useChat();
  const { recipientUser } = useFetchReceipient(currentChat as UserChat, user);
  const [textMessage, setTextMessage] = useState("");

  if (!recipientUser) {
    return <p>No conversation</p>;
  }
  if (isMessagesLoading) {
    return <p>Loading chat...</p>;
  }

  console.log("recipientUser", recipientUser);

  return (
    <div>
      <div className="text-center">{recipientUser.name}</div>
      <div className="h-96">
        {messages &&
          messages.map((message) => (
            <div
              className={`${
                message.senderId === user?._id
                  ? "flex justify-end"
                  : "flex justify-start"
              }`}
              key={message.chatId}
            >
              <div
                className={`p-2 text-white rounded-md max-w-[50%] ${
                  message.senderId === user?._id
                    ? "bg-blue-600 justify-end"
                    : "bg-gray-600"
                }`}
              >
                <p>{message.text}</p>
                <span>{message.createdAt}</span>
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center gap-3">
        <InputEmoji
          value={textMessage}
          onChange={setTextMessage}
          fontFamily="nunito"
          borderColor="rgba(70, 112, 223, 0.2)"
          shouldConvertEmojiToImage={false}
          shouldReturn
        />
        <button>📤</button>
      </div>
    </div>
  );
}

export default ChatBox;
