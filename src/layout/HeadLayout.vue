<script setup>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar
} from '@ionic/vue';

</script>
<!--有头部的布局-->
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        这里是头部
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot/>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>
