<template>
  <no-overscroll-head-layout>
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">是我你爹</ion-title>
      </ion-toolbar>
    </ion-header>
    猜猜他会干什么,他会自己压缩头部变成内容部分,试一试，这个效果仅在IOS上有效果
    <!--遍历二十个内容-->
    <div v-for="i in 50" :key="i">
      {{ i }}
    </div>
  </no-overscroll-head-layout>
</template>
<script setup>
import NoOverscrollHeadLayout from "@/layout/NoOverscrollHeadLayout.vue";
</script>
