const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: './server/.env' });
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Function to extract JSON-like objects from the portfolio.ts file
const extractObject = (fileContent, objectName) => {
  const regex = new RegExp(`export const ${objectName}(?::\\s*\\w+\\[\\])?\\s*=\\s*([\\s\\S]*?);\\n`);
  const match = fileContent.match(regex);
  if (match && match[1]) {
    // This is a hacky way to make it valid JSON. It's not robust.
    // It assumes the object is well-formed and doesn't contain semicolons in strings.
    let objectString = match[1].trim();
    // Remove trailing commas
    objectString = objectString.replace(/,(\s*[}\]])/g, '$1');
    // Replace single quotes with double quotes if any
    // Note: This is a simplified replacement and might fail on complex objects
    // objectString = objectString.replace(/'/g, '"');
    try {
      // A more robust way would be to use a proper parser, but for this specific file structure,
      // we can try to evaluate it in a sandboxed environment.
      // Using eval is dangerous, but in this controlled server-side environment,
      // where we control the input file, it's a pragmatic choice.
      const evaluated = new Function(`return ${objectString}`)();
      return JSON.stringify(evaluated);
    } catch (e) {
      console.error(`Error parsing ${objectName}:`, e);
      return null;
    }
  }
  return null;
};

const portfolioFilePath = path.join(__dirname, '..', 'src', 'data', 'portfolio.ts');
const portfolioFileContent = fs.readFileSync(portfolioFilePath, 'utf8');

const personalInfo = extractObject(portfolioFileContent, 'personalInfo');
const projects = extractObject(portfolioFileContent, 'projects');
const experience = extractObject(portfolioFileContent, 'experience');
const education = extractObject(portfolioFileContent, 'education');
const skills = extractObject(portfolioFileContent, 'skills');
const blogPosts = extractObject(portfolioFileContent, 'blogPosts');


const ragContext = `
  PersonalInfo: ${personalInfo},
  Projects: ${projects},
  Experience: ${experience},
  Education: ${education},
  Skills: ${skills},
  BlogPosts: ${blogPosts}
`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const modelName = 'gemini-1.5-flash';
    console.log(`Using model: ${modelName}`); // Debugging line
    const model = genAI.getGenerativeModel({ model: modelName });

    const prompt = `Based on the following information about Mohith Gowda, answer the user's question.
    Context: ${ragContext}
    Question: ${message}
    Answer:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
