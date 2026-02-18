import { PRODUCTS } from './constants';
import { Category } from "./types";

/**
 * VitalVibe Botanical Recommendation Logic
 * Optimized local engine that matches user goals to product categories.
 */
export const getBotanicalRecommendation = async (userInput: string): Promise<{ reasoning: string; recommendedIds: string[] }> => {
  // Simulate a brief calculation for "real" feel
  await new Promise(resolve => setTimeout(resolve, 800));

  const input = userInput.toLowerCase();
  const recommendedIds: string[] = [];
  let reasoning = "";

  // Logic mapping for goals
  const mappings = [
    { keys: ['sleep', 'rest', 'night', 'insomnia', 'relax', 'calm'], category: Category.SLEEP, priority: 1 },
    { keys: ['energy', 'tired', 'fatigue', 'morning', 'wake', 'gym', 'workout'], category: Category.ENERGY, priority: 1 },
    { keys: ['focus', 'brain', 'study', 'work', 'memory', 'mental', 'clarity'], category: Category.FOCUS, priority: 1 },
    { keys: ['immune', 'sick', 'cold', 'flu', 'health', 'defense', 'shield'], category: Category.IMMUNITY, priority: 1 },
    { keys: ['recovery', 'muscle', 'sore', 'rebuild', 'healing', 'magnesium'], category: Category.RECOVERY, priority: 1 }
  ];

  // Find matches
  const matches = mappings.filter(m => m.keys.some(k => input.includes(k)));

  if (matches.length > 0) {
    matches.forEach(m => {
      const categoryProducts = PRODUCTS.filter(p => p.category === m.category);
      categoryProducts.forEach(p => {
        if (!recommendedIds.includes(p.id)) recommendedIds.push(p.id);
      });
    });
    
    reasoning = `Based on your specific focus on ${matches.map(m => m.category.toLowerCase()).join(' and ')}, we've curated a protocol designed to optimize your biological rhythms using high-bioavailability botanicals.`;
  } else {
    // Default/General Health recommendation if no keywords found
    recommendedIds.push('zenith-energy', 'immune-shield', 'cognitive-plus');
    reasoning = "We've selected our core vitality foundation to support your overall wellness journey and daily performance needs.";
  }

  return {
    reasoning,
    recommendedIds: recommendedIds.slice(0, 3)
  };
};