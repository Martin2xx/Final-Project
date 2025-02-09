import express from 'express';
import Answer from '../models/Answer.js';

const router = express.Router();

router.get('/:questionId', async (req, res) => {
  const { questionId } = req.params;

  try {
    const answers = await Answer.findAll({
      where: {
        question_id: questionId,
      },
    });

    if (answers.length === 0) {
      return res.status(404).json({ message: 'No answers found for this question' });
    }

    res.json(answers); 
  } catch (error) {
    console.error('Error fetching answers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/', async (req, res) => {
  const { question_id, user_id, answer_text } = req.body;

  if (!question_id || !user_id || !answer_text) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const newAnswer = await Answer.create({
      question_id,
      user_id,
      answer_text,
    });

    res.status(201).json({
      id: newAnswer.id,
      question_id,
      user_id,
      answer_text,
    });
  } catch (error) {
    console.error('Error inserting answer:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
