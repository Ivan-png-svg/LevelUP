import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Вітаю! Я AI-помічник LEVEL UP. Чим можу вам допомогти?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Які послуги ви надаєте?',
    'Скільки коштує консультація?',
    'Як записатись на прийом?',
    'Графік роботи',
  ];

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (
      lowerMessage.includes('послуг') ||
      lowerMessage.includes('що ви') ||
      lowerMessage.includes('чим займаєтесь')
    ) {
      return 'Ми надаємо три основні види послуг:\n\n1. Індивідуальні психологічні консультації\n2. Групові тренінги та семінари\n3. Корпоративні програми для команд\n\nДетальніше можна дізнатись на сторінці "Послуги".';
    }

    if (
      lowerMessage.includes('ціна') ||
      lowerMessage.includes('вартість') ||
      lowerMessage.includes('коштує')
    ) {
      return 'Наші ціни:\n\n• Індивідуальна консультація - від 500 грн\n• Групові тренінги - від 800 грн\n• Корпоративні програми - за домовленістю\n\nПерегляньте детальніше на сторінці "Ціни".';
    }

    if (
      lowerMessage.includes('запис') ||
      lowerMessage.includes('як записат') ||
      lowerMessage.includes('консультац')
    ) {
      return 'Записатись на консультацію можна:\n\n• Через форму на сторінці "Контакти"\n• За телефоном: +380 (98) 123 45 67\n• Email: levelup@gmail.com\n\nНаша команда зв\'яжеться з вами найближчим часом!';
    }

    if (
      lowerMessage.includes('графік') ||
      lowerMessage.includes('режим') ||
      lowerMessage.includes('коли працює')
    ) {
      return 'Наш графік роботи:\n\n• Пн-Пт: 9:00 - 20:00\n• Субота: 10:00 - 18:00\n• Неділя: вихідний\n\nМи працюємо онлайн та офлайн!';
    }

    if (
      lowerMessage.includes('де ви') ||
      lowerMessage.includes('адреса') ||
      lowerMessage.includes('знаходитесь')
    ) {
      return 'Наша адреса: Львів, вул. Володимира Великого, 15\n\nМи знаходимось в центрі міста. Також проводимо онлайн консультації!';
    }

    if (
      lowerMessage.includes('команда') ||
      lowerMessage.includes('психолог') ||
      lowerMessage.includes('хто працює')
    ) {
      return 'Наш головний фахівець - Тетяна Колодчак, практикуючий психолог з 15+ років досвіду.\n\nВона спеціалізується на:\n• Сімейній психології\n• Консультуванні дорослих та дітей\n• Кризових станах та особистісному зростанні\n\nДізнайтесь більше на сторінці "Про нас".';
    }

    if (
      lowerMessage.includes('дяку') ||
      lowerMessage.includes('спасибі') ||
      lowerMessage.includes('дякую')
    ) {
      return 'Завжди радий допомогти! Якщо у вас є ще питання - звертайтесь! 😊';
    }

    if (lowerMessage.includes('привіт') || lowerMessage.includes('вітаю')) {
      return 'Вітаю! Чим можу вам допомогти сьогодні?';
    }

    return 'Дякую за ваше запитання! Я можу розповісти вам про наші послуги, ціни, графік роботи та допомогти записатись на консультацію.\n\nАбо виберіть одну з швидких відповідей нижче 👇';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform group"
          >
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border max-sm:bottom-0 max-sm:right-0 max-sm:left-0 max-sm:w-full max-sm:max-w-full max-sm:rounded-none max-sm:h-[85dvh]"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">AI Помічник</div>
                  <div className="text-xs text-white/80">Онлайн</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                      message.isBot
                        ? 'bg-white border border-border'
                        : 'bg-gradient-to-br from-primary to-secondary text-white'
                    }`}
                  >
                    {message.isBot && (
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="w-4 h-4 text-primary" />
                        <span className="text-xs font-medium text-foreground/70">
                          AI Помічник
                        </span>
                      </div>
                    )}
                    <p
                      className={`text-sm leading-relaxed whitespace-pre-line ${
                        message.isBot ? 'text-foreground/80' : 'text-white'
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="p-3 border-t border-border bg-white">
                <div className="text-xs text-foreground/60 mb-2">
                  Швидкі відповіді:
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Напишіть повідомлення..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-br from-primary to-secondary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

