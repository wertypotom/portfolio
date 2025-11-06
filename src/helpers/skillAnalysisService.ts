const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY
const ANTHROPIC_API_URL = 'https://routellm.abacus.ai/v1/chat/completions'

export interface SkillAnalysisResponse {
  analysis: string
}

export const analyzeSkillUsage = async (
  skill: string,
  resumeText: string,
  signal?: AbortSignal
): Promise<SkillAnalysisResponse> => {
  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ANTHROPIC_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-5',
      messages: [
        {
          role: 'user',
          content: `You are a Hiring Manager specializng in hiring Software Developers. You have more than 10 years of experience analyzing resume of candidates. Given a resume and a target skill (${skill}), examine the resume text (${resumeText}) and produce a single, simple text answer describing how the candidate used that skill.

          Rules:
          1. Focus first on the EXPERIENCE section:
            - If the skill is used in EXPERIENCE, either:
              a) If the existing resume line already begins with a strong action verb and includes a measurable result, leave it as-is (output that line verbatim, edited only for punctuation), or
              b) Otherwise convert the experience into a single powerful sentence in this format:
                - Start with a strong action verb (e.g., Developed, Led, Implemented, Optimized, Reduced).
                - Briefly describe the project/task and the candidate's role and technologies used.
                - End with a measurable outcome (use resume numbers if present). Do NOT invent numeric values. If no numbers are provided, use a concise, supported impact phrase (e.g., improved performance, reduced latency).
            - If multiple EXPERIENCE examples exist, combine them into paragraph of coheisve and coherent text, indicating where and at which scenarios skills was used.

          2. If the skill is NOT in EXPERIENCE but appears elsewhere (Projects, Education, Skills):
            - Say briefly that it was not used in professional EXPERIENCE but was used in [section name] for a [brief project/experiment description].
            - Convert that project/experiment into the powerful one-sentence format above when possible.
            - Add one short statement: "Open to applying this in professional work; I enjoy learning new technologies."
            - do not invent facts

          3. If the skill is not present anywhere in the resume:
            - Give one concise transferable-skill suggestion (identify 1–2 related skills/technologies from the resume that transfer), and
            - Add a single short sentence: "Always ready to learn — I welcome new challenges."

          4. Output constraints:
            - Output only plain text (no headings, lists, or extra commentary).
            - Return 1 sentence when EXPERIENCE example exists; 1–2 short sentences for the other two cases.
            - Use only details present in the resume; do NOT invent numbers, employers, or outcomes.
            - Choose strong action verbs and concise, active phrasing.
            - Keep each sentence clear and ≤ ~40 words.

          5. Keep the tone professional, but conversational. Add pronouns to indicate what you did. Start with "I". Don't make it look like it was line from resume, but rather I am talking to another person and presenting him my experience.

          Examlpe output: "I built and maintained 48+ end-to-end tests using Playwright. I achieved 80% test coverage and improved release stability across critical user flows."

          Resume:
          ${resumeText}`,
        },
      ],
    }),
    signal,
  })

  if (!response.ok) {
    throw new Error('Failed to analyze skill usage')
  }

  const data = await response.json()

  return {
    analysis: data.choices[0].message.content,
  }
}
