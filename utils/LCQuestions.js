export function LCQuestions(text) {
  if (!text) return [];

  const patterns = [
    // Generic DSA prompts
    /(Given\s.+?)(?=\?|$)/gi,
    /(Find\s.+?)(?=\?|$)/gi,
    /(Return\s.+?)(?=\?|$)/gi,
    /(Implement\s.+?)(?=\?|$)/gi,
    /(Design\s.+?)(?=\?|$)/gi,
    /(Check\s.+?)(?=\?|$)/gi,

    // LeetCode-style common structures
    /(You are given.+?)(?=\?|$)/gi,
    /(Write a function.+?)(?=\?|$)/gi,
    /(Determine if.+?)(?=\?|$)/gi,
    /(Count the number of.+?)(?=\?|$)/gi,

    // Intuit-specific patterns
    /(Intuit asked.+?)(?=\?|$)/gi,
    /(In the Intuit interview.+?)(?=\?|$)/gi,
    /(For Intuit, solve.+?)(?=\?|$)/gi,

    // GitHub dumps (bullet formats)
    /-\s*(.+?\?)/g,
    /\*\s*(.+?\?)/g,

    // Common LC problem titles
    /(Two Sum.+?)(?=\n|$)/gi,
    /(LRU Cache.+?)(?=\n|$)/gi,
    /(Add Two Numbers.+?)(?=\n|$)/gi,
    /(Merge Intervals.+?)(?=\n|$)/gi,
    /(Number of Islands.+?)(?=\n|$)/gi,
    /(Top K Frequent.+?)(?=\n|$)/gi,
  ];

  const extracted = [];

  patterns.forEach((pattern) => {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const cleaned = match[1]
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^[-*]\s*/, "");

      if (cleaned.length > 10) extracted.push(cleaned);
    }
  });

  return extracted;
}