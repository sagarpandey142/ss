require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const languageMap = {
  python: 'python',
  cpp: 'g++',
  c: 'gcc',
  java: 'javac',
  javascript: 'node'
};

app.post('/compile', (req, res) => {
  const { language, code, input } = req.body;
  const lang = languageMap[language];

  if (!lang) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  const uniqueId = uuidv4();
  let fileName;
  let outputFileName;
  let compileCommand;
  let executeCommand;

  switch (language) {
    case 'python':
      fileName = `${uniqueId}.py`;
      compileCommand = null;
      executeCommand = `python "${path.join(tempDir, fileName)}"`;
      break;
    case 'cpp':
      fileName = `${uniqueId}.cpp`;
      outputFileName = `${uniqueId}.exe`;
      compileCommand = `g++ "${path.join(tempDir, fileName)}" -o "${path.join(tempDir, outputFileName)}"`;
      executeCommand = `"${path.join(tempDir, outputFileName)}"`;
      break;
    case 'c':
      fileName = `${uniqueId}.c`;
      outputFileName = `${uniqueId}.exe`;
      compileCommand = `gcc "${path.join(tempDir, fileName)}" -o "${path.join(tempDir, outputFileName)}"`;
      executeCommand = `"${path.join(tempDir, outputFileName)}"`;
      break;
    case 'java':
      fileName = 'Main.java';
      fs.writeFileSync(path.join(tempDir, fileName), code);
      compileCommand = `javac "${path.join(tempDir, fileName)}"`;
      executeCommand = `java -cp "${tempDir}" Main`;
      break;
    case 'javascript':
      fileName = `${uniqueId}.js`;
      compileCommand = null;
      executeCommand = `node "${path.join(tempDir, fileName)}"`;
      break;
    default:
      return res.status(400).json({ error: 'Unsupported language' });
  }

  fs.writeFileSync(path.join(tempDir, fileName), code);

  const command = compileCommand ? `${compileCommand} && ${executeCommand}` : executeCommand;

  console.log('Executing command:', command); // Debugging statement

  exec(command, (error, stdout, stderr) => {
    fs.unlink(path.join(tempDir, fileName), (err) => {
      if (err) console.error('Error removing temporary source file:', err);
    });

    if (outputFileName) {
      fs.unlink(path.join(tempDir, outputFileName), (err) => {
        if (err) console.error('Error removing temporary output file:', err);
      });
    }

    if (error) {
      console.error('Error executing code:', stderr);
      return res.status(500).json({ error: stderr });
    }

    console.log('Output:', stdout); // Debugging statement
    res.json({ result: stdout });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
