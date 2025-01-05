import React from "react";
import { useChat } from "../../providers/chat.provider";
import { useAuth } from "../../providers/auth.provider";

function PotentialChats() {
  const { user } = useAuth();
  const { potentialChats, createChat } = useChat();
  console.log(potentialChats);

  return (
    <div className="flex gap-2">
      {potentialChats &&
        potentialChats.map((u) => (
          <div
            className="relative p-2 border border-gray-400 rounded-md cursor-pointer"
            onClick={() => createChat(user?._id as string, u._id)}
          >
            {u.name}
            <span className="absolute w-2 h-2 bg-green-600 rounded-full -top-1 -right-1"></span>
          </div>
        ))}
    </div>
  );
}

export default PotentialChats;
