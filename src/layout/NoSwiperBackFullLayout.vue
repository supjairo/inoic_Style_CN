<script setup>
import {
  IonPage,
  IonContent
} from '@ionic/vue';

</script>
<!--禁止右滑动返回-->
<template>
  <ion-page v-disable-swipe-back>
    <ion-content>
      <slot/>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>
