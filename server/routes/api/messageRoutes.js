const router = require('express').Router();
const {
  getSingleMessage,
  getMessages,
  createMessage,
} = require('../../controllers/messageController');

router.route('/').get(getMessages).post(createMessage);

router.route('/:messageId').get(getSingleMessage);

module.exports = router;