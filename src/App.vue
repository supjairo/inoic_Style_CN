<template>
  <ion-app>
    <!--    <router-view/>-->
    <ion-router-outlet
        :animated="true"
        mode="ios"/>
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import AppLayout from "@/layout/AppLayout.vue";
</script>
