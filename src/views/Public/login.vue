<template>
  <NoSwiperBackFullLayout>
    <IonHeader>
      <IonToolbar>
        <IonTitle>登录</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      Swipe back is disabled on this page<br>
      你可以通过这个页面禁止右滑动返回<br>
      <IonButton @click="goTo">打开登录页</IonButton>
    </IonContent>
  </NoSwiperBackFullLayout>
</template>
<script setup>
import NoSwiperBackFullLayout from "@/layout/NoSwiperBackFullLayout.vue";
import {IonHeader, IonToolbar, IonTitle, IonButton, useIonRouter} from "@ionic/vue";

const router = useIonRouter();

const goTo = () => {
  router.canGoBack() ? router.back() : router.push('/home');
}
</script>

