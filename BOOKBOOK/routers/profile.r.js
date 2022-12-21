const app = require("express");
const upload_avt = require("../uploads/storage").upload_avt;
const router = app.Router();
const userActionC = require("../controllers/userAction.c");

router
  .route("/")
  .all(userActionC.checkPermission)
  .get(userActionC.handleMyProfile, userActionC.handleOtherProfile)
  .post(
    upload_avt.single("avatar"),
    userActionC.updateProfile,
    userActionC.handleMyProfile
  );

module.exports = router;
