<script setup>
import {ref} from 'vue';
import {useAppSystemStore} from "@/store/AppSystemStore.js";
import {IonIcon, IonLabel, IonTabBar, IonTabButton} from "@ionic/vue";
import {playCircle, radio, library, search} from 'ionicons/icons';

const appSystemStore = useAppSystemStore();
const list = ref(appSystemStore.navBarList);


</script>

<template>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home" href="/app/home">
      <ion-icon :icon="playCircle"/>
      <ion-label>首页</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="radio" href="/app/photo">
      <ion-icon :icon="radio"/>
      <ion-label>相册</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="message" href="/app/message">
      <ion-icon :icon="library"/>
      <ion-label>消息</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="mine" href="/app/mine">
      <ion-icon :icon="search"/>
      <ion-label>我的</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<style scoped>

</style>
