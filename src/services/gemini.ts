import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function askGemini(prompt: string, context: string) {
  const model = "gemini-3-flash-preview";
  const response = await ai.models.generateContent({
    model,
    contents: [
      {
        role: "user",
        parts: [{ text: `Bạn là trợ lý ảo tuyển sinh của Trường Cao đẳng Sư phạm Trung ương. 
        Dưới đây là thông tin về trường:
        ${context}
        
        Hãy trả lời câu hỏi của thí sinh một cách thân thiện, chuyên nghiệp và chính xác dựa trên thông tin trên. 
        Nếu không có thông tin, hãy khuyên thí sinh liên hệ hotline: 024.3756.2666.
        
        Câu hỏi: ${prompt}` }]
      }
    ],
  });
  return response.text;
}
