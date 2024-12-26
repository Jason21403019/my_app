// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// export default function ChatPage() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     const response = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ messages: [...messages, userMessage] }),
//     });

//     const data = await response.json();
//     const botMessage = data.choices[0].message;

//     setMessages((prev) => [...prev, botMessage]);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <h1 className="text-xl font-bold mb-4 text-gray-100">ChatGPT Demo</h1>
//       <div className="border rounded-lg p-4 mb-4 h-[400px] overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-2 rounded ${
//               msg.role === "user" ? "bg-blue-100 text-right" : "bg-gray-100"
//             } mb-2`}>
//             {msg.content}
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center gap-2">
//         <Textarea
//           className="flex-grow"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <Button onClick={sendMessage}>Send</Button>
//       </div>
//     </div>
//   );
// }
