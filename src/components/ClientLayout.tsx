"use client"

import { useStore } from "@/store/useStore"
import ChatWindow from "@/components/ChatWindow"
import NotificationToast from "@/components/NotificationToast"
import { AnimatePresence } from "motion/react"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { messageThreads, activeChats } = useStore()
  
  // Get active chat threads
  const activeChatThreads = messageThreads.filter(thread => 
    activeChats.includes(thread.id)
  )
  
  return (
    <>
      {children}
      
      {/* Notification Toasts */}
      <NotificationToast />
      
      {/* Chat Windows */}
      <AnimatePresence>
        {activeChatThreads.map((thread, index) => (
          <ChatWindow key={thread.id} thread={thread} position={index} />
        ))}
      </AnimatePresence>
    </>
  )
}