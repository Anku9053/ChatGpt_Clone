// const { Configuration, OpenAIApi } = require("openai");
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const configuration = new Configuration({
//   apiKey: "",
// });
// const openai = new OpenAIApi(configuration);

// const port = 4000;

// app.post("/", async (req, res) => {
//   const { message } = req.body;
//   console.log("Received message:", message);

//   try {
//     const response = await openai.createCompletion({
//       model: "gpt-3.5-turbo",
//       prompt: `${message}`,
//       max_tokens: 100,
//       temperature: 0.5,
//     });

//     console.log("OpenAI API Response:", response.data);

//     res.json({
//       message: response.data.choices[0].text,
//     });
//   } catch (error) {
//     console.error("OpenAI API Error:", error.message);
//     res.status(500).json({
//       error: "Something went wrong with the AI model.",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// 

// const { Configuration, OpenAIApi } = require("openai");
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const configuration = new Configuration({
//   apiKey: "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", // Replace with your OpenAI API key
// });
// const openai = new OpenAIApi(configuration);

// const port = 4000;

// app.post("/chat", async (req, res) => {
//   const { question } = req.body;
//   console.log("Received question:", question);

//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: question,
//       max_tokens: 40,
//       temperature: 0,
//     });

//     console.log("OpenAI API Response:", response.data);

//     const answer = response?.data?.choices?.[0]?.text;
//     const array = answer
//       ?.split("\n")
//       .filter((value) => value)
//       .map((value) => value.trim());

//     res.json({
//       answer: array,
//       prompt: question,
//     });
//   } catch (error) {
//     console.error("OpenAI API Error:", error.message);
//     res.status(500).json({
//       error: "Something went wrong with the AI model.",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// const { Configuration, OpenAIApi } = require("openai");
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const configuration = new Configuration({
//   apiKey: "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", // Replace with your OpenAI API key
// });
// const openai = new OpenAIApi(configuration);

// const port = 4000;

// app.post("/chat", async (req, res) => {
//   const { question } = req.body;
//   console.log("Received question:", question);

//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: question,
//       max_tokens: 100,
//       temperature: 0.5,
//     });

//     console.log("OpenAI API Response:", response.data);

//     if (!response.data || !response.data.choices || !response.data.choices[0]) {
//       throw new Error("Invalid API response");
//     }

//     const answer = response.data.choices[0].text;
//     const array = answer.split("\n").filter((value) => value).map((value) => value.trim());

//     res.json({
//       answer: array,
//       prompt: question,
//     });
//   } catch (error) {
//     console.error("OpenAI API Error:", error.message);
//     res.status(500).json({
//       error: "Something went wrong with the AI model.",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


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

app.post("/chat", async (req, res) => {
  const { question } = req.body;
  console.log("Received question:", question);

  try {
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
