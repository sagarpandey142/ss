const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Example in-memory storage for slots
const slots = [];

app.use(bodyParser.json());

// API to list available slots
app.get('/slots', (req, res) => {
  res.json(slots);
});

// API to create a slot
app.post('/slots', (req, res) => {
  const { date, start, end } = req.body;

  // Check if the slot already exists
  const existingSlot = slots.find(
    (slot) =>
      slot.date === date &&
      ((slot.start <= start && slot.end >= start) ||
        (slot.start <= end && slot.end >= end) ||
        (slot.start >= start && slot.end <= end))
  );

  if (existingSlot) {
    return res.status(400).json({ error: 'Slot already exists for this time' });
  }

  // Check for overlapping slots
  const overlappingSlot = slots.find(
    (slot) =>
      slot.date === date &&
      ((slot.start <= start && slot.end >= start) ||
        (slot.start <= end && slot.end >= end) ||
        (slot.start >= start && slot.end <= end))
  );

  if (overlappingSlot) {
    return res.status(400).json({ error: 'Slot time overlaps with an existing slot' });
  }

  // Save the slot
  slots.push({ date, start, end });

  res.json({ success: true, message: 'Slot created successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
