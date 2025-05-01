const router = require("express").Router();

const serviceController = require("../controllers/serviceController");
// Service router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

// Parties routes
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;
