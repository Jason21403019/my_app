// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { messages } = req.body;

//   try {
//     const response = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages,
//       }),
//     });

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// }
