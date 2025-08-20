// utils/gemini.js
export const getGeminiRecommendations = async (assessmentData) => {
    const apiKey = "YOUR_API_KEY"; // Replace with your actual key
    const url = "YOUR_URL" + apiKey;
  
    const prompt = `
      A user has completed a mental health self-assessment with the following data:
      - Name: ${assessmentData.name}
      - Age: ${assessmentData.age}
      - Gender: ${assessmentData.gender}
      - Sleep Quality (1-10): ${assessmentData.sleepQuality}
      - Stress Level (1-10): ${assessmentData.stressLevel}
      - Mood Rating (1-10): ${assessmentData.moodRating}
      - Energy Level (1-10): ${assessmentData.energyLevel}
      - Primary Goal: ${assessmentData.primaryGoal}
      - Preferred Activities: ${assessmentData.preferredActivities.join(", ")}
  
      Based on this data, suggest personalized mental wellness exercises or activities for the user to:
      1. Improve sleep quality
      2. Reduce stress
      3. Boost mood
  
      Please provide 3-5 bullet point suggestions for each goal. Keep the tone supportive and encouraging.
    `;
  
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
  
    const data = await response.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No recommendations received.";
  };
  
