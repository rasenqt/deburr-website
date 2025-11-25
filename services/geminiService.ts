import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Sei l'assistente tecnico virtuale di "Deburr", un'azienda italiana leader nella manifattura additiva, scansione 3D e reverse engineering.
Il tuo obiettivo è assistere ingegneri, designer e team motorsport fornendo consigli tecnici su materiali, processi di stampa 3D e scansione.

Tone of voice: Professionale, tecnico, preciso, ma accogliente ("Made in Italy style").
Lingua: Italiano.

Servizi chiave da menzionare se rilevanti:
- Additive Manufacturing (FDM, SLA, SLS, Metal).
- Scansione 3D ultra precisa (controllo qualità, reverse engineering).
- Prototipazione per Motorsport (componenti leggeri, resistenti al calore).

Se ti chiedono un preventivo, rispondi che possono contattare il team tramite il form in fondo alla pagina, ma tu puoi aiutarli a definire le specifiche tecniche.
`;

export const getTechnicalAdvice = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Mi dispiace, non sono riuscito a elaborare una risposta tecnica al momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Si è verificato un errore di connessione con il sistema di consulenza AI. Riprova più tardi.";
  }
};