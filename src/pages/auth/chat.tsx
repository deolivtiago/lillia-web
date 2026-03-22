import { useEffect, useRef, useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PaperPlaneTiltIcon } from "@phosphor-icons/react"

export function ChatList() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Alice",
      text: "Hey! How are you?",
      timestamp: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      text: "I'm good! How about you?",
      timestamp: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Alice",
      text: "Doing great! Working on a new project.",
      timestamp: "10:33 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      text: "That sounds exciting! Tell me more about it.",
      timestamp: "10:35 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Alice",
      text: "It's a chat application using React and shadcn components.",
      timestamp: "10:36 AM",
      isOwn: false,
    },
    {
      id: 6,
      sender: "You",
      text: "Wow, that's impressive!",
      timestamp: "10:37 AM",
      isOwn: true,
    },
    {
      id: 7,
      sender: "Alice",
      text: "Thanks! It's still in development. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: "10:38 AM",
      isOwn: false,
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isOwn: true,
      }
      setMessages([...messages, newMsg])
      setNewMessage("")
    }
  }

  return (
    // <div className="bg-background flex min-h-screen items-center justify-center from-slate-50 to-slate-100 p-4">
    <Card className="flex h-150 w-full max-w-2xl flex-col shadow-xl">
      <CardHeader className="border-b">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Alice Johnson</CardTitle>
            <CardDescription>Active now</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full px-4">
          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex max-w-[70%] gap-2 ${message.isOwn ? "flex-row-reverse" : "flex-row"}`}
                >
                  <Avatar className="mt-1 h-8 w-8">
                    <AvatarFallback
                      className={message.isOwn ? "bg-purple-500 text-white" : "bg-slate-300"}
                    >
                      {message.sender.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className={`flex flex-col ${message.isOwn ? "items-end" : "items-start"}`}>
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.isOwn ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-900"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <span className="mt-1 px-1 text-xs text-slate-500">{message.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <PaperPlaneTiltIcon className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
    // </div>
  )
}
