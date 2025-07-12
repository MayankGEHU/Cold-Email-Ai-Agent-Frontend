"use client";

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Phone, Video, MoreVertical, Search } from 'lucide-react';
import { auth } from '../../firebaseConfig';

const ChatHeader = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const chatName = user?.displayName || user?.email || 'Guest';
  const avatar =
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      chatName
    )}&background=4F46E5&color=fff&size=64`;

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} alt={chatName} />
            <AvatarFallback className="bg-blue-500 text-white">
              {chatName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-100">{chatName}</h2>
          <p className="text-sm text-gray-400">
            {user ? 'Online' : 'Guest User'}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-300 hover:bg-gray-700"
        >
          <Search className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-300 hover:bg-gray-700"
        >
          <Phone className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-300 hover:bg-gray-700"
        >
          <Video className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-gray-300 hover:bg-gray-700"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
