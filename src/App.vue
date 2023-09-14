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
<style>
/*这里定义了全局不允许长按避免长按选中文字*/
*
:not(input)
:not(textarea) {
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
}
</style>
