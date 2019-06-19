const express = require('express');
const router = express.Router();
//routes
router.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'views/index.html'));
  res.render('index.html', { title: 'Hire it' });
});

router.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'Contact page' });
});

module.exports = router;