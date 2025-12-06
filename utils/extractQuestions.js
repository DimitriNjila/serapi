export function extractQuestions(text) {
  if (!text) return [];

  const patterns = [
    /(?:Q[:.\-\s])(.+?)(?:\?|$)/gi,
    /(How.+?\?)/gi,
    /(What.+?\?)/gi,
    /(Explain.+?\?)/gi,
    /(Design.+?\?)/gi,
    /(Implement.+?\?)/gi,
    /(Given.+?\?)/gi,
  ];

  const results = [];

  patterns.forEach((pattern) => {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      results.push(match[1].trim());
    }
  });

  return results;
}