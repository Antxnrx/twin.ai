interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

export function ChatMessage({ content, isUser }: ChatMessageProps) {
  return (
    <div
      className={`
        flex w-full animate-fade-in
        ${isUser ? 'justify-end' : 'justify-start'}
      `}
    >
      <div
        className={`
          max-w-[80%] px-4 py-2.5 rounded-2xl
          text-[15px] leading-relaxed
          ${isUser
            ? 'bg-message-user text-message-user-foreground rounded-br-md'
            : 'bg-message-ai text-message-ai-foreground border border-border/50 rounded-bl-md'
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}
