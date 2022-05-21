const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const thoughRoutes = require('./api/thoughtRoutes');

router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughRoutes);

module.exports = router;