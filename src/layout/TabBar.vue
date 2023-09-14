<script setup>
import {IonIcon, IonLabel, IonTabBar, IonTabButton} from "@ionic/vue";
import home from '@/assets/tabbar/home.svg'
import mine from '@/assets/tabbar/mine.svg'
import photo from '@/assets/tabbar/album.svg'
import message from '@/assets/tabbar/msg.svg'
import homeActive from '@/assets/tabbar/home_active.svg'
import mineActive from '@/assets/tabbar/mine_active.svg'
import photoActive from '@/assets/tabbar/album_active.svg'
import messageActive from '@/assets/tabbar/msg_active.svg'
import {ref} from "vue";


// onMounted(() => {
//   const el = document.querySelector('ion-tab-bar');
//   el.style.setProperty('--background', '#ffffff');
// })
const currentTab = ref('home')
console.log(currentTab)
</script>

<template>
  <ion-tab-bar
      :_tabs-will-change="(event) => {currentTab = event}"
      translucent
      slot="bottom">
    <ion-tab-button
        tab="home" href="/app/home">
      <!--      selected判断-->
      <ion-icon :icon="currentTab === 'home' ? homeActive : home"/>
      <ion-label>首页</ion-label>
    </ion-tab-button>
    <ion-tab-button tab="photo" href="/app/photo">
      <ion-icon :icon="currentTab === 'photo' ? photoActive : photo"/>
      <ion-label>相册</ion-label>
    </ion-tab-button>

    <ion-tab-button
        selected
        tab="message" href="/app/message">
      <ion-icon :icon="currentTab === 'message' ? messageActive : message"/>
      <ion-label>消息</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="mine" href="/app/mine">
      <ion-icon :icon="currentTab === 'mine' ? mineActive : mine"/>
      <ion-label>我的</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<style scoped>
ion-tab-bar {
  --background: #ffffff;
  --border: none;
}
</style>
