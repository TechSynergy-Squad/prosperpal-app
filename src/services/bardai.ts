import axios from 'axios';
export async function generativeText(prompt: string): Promise<any> {
    const MODEL_NAME = 'models/text-bison-001';
    const API_KEY = 'AIzaSyD3URKWDD3imi6wfHLiJbP29d1WAAZc548';
    const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${API_KEY}`,
        {
            prompt: {
                text: prompt,
            
            },
            model: MODEL_NAME,
            maxOutputTokens: 1024,
            stopSequences: [],
            candidateCount: 1,
            temperature: 0.7,
            topP: 0.95,
            safetySettings: [{ "category": "HARM_CATEGORY_DEROGATORY", "threshold": 1 }, { "category": "HARM_CATEGORY_TOXICITY", "threshold": 1 }, { "category": "HARM_CATEGORY_VIOLENCE", "threshold": 2 }, { "category": "HARM_CATEGORY_SEXUAL", "threshold": 2 }, { "category": "HARM_CATEGORY_MEDICAL", "threshold": 2 }, { "category": "HARM_CATEGORY_DANGEROUS", "threshold": 2 }],
        },
        {
            headers: {
                //Authorization: `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        }
    );
    
    
    return response;
}