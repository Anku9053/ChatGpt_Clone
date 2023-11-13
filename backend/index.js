const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: "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", 
});
const openai = new OpenAIApi(configuration);

const port = 4000;

const chatSessions = {}; // Store chat sessions by a unique identifier

app.post("/chat", async (req, res) => {
  const { sessionId, question } = req.body;
  console.log("Received question:", question);

  try {
    if (!chatSessions[sessionId]) {
      chatSessions[sessionId] = [];
    }

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 100,
      temperature: 0.5,
    });

    console.log("OpenAI API Response:", response.data);

    if (!response.data || !response.data.choices || !response.data.choices[0]) {
      throw new Error("Invalid API response");
    }

    const answer = response.data.choices[0].text;
    const array = answer.split("\n").filter((value) => value).map((value) => value.trim());

    chatSessions[sessionId].push({ question, answer });

    res.json({
      answer: array,
      prompt: question,
    });
  } catch (error) {
    console.error("OpenAI API Error:", error.message);
    res.status(500).json({
      error: "Something went wrong with the AI model.",
    });
  }
});

app.get("/chat/:sessionId", (req, res) => {
  const sessionId = req.params.sessionId;
  if (chatSessions[sessionId]) {
    res.json(chatSessions[sessionId]);
  } else {
    res.status(404).json({
      error: "Chat session not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
