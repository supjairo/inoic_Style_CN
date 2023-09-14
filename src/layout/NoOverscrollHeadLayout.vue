<template>
  <ion-page>
    <ion-header
        translucent
        class="ion-no-border">
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :forceOverscroll="false" class="ion-padding">
      <slot/>
    </ion-content>
  </ion-page>
</template>
<script setup>
import {IonPage, IonContent, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';


</script>
