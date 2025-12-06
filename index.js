import { runSearch } from "./services/serapiClient.js"
import { SEARCH_QUERIES } from "./utils/queries.js";
// import { extractQuestions } from "./utils/extractQuestions.js";
import { LCQuestions } from "./utils/LCQuestions.js";

async function scrapeAll() {
  let allQuestions = [];

  for (const query of SEARCH_QUERIES) {
    console.log(`🔍 Searching for: ${query}`);

    try {
      const data = await runSearch({
        engine: "google",
        q: query,
        num: 10,
        hl: "en",
      });

      const organic = data.organic_results || [];

      organic.forEach((result) => {
        const combinedText = `${result.title} ${result.snippet}`;
        const questions = LCQuestions(combinedText);
        allQuestions.push(...questions);
      });
    } catch (e) {
      console.log("Error scraping:", e);
    }
  }

  // Deduplicate + limit to 20
  const unique = [...new Set(allQuestions)];
  const final = unique.slice(0, 20);

  console.log("\n🚀 Final Extracted Interview Questions:");
  final.forEach((q, i) => console.log(`${i + 1}. ${q}`));
}

scrapeAll();