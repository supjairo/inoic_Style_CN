<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar>
        <ion-title>App布局Frame</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot name="content" :page="page"/>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRouterOutlet} from '@ionic/vue';
import {ref} from "vue";

const page = ref(null);
</script>
