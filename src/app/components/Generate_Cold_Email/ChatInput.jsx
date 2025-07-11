import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { ArrowUp, Paperclip, Brain, Search } from 'lucide-react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="bg-gray-800 rounded-2xl border border-gray-700 p-4">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can Cold Email Genius help?"
          className="bg-transparent border-0 text-lg placeholder-gray-400 focus:ring-0 focus:outline-none w-full mb-4"
        />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300 hover:bg-gray-700"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-full px-4 py-2"
            >
              <Search className="h-4 w-4 mr-2" />
              DeepSearch
            </Button>
            
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-full px-4 py-2"
            >
              <Brain className="h-4 w-4 mr-2" />
              Think
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-300"
            >
              By Mayank Singh
  
            </Button>
            
            <Button
              type="submit"
              size="sm"
              className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
              disabled={!message.trim()}
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
