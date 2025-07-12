import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import WelcomeScreen from './WelcomeScreen';
import LoginModal from '../LoginModal';
import {
  RotateCcw,
  Copy,
  ArrowDown,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
} from 'lucide-react';
import { Button } from '../ui/Button';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [anonymousUsageCount, setAnonymousUsageCount] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [user, setUser] = useState(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText) => {
    if (!user && anonymousUsageCount >= 5) {
      setShowLoginModal(true);
      return;
    }

    if (!hasStartedChat) {
      setHasStartedChat(true);
    }

    const userMessage = {
      id: Date.now().toString(),
      message: messageText,
      sender: user?.name || 'Guest',
      timestamp: new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }),
      isCurrentUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    if (!user) {
      setAnonymousUsageCount((prev) => prev + 1);
    }

    try {
      const res = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: messageText }),
      });

      const data = await res.json();

      const aiMessage = {
        id: (Date.now() + 1).toString(),
        message: data.email || "Sorry, I couldn't generate a response.",
        sender: 'ColdMail AI',
        timestamp: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }),
        isCurrentUser: false,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          message: '⚠️ Failed to connect to the AI backend.',
          sender: 'System',
          timestamp: new Date().toLocaleTimeString(),
          isCurrentUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = (userInfo) => {
    setUser(userInfo);
    setShowLoginModal(false);
    setAnonymousUsageCount(0);
  };

  const MessageActions = ({ messageId }) => (
    <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-gray-400 hover:text-gray-300">
        <RotateCcw className="h-3 w-3" />
      </Button>
      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-gray-400 hover:text-gray-300">
        <Copy className="h-3 w-3" />
      </Button>
      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-gray-400 hover:text-gray-300">
        <ArrowDown className="h-3 w-3" />
      </Button>
      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-gray-400 hover:text-gray-300">
        <ThumbsUp className="h-3 w-3" />
      </Button>
      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-gray-400 hover:text-gray-300">
        <ThumbsDown className="h-3 w-3" />
      </Button>
      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-gray-400 hover:text-gray-300">
        <MoreHorizontal className="h-3 w-3" />
      </Button>
      <span className="text-xs text-gray-500 ml-2">1.1s</span>
    </div>
  );

  if (!hasStartedChat) {
    return (
      <>
        <WelcomeScreen
          onSendMessage={handleSendMessage}
          username={user?.name}
        />
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        )}
      </>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-transparent text-gray-100">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {messages.map((message) => (
            <div key={message.id} className="group mb-8">
              <div
                className={`flex items-start gap-4 ${
                  message.isCurrentUser ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-medium">
                    {message.isCurrentUser ? 'U' : 'G'}
                  </span>
                </div>
                <div
                  className={`flex-1 min-w-0 ${
                    message.isCurrentUser ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`text-sm text-gray-400 mb-1 ${
                      message.isCurrentUser ? 'text-right' : 'text-left'
                    }`}
                  >
                    {message.sender}
                  </div>
                  <div className="text-gray-100 leading-relaxed whitespace-pre-wrap">
                    {message.message}
                  </div>
                  {!message.isCurrentUser && (
                    <MessageActions messageId={message.id} />
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="text-center text-gray-400">Generating email...</div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-4xl mx-auto p-4">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
};

export default ChatInterface;
