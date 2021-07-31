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
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "top-left"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "top"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "top-right"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "left"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "center"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "right"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "bottom-left"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "bottom"
    });
    Vue.createSwipableNotification({
      type: "positive",
      message: "Notifica. Messaggio di prova",
      timeout: 0,
      position: "bottom-right"
    });
  }
};
</script>
