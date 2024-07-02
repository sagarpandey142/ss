const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const languageMap = {
  python: 'python',
  cpp: 'cpp',
  c: 'c',
  java: 'java',
  javascript: 'node'
};

app.post('/compile', (req, res) => {
  const { language, code, input } = req.body;
  const lang = languageMap[language];

  if (!lang) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  const fileName = `temp.${lang}`;
  const filePath = path.join(tempDir, fileName);

  fs.writeFileSync(filePath, code);

  let command;
  switch (lang) {
    case 'python':
      command = `python ${filePath}`;
      break;
    case 'cpp':
      command = `g++ ${filePath} -o ${tempDir}/a.out && ${tempDir}/a.out`;
      break;
    case 'c':
      command = `gcc ${filePath} -o ${tempDir}/a.out && ${tempDir}/a.out`;
      break;
    case 'java':
      command = `javac ${filePath} && java -cp ${tempDir} ${path.parse(fileName).name}`;
      break;
    case 'javascript':
      command = `node ${filePath}`;
      break;
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Error compiling code:', error);
      res.status(500).json({ error: stderr });
    } else {
      res.json({ result: stdout });
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on http://127.0.0.1:5000');
});
