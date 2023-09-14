<template>
  <!--全局用布局组件-->
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <tab-bar></tab-bar>
    </ion-tabs>
  </ion-page>
</template>
<script setup>
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
} from '@ionic/vue';
import TabBar from "@/layout/TabBar.vue";

</script>
