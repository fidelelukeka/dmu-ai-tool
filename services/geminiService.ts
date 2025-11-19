import { GoogleGenAI } from "@google/genai";
import { FULL_REPORT_CONTEXT } from '../constants';

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing in environment variables.");
      throw new Error("Configuration Error: API Key missing.");
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const ai = getClient();
    
    const systemInstruction = `
      Tu es un assistant expert en action humanitaire. Tu as accès au rapport de formation suivant.
      
      ${FULL_REPORT_CONTEXT}

      Ta mission est de répondre aux questions de l'utilisateur UNIQUEMENT sur la base de ce rapport.
      Sois professionnel, concis et précis. Si la réponse n'est pas dans le rapport, dis-le poliment.
      Formatte tes réponses avec une mise en forme claire.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3, // Keep it factual based on the report
      }
    });

    return response.text || "Je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Une erreur est survenue lors de la consultation de l'assistant.";
  }
};