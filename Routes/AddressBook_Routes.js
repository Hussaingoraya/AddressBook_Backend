const addressModels = require("../Controllers/addressbook_controllers");
const express = require("express");
const router = express.Router();

router.get("/", addressModels.getAddressBook);
router.post("/", addressModels.postAddressBook);
router.put("/:id", addressModels.updateAddressBook);
router.delete("/:id", addressModels.deleteAddressBook);

module.exports = router;
