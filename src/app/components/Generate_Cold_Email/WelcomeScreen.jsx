import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {
  Send,
  Paperclip,
  ArrowUp,
  Search,
  Brain,
} from 'lucide-react';

const WelcomeScreen = ({ onSendMessage, username }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleFeatureClick = (feature) => {
    onSendMessage(`I want to use ${feature}`);
  };

  return (
    <div className="h-[80vh] bg-transparent text-gray-100 flex flex-col items-center justify-end p-4 sm:p-6 lg:p-4">
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-7 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {username ? username : "Guest"}
            </h1>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <form onSubmit={handleSubmit} className="relative">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-3 sm:p-4">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What do you want to Generate?"
                className="bg-transparent border-0 text-base sm:text-lg placeholder-gray-400 focus:ring-0 focus:outline-none w-full"
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 gap-3 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-300 hover:bg-gray-700 p-2"
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-full px-3 py-2 text-xs sm:text-sm"
                    onClick={() => handleFeatureClick('DeepSearch')}
                  >
                    <Search className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    DeepSearch
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-300 hover:bg-gray-700 rounded-full px-3 py-2 text-xs sm:text-sm"
                    onClick={() => handleFeatureClick('Think')}
                  >
                    <Brain className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Think
                  </Button>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-gray-300 text-xs sm:text-sm"
                  >
                    By ColdMail AI
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
        </div>

        <div className="text-center text-xs sm:text-sm text-gray-500 px-4">
          By messaging Code Mail Ai-Agent, you agree to our{' '}
          <a href="#" className="text-gray-400 hover:text-gray-300 underline">
            Terms
          </a>{' '}
          and{' '}
          <a href="#" className="text-gray-400 hover:text-gray-300 underline">
            Privacy Policy
          </a>.
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
