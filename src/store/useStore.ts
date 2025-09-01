import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Types
export interface User {
  id: string
  name: string
  avatar: string
  year: string
  dorm: string
  bio: string
  verified: boolean
  responseTime: string
  memberSince: Date
  stats: {
    itemsSold: number
    itemsBought: number
    avgRating: number
    totalReviews: number
  }
}

export interface Message {
  id: string
  senderId: string
  text: string
  timestamp: Date
  read: boolean
}

export interface Product {
  id: number
  name: string
  price: string
  imageSrc: string
  seller: string
  sellerId: string
}

export interface MessageThread {
  id: string
  participants: User[]
  product?: Product
  messages: Message[]
  unreadCount: number
  lastMessage: Date
  isTyping?: boolean
}

export interface Notification {
  id: string
  type: 'message' | 'response' | 'sold' | 'price_drop'
  title: string
  message: string
  timestamp: Date
  read: boolean
  threadId?: string
  userId?: string
}

// Mock Users Data
export const mockUsers: Record<string, User> = {
  'current-user': {
    id: 'current-user',
    name: 'You',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    year: 'Junior',
    dorm: 'Whitman Hall',
    bio: 'Economics major, varsity tennis player. Always looking for good deals on textbooks and sports equipment.',
    verified: true,
    responseTime: '~5 min',
    memberSince: new Date('2023-09-01'),
    stats: {
      itemsSold: 12,
      itemsBought: 8,
      avgRating: 4.8,
      totalReviews: 20
    }
  },
  'alex-chen': {
    id: 'alex-chen',
    name: 'Alex Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    year: 'Senior',
    dorm: 'Whitman Hall',
    bio: 'Pre-med student selling my old textbooks and lab equipment. Quick responses, flexible on meetup times!',
    verified: true,
    responseTime: '~15 min',
    memberSince: new Date('2022-09-01'),
    stats: {
      itemsSold: 34,
      itemsBought: 12,
      avgRating: 4.9,
      totalReviews: 46
    }
  },
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    year: 'Sophomore',
    dorm: 'Foster House',
    bio: 'Environmental studies major. Selling dorm essentials and buying used textbooks. Love sustainable shopping!',
    verified: true,
    responseTime: '~1 hour',
    memberSince: new Date('2023-09-01'),
    stats: {
      itemsSold: 8,
      itemsBought: 15,
      avgRating: 4.7,
      totalReviews: 23
    }
  },
  'mike-williams': {
    id: 'mike-williams',
    name: 'Mike Williams',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    year: 'Junior',
    dorm: 'North Campus',
    bio: 'Computer Science major, tech enthusiast. Selling electronics and looking for programming books.',
    verified: false,
    responseTime: '~30 min',
    memberSince: new Date('2023-01-15'),
    stats: {
      itemsSold: 19,
      itemsBought: 7,
      avgRating: 4.6,
      totalReviews: 26
    }
  },
  'emma-wilson': {
    id: 'emma-wilson',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    year: 'Freshman',
    dorm: 'South Hall',
    bio: 'Art history major, just started at Groton! Looking for dorm decorations and art supplies.',
    verified: true,
    responseTime: '~2 hours',
    memberSince: new Date('2024-09-01'),
    stats: {
      itemsSold: 3,
      itemsBought: 11,
      avgRating: 5.0,
      totalReviews: 14
    }
  }
}

// Store Interface
interface StoreState {
  // Messages
  messageThreads: MessageThread[]
  activeChats: string[] // Thread IDs of open chat windows
  
  // Notifications
  notifications: Notification[]
  unreadNotifications: number
  
  // Actions
  createThread: (sellerId: string, product?: Product) => string
  sendMessage: (threadId: string, text: string) => void
  markAsRead: (threadId: string) => void
  toggleChat: (threadId: string) => void
  closeChat: (threadId: string) => void
  
  // Notification Actions
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void
  markNotificationAsRead: (notificationId: string) => void
  clearNotification: (notificationId: string) => void
  
  // Simulate seller response
  simulateResponse: (threadId: string, delay?: number) => void
  setTyping: (threadId: string, isTyping: boolean) => void
}

// Create Store
export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      messageThreads: [],
      activeChats: [],
      notifications: [],
      unreadNotifications: 0,

      createThread: (sellerId: string, product?: Product) => {
        const existingThread = get().messageThreads.find(
          thread => thread.participants.some(p => p.id === sellerId) && thread.product?.id === product?.id
        )
        
        if (existingThread) {
          set(state => ({
            activeChats: [...new Set([...state.activeChats, existingThread.id])]
          }))
          return existingThread.id
        }

        const threadId = `thread-${Date.now()}`
        const seller = mockUsers[sellerId] || mockUsers['alex-chen']
        const currentUser = mockUsers['current-user']
        
        const initialMessage: Message = {
          id: `msg-${Date.now()}`,
          senderId: 'current-user',
          text: product ? `Hi! I'm interested in the ${product.name}. Is it still available?` : 'Hi! I saw your listing and I\'m interested.',
          timestamp: new Date(),
          read: false
        }

        const newThread: MessageThread = {
          id: threadId,
          participants: [currentUser, seller],
          product,
          messages: [initialMessage],
          unreadCount: 0,
          lastMessage: new Date()
        }

        set(state => ({
          messageThreads: [...state.messageThreads, newThread],
          activeChats: [...state.activeChats, threadId]
        }))

        // Simulate seller response after 3 seconds
        get().simulateResponse(threadId, 3000)

        return threadId
      },

      sendMessage: (threadId: string, text: string) => {
        const message: Message = {
          id: `msg-${Date.now()}`,
          senderId: 'current-user',
          text,
          timestamp: new Date(),
          read: false
        }

        set(state => ({
          messageThreads: state.messageThreads.map(thread =>
            thread.id === threadId
              ? {
                  ...thread,
                  messages: [...thread.messages, message],
                  lastMessage: new Date()
                }
              : thread
          )
        }))

        // Simulate response
        get().simulateResponse(threadId, 2000 + Math.random() * 3000)
      },

      markAsRead: (threadId: string) => {
        set(state => ({
          messageThreads: state.messageThreads.map(thread =>
            thread.id === threadId
              ? {
                  ...thread,
                  unreadCount: 0,
                  messages: thread.messages.map(msg => ({ ...msg, read: true }))
                }
              : thread
          )
        }))
      },

      toggleChat: (threadId: string) => {
        set(state => {
          const isOpen = state.activeChats.includes(threadId)
          if (isOpen) {
            return { activeChats: state.activeChats.filter(id => id !== threadId) }
          } else {
            // Maximum 3 open chats
            const newChats = [...state.activeChats, threadId]
            return { activeChats: newChats.slice(-3) }
          }
        })
      },

      closeChat: (threadId: string) => {
        set(state => ({
          activeChats: state.activeChats.filter(id => id !== threadId)
        }))
      },

      addNotification: (notification) => {
        const newNotification: Notification = {
          ...notification,
          id: `notif-${Date.now()}`,
          timestamp: new Date(),
          read: false
        }

        set(state => ({
          notifications: [newNotification, ...state.notifications].slice(0, 10), // Keep last 10
          unreadNotifications: state.unreadNotifications + 1
        }))
      },

      markNotificationAsRead: (notificationId: string) => {
        set(state => ({
          notifications: state.notifications.map(n =>
            n.id === notificationId ? { ...n, read: true } : n
          ),
          unreadNotifications: Math.max(0, state.unreadNotifications - 1)
        }))
      },

      clearNotification: (notificationId: string) => {
        set(state => ({
          notifications: state.notifications.filter(n => n.id !== notificationId)
        }))
      },

      simulateResponse: (threadId: string, delay: number = 3000) => {
        const thread = get().messageThreads.find(t => t.id === threadId)
        if (!thread) return

        const seller = thread.participants.find(p => p.id !== 'current-user')
        if (!seller) return

        // Show typing indicator
        setTimeout(() => {
          get().setTyping(threadId, true)
        }, delay)

        // Send actual message
        setTimeout(() => {
          const responses = [
            'Yes, it\'s still available! When would you like to meet?',
            'Hi! Yes, I still have it. I can meet at the library tomorrow.',
            'Hey! It\'s available. I\'m flexible on the price if you can pick it up today.',
            'Yes! It\'s in great condition. Let me know when works for you.',
            'Still available! I can do $5 off if you buy it this week.'
          ]

          const responseText = responses[Math.floor(Math.random() * responses.length)]
          
          const message: Message = {
            id: `msg-${Date.now()}`,
            senderId: seller.id,
            text: responseText,
            timestamp: new Date(),
            read: false
          }

          set(state => ({
            messageThreads: state.messageThreads.map(t =>
              t.id === threadId
                ? {
                    ...t,
                    messages: [...t.messages, message],
                    unreadCount: t.unreadCount + 1,
                    lastMessage: new Date(),
                    isTyping: false
                  }
                : t
            )
          }))

          // Add notification if chat is closed
          const isOpen = get().activeChats.includes(threadId)
          if (!isOpen) {
            // Wait 15 seconds then show notification
            setTimeout(() => {
              get().addNotification({
                type: 'message',
                title: `${seller.name} responded`,
                message: responseText.substring(0, 50) + '...',
                threadId,
                userId: seller.id
              })
            }, 15000)
          }
        }, delay + 2000)
      },

      setTyping: (threadId: string, isTyping: boolean) => {
        set(state => ({
          messageThreads: state.messageThreads.map(thread =>
            thread.id === threadId ? { ...thread, isTyping } : thread
          )
        }))
      }
    }),
    {
      name: 'campusswap-storage',
      partialize: (state) => ({
        messageThreads: state.messageThreads,
        notifications: state.notifications
      })
    }
  )
)