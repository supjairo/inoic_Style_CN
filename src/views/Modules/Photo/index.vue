<template>
  <app-layout>
    <template #content="{page}">
      <ion-button @click="goMsg">
        跳转到消息
      </ion-button>
    </template>
  </app-layout>
</template>

<script setup>
import {IonPage, IonButton, IonContent, IonToolbar} from "@ionic/vue";
import {useRouter} from "vue-router";
import {useIonRouter} from "@ionic/vue";
import AppLayout from "@/layout/AppLayout.vue";

const router = useRouter();
const goMsg = () => {
  console.log('goMsg')
  router.push('/message')
}
</script>
