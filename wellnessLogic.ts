import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from './constants';
import { Product } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * VitalVibe AI Recommendation Logic
 * Created by Nathaniel Estrella.
 * Refactored to use Google Gemini for intelligent recommendations.
 * 
 * This function uses Gemini to perform an analysis of user wellness
 * inputs against our botanical profile database.
 */
export const getBotanicalRecommendation = async (userInput: string): Promise<{ reasoning: string; recommendedIds: string[] }> => {
  const model = 'gemini-3-flash-preview';

  const productCatalog = PRODUCTS.map((p: Product) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    category: p.category,
  }));

  const systemInstruction = `You are a world-class wellness expert and botanicals specialist for a brand called VitalVibe. Your goal is to provide personalized supplement recommendations based on the user's wellness goals.

You will be given a user's goal and a catalog of available products.

Analyze the user's input and select up to 3 of the most relevant products from the catalog.

You MUST return your response in a valid JSON format.

The JSON object must contain two keys:
1. "reasoning": A concise, friendly, and encouraging explanation (2-3 sentences) for your product choices, explaining how they align with the user's goals. Start this with "Based on your goals...".
2. "recommendedIds": An array of strings, where each string is the exact 'id' of a recommended product from the catalog.

Do not include any text outside of the JSON object.`;

  const contents = `User's wellness goals: "${userInput}"

Available product catalog:
${JSON.stringify(productCatalog, null, 2)}`;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      reasoning: {
        type: Type.STRING,
        description: "A concise explanation for the product recommendations, starting with 'Based on your goals...'.",
      },
      recommendedIds: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: "An array of up to 3 product IDs from the provided catalog.",
      },
    },
    required: ["reasoning", "recommendedIds"],
  };

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const text = response.text.trim();
    const result = JSON.parse(text);
    
    if (result && result.reasoning && Array.isArray(result.recommendedIds)) {
      return {
          reasoning: result.reasoning,
          // Ensure we only return valid product IDs that are in our catalog
          recommendedIds: result.recommendedIds.filter((id: string) => PRODUCTS.some(p => p.id === id)).slice(0, 3)
      };
    } else {
      throw new Error("Invalid response format from AI.");
    }
  } catch (error) {
    console.error("Error getting botanical recommendation:", error);
    // Fallback protocol
    return {
      reasoning: "Our AI guide is taking a short rest. Based on common wellness goals, here are some of our most popular and effective products to get you started on your journey!",
      recommendedIds: ['zenith-energy', 'immune-shield', 'cognitive-plus'],
    };
  }
};
