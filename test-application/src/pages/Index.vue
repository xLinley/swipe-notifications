<template>
  <div>
    Test
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "PageIndex",
  mounted() {
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "top-left"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "top"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "top-right"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "left"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "center"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "right"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "bottom-left"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "bottom"
    });
    Vue.createSwipeableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "bottom-right"
    });
  }
};
</script>
