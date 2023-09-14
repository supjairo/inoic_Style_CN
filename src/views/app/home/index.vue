<template xmlns="http://www.w3.org/1999/html">
  <full-layout>
    <div class="ion-padding">

    </div>
    <div class="ion-padding">

    </div>
    <div class="ion-padding">

    </div>
    FullLayout<br>
    <span
        v-touch:press="handle"
    >
    如图所见，这是一个全屏幕布局，但是没有头部，没有底部，没有滚动条，没有滑动返回，没有下拉刷新，没有上拉加载，没有侧边栏，没有Tab栏，没有导航栏，没有标题栏，没有工具栏，没有工具栏按钮，没有工具栏标题
      </span>
    <!--    -->
    <ion-button
        @click="goLogin"
    >
      登陆页面
    </ion-button>
  </full-layout>
</template>
<script setup>
import FullLayout from "@/layout/FullLayout.vue";
import {IonButton, useIonRouter, IonTitle} from "@ionic/vue";

const handle = () => {
  console.log('handle')
}

const router = useIonRouter()
const goLogin = () => {
  router.push('/login')
}
</script>
