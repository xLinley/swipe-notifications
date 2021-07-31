# Swipeable Notifications

This extension adds swipe capabilities to notifications created by using $q.notify.
* Quasar v1.* required
* Vue.Js v2 required
* Hammer.Js (will be auto-installed once the extension is added)

# Usage

Add the extension through the Quasar CLI, once done you can use the extension simply by calling

```js
import Vue from "vue";

Vue.createSwipeableNotification({
	...
});
```

Keep in mind that <b>you must pass an object</b> containing the properties you want the $q.notify method to use, for example:

```js
import Vue from "vue";

Vue.createSwipeableNotification({
	type: "positive",
	message: "Test notification",
	position: "top-left"
});
```

You can find the full list of available properties here: https://v1.quasar.dev/quasar-plugins/notify#notify-api

# Swipe notes:

The swipe direction is based on the notification position, in particular:

* Top notifications (top-left / top / top-right): swipe up
* Middle notifications (left / center / right): both swipe up and swipe down
* Bottom notifications (bottom-left / bottom / bottom-right): swipe down

This is due to how Quasar manages the fade out transition, it gets kind of complicated to manage and edit it; more options might get added in future