import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';

const ChatMessage = ({
  message,
  sender,
  timestamp,
  isCurrentUser,
  avatar
}) => {
  return (
    <div className={`flex gap-3 mb-4 ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarImage src={avatar} alt={sender} />
        <AvatarFallback className="bg-blue-500 text-white text-sm">
          {sender.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className={`flex flex-col max-w-[70%] ${isCurrentUser ? 'items-end' : 'items-start'}`}>
        <div className={`rounded-2xl px-4 py-2 break-words ${
          isCurrentUser 
            ? 'bg-blue-500 text-white rounded-br-md' 
            : 'bg-gray-700 text-gray-100 rounded-bl-md'
        }`}>
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <div className="flex items-center gap-2 mt-1 px-2">
          <span className="text-xs text-gray-400">{sender}</span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
