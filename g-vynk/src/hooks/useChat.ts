import { useCallback, useState } from "react";
import { dummyInitialChatMessages } from "../assets/asset";
import type { User } from "../types/user";

export const useChat = (_roomId?: string, user?: User) => {
  const [messages, setMessages] = useState(dummyInitialChatMessages);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || !user) return;

      const message = {
        id: Date.now().toString(),
        text: text.trim(),
        senderName: user.name || user.fullName || "You",
        senderId: user.id,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, message]);
    },
    [user],
  );

  const toggleChat = useCallback((): boolean => {
    const nextState = !isChatOpen;

    setIsChatOpen((prev) => {
      const updatedState = !prev;
      if (!prev) setUnreadCount(0);
      return updatedState;
    });

    if (!isChatOpen) setUnreadCount(0);
    return nextState;
  }, [isChatOpen]);

  return [messages, sendMessage, unreadCount, isChatOpen, toggleChat] as const;
};
