const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY || '';

// Initialize Gemini API only when needed
let genai: any = null;

function getGenai() {
  if (!genai && apiKey) {
    // Lazy import to avoid errors if key is not set
    try {
      const { GoogleGenerativeAI } = require('@google/genai');
      genai = new GoogleGenerativeAI({ apiKey });
    } catch (error) {
      console.error('Failed to initialize Gemini API:', error);
    }
  }
  return genai;
}

export interface GradingResult {
  score: number; // 0-100
  feedback: string;
  whatWasCorrect: string;
  whatWasMissing: string;
  betterPhrasing?: string;
  isValid: boolean;
}

export interface HintResult {
  hint: string;
  isValid: boolean;
}

/**
 * Grade a short-answer question response using AI
 */
export async function gradeShortAnswer(
  question: string,
  userAnswer: string,
  modelAnswer: string
): Promise<GradingResult> {
  try {
    const genai = getGenai();
    if (!genai) {
      throw new Error('Gemini API not initialized');
    }
    
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are an expert interview coach. Evaluate this answer to an interview question.

QUESTION: "${question}"

EXPECTED/MODEL ANSWER: "${modelAnswer}"

USER'S ANSWER: "${userAnswer}"

Provide a JSON response with this exact structure:
{
  "score": <number 0-100>,
  "whatWasCorrect": "<2-3 sentences about what the user got right>",
  "whatWasMissing": "<2-3 sentences about what was missing or incorrect>",
  "betterPhrasing": "<a concise, better way to phrase the answer>",
  "feedback": "<3-4 sentence encouraging feedback>"
}

Be fair but honest. Deduct points for incomplete answers, inaccuracies, or missing key concepts.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Extract JSON from response
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not parse AI response');
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      score: Math.max(0, Math.min(100, parsed.score || 0)),
      feedback: parsed.feedback || '',
      whatWasCorrect: parsed.whatWasCorrect || '',
      whatWasMissing: parsed.whatWasMissing || '',
      betterPhrasing: parsed.betterPhrasing,
      isValid: true,
    };
  } catch (error) {
    console.error('Error grading answer:', error);
    return {
      score: 0,
      feedback: 'Unable to grade this answer. Please try again.',
      whatWasCorrect: '',
      whatWasMissing: '',
      isValid: false,
    };
  }
}

/**
 * Get a hint for a question without spoiling the answer
 */
export async function getHint(question: string): Promise<HintResult> {
  try {
    const genai = getGenai();
    if (!genai) {
      throw new Error('Gemini API not initialized');
    }
    
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `You are a helpful interview coach. Provide a subtle hint for this interview question WITHOUT revealing the answer.

QUESTION: "${question}"

Give a 1-2 sentence hint that guides the interviewee toward the right direction without spoiling the answer. Make it thought-provoking.`;

    const result = await model.generateContent(prompt);
    const hint = result.response.text().trim();

    return {
      hint,
      isValid: true,
    };
  } catch (error) {
    console.error('Error getting hint:', error);
    return {
      hint: 'Unable to get a hint right now. Try again later.',
      isValid: false,
    };
  }
}

/**
 * Generate explanation for why an answer is correct/incorrect
 */
export async function generateExplanation(
  question: string,
  correctAnswer: string,
  userAnswer?: string
): Promise<string> {
  try {
    const genai = getGenai();
    if (!genai) {
      throw new Error('Gemini API not initialized');
    }
    
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const userAnswerPart = userAnswer
      ? `USER'S ANSWER: "${userAnswer}"\n\n`
      : '';

    const prompt = `You are an expert interviewer explaining why an answer is correct or incorrect.

QUESTION: "${question}"

CORRECT ANSWER: "${correctAnswer}"

${userAnswerPart}Provide a 3-4 sentence clear, concise explanation that:
1. Explains why this is the correct answer
2. Highlights key concepts or principles
3. Provides a brief real-world example if applicable

Be educational and encouraging.`;

    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  } catch (error) {
    console.error('Error generating explanation:', error);
    return 'Unable to generate explanation. Please try again.';
  }
}

/**
 * Detect weak areas from quiz performance
 */
export async function detectWeakAreas(quizResults: any[]): Promise<string[]> {
  try {
    if (quizResults.length === 0) {
      return [];
    }

    const genai = getGenai();
    if (!genai) {
      throw new Error('Gemini API not initialized');
    }
    
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Analyze these quiz results and identify the top 3 weakest topics/skills.

Quiz Results:
${JSON.stringify(quizResults, null, 2)}

Return ONLY a JSON array with 3 topic names as strings, like: ["React Hooks", "TypeScript", "Algorithms"]
Focus on topics where accuracy is lowest or most frequently wrong.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const arrayMatch = responseText.match(/\[[\s\S]*\]/);
    if (!arrayMatch) {
      return [];
    }

    const weakAreas = JSON.parse(arrayMatch[0]);
    return Array.isArray(weakAreas) ? weakAreas : [];
  } catch (error) {
    console.error('Error detecting weak areas:', error);
    return [];
  }
}

/**
 * Generate a personalized study plan based on weak areas
 */
export async function generateStudyPlan(
  weakAreas: string[],
  dailyMinutes: number = 30
): Promise<string> {
  try {
    if (weakAreas.length === 0) {
      return 'Keep practicing to get personalized recommendations!';
    }

    const genai = getGenai();
    if (!genai) {
      throw new Error('Gemini API not initialized');
    }
    
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Create a personalized 7-day interview prep study plan for someone weak in these areas:
${weakAreas.map((a) => `- ${a}`).join('\n')}

Available time: ${dailyMinutes} minutes per day

Provide a structured plan with:
- Daily focus areas
- Estimated time per topic
- Specific practice recommendations
- Resources (topics to research)

Format as a readable, encouraging plan.`;

    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  } catch (error) {
    console.error('Error generating study plan:', error);
    return 'Unable to generate study plan. Please try again.';
  }
}
