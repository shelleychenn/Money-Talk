const router = require('express').Router();
const budgetController = require('./controller.js');

// post endpoint to get new entries and save to database (post)
router.post('/budget', budgetController.post);

// get endpoint to get all entries in the database (getAll)
router.get('/budget', budgetController.getAll);

router.put('/budget/:id', budgetController.update);

// delete endpoint to delete one entry (delete)
router.delete('/budget/:id', budgetController.delete);

module.exports = router;
