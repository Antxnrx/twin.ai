import { FloatingNameBar } from '@/components/twin/FloatingNameBar';
import { ChatMessage } from '@/components/twin/ChatMessage';
import { ChatInput } from '@/components/twin/ChatInput';

const mockMessages = [
  { id: 1, content: "Hey bro 👋", isUser: false },
  { id: 2, content: "hi", isUser: true },
  { id: 3, content: "What's up?", isUser: false },
  { id: 4, content: "can you tell a very short story?", isUser: true },
  { id: 5, content: "He built a machine to predict the future. It only ever showed one result: 'Keep going.'", isUser: false },
];

export default function ChatScreen() {
  return (
    <div className="min-h-screen bg-background transition-theme">
      <FloatingNameBar name="Anton Raj" isClickable={true} />
      
      {/* Chat Area */}
      <div className="pt-20 pb-28 px-4">
        <div className="max-w-lg mx-auto space-y-3">
          {mockMessages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              isUser={message.isUser}
            />
          ))}
        </div>
      </div>
      
      <ChatInput />
    </div>
  );
}
