<template>
  <ion-page v-disable-swipe-back>
    <ion-content>
      <ion-button @click="goTo">跳转</ion-button>
    </ion-content>
  </ion-page>
</template>
<script setup>
import FullLayout from "@/layout/FullLayout.vue";
import {useIonRouter, IonPage, IonContent, createGesture, IonButton} from "@ionic/vue";
import {onMounted, ref} from "vue";

const router = useIonRouter();
const goTo = () => {
  router.push('/login');
}

const page = ref(null);
onMounted(() => {
  console.log(createGesture)
});
</script>

