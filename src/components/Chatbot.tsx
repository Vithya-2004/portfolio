import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw, ChevronDown, Download, FileText } from 'lucide-react';
import { answerPortfolioQuery, QUICK_PROMPTS, ChatMessage } from '../services/portfolioAssistant';
import { downloadResumePdf } from '../utils/generateResumePdf';

interface ChatbotProps {
  onOpenResume: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: `Hello! I am Ask Vithya AI, Vithya S's portfolio assistant. You can ask me anything about her education, technical skills, internships, projects, or resume.`,
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      inputRef.current?.focus();
    }
  }, [isOpen, messages]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = answerPortfolioQuery(query);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: response.action
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (action: ChatMessage['action']) => {
    if (!action) return;
    if (action.type === 'open_resume') {
      onOpenResume();
    } else if (action.type === 'download_resume') {
      downloadResumePdf();
    } else if (action.type === 'view_projects') {
      const el = document.getElementById('projects');
      el?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    } else if (action.type === 'contact') {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'msg-welcome',
        sender: 'assistant',
        text: `Chat reset. Ask Vithya AI anything about Vithya's skills, qualifications, internships, projects, or interests!`,
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 print:hidden font-['Inter']">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative btn-royal p-4 rounded-full text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)] flex items-center justify-center cursor-pointer group"
          aria-label="Ask Vithya AI"
          title="Ask Vithya AI"
        >
          <Bot className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#060e22] rounded-full animate-ping" />
          )}
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#060e22] rounded-full shadow-[0_0_8px_#34d399]" />
          )}
          <span className="sr-only">Ask Vithya AI</span>
        </button>
      )}

      {/* Glass Chat Window */}
      {isOpen && (
        <div className="bg-[#081534]/95 backdrop-blur-2xl rounded-2xl w-[340px] sm:w-[380px] h-[520px] max-h-[85vh] flex flex-col shadow-[0_20px_50px_rgba(0,10,35,0.8)] border border-white/15 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="px-5 py-3.5 bg-[#061028]/90 border-b border-white/10 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shadow-inner">
                <Sparkles className="w-4 h-4 text-sky-300" />
              </div>
              <div>
                <h4 className="font-['Montserrat'] font-bold text-sm text-white">
                  Ask Vithya AI
                </h4>
                <p className="text-[10px] text-sky-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
                  Grounded on Vithya's Portfolio
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Clear conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Close chat"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="p-4 overflow-y-auto flex-grow space-y-3.5 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'btn-royal text-white rounded-br-none shadow-sm'
                      : 'bg-white/10 border border-white/10 text-slate-100 rounded-bl-none shadow-sm backdrop-blur-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Action Button Attachment */}
                  {msg.action && (
                    <div className="mt-2.5 pt-2 border-t border-white/15">
                      <button
                        onClick={() => handleActionClick(msg.action)}
                        className="btn-glass px-3 py-1.5 rounded-lg text-[11px] font-semibold text-sky-200 hover:text-white flex items-center gap-1.5 w-full justify-center cursor-pointer"
                      >
                        {msg.action.type === 'download_resume' && <Download className="w-3 h-3 text-sky-300" />}
                        {msg.action.type === 'open_resume' && <FileText className="w-3 h-3 text-sky-300" />}
                        <span>{msg.action.label}</span>
                      </button>
                    </div>
                  )}

                  <span className="text-[9px] text-slate-400 block text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 flex items-center justify-center text-sky-300 shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white/10 border border-white/10 rounded-xl p-3 text-slate-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-[#061028]/60 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS.slice(0, 3).map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] bg-white/5 hover:bg-blue-600/30 text-slate-300 hover:text-sky-200 border border-white/10 transition-colors shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#061028]/90 border-t border-white/10 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about skills, projects, college..."
              className="flex-grow glass-input text-xs p-2.5 rounded-xl outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="btn-royal p-2.5 rounded-xl text-white disabled:opacity-40 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
