import { Notify } from "quasar";
import Hammer from "hammerjs";

export default {
  // called by Vue.use(SwipeNotificationsPlugin)
  install(Vue, options) {
    Vue.createSwipeableNotification = function (notificationParameters) {
      // Create random id so that we know which one we have to apply hammer to
      const notificationId = "q-notif-" + Math.floor(Math.random() * 100000).toString();
      // If no attrs property was supplied, initialize it
      if (!notificationParameters.attrs) {
        notificationParameters.attrs = {};
      }
      notificationParameters.attrs.id = notificationId;
      // If no position is specified then manually add it
      if (!notificationParameters.position) {
        notificationParameters.position = "bottom";
      }
      let notification = Notify.create(notificationParameters);
      // Delay because the notification doesn't get created immediately
      setTimeout(() => {
        const el = document.getElementById(notificationId);
        const swipeManager = new Hammer(el);
        // Enable all swipes directions
        swipeManager.get("swipe").set({ direction: Hammer.DIRECTION_ALL });
        switch (notificationParameters.position) {
          case "top-left":
          case "top":
          case "top-right":
            swipeManager.on("swipeup", (ev) => {
              // Close the notification
              notification();
            });
            break;
          case "left":
          case "right":
            swipeManager.on("swipeup swipedown", (ev) => {
              // Close the notification
              notification();
            });
            break;
          case "center":
            swipeManager.on("swipeup", (ev) => {
              // Close the notification
              notification();
            });
            break;
          case "bottom-left":
          case "bottom":
          case "bottom-right":
            swipeManager.on("swipedown", (ev) => {
              // Close the notification
              notification();
            });
            break;
          default:
            swipeManager.on("swipe", (ev) => {
              // Close the notification
              notification();
            });
            break;
        }
      }, 250);
    };
  },
};
