<template>
  <ion-page>
    这事首页
    <ion-button @click="goTo">跳转</ion-button>
  </ion-page>
</template>

<script setup>
import {IonPage, IonButton} from '@ionic/vue';
import {useIonRouter} from "@ionic/vue";

const router = useIonRouter();
const goTo = () => {
  router.push('/login');
}
</script>
