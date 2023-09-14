<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :forceOverscroll="false" class="ion-padding">
      <slot/>
    </ion-content>
  </ion-page>
</template>
<script setup>
import {IonPage, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';


</script>
