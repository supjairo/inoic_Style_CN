<template>
  <app-layout>
    <template #content="{page}">
      <ion-button id="open-modal" @click="openModal(page)" expand="block">打开</ion-button>
      <ion-modal ref="modal" trigger="open-modal" :can-dismiss="canDismiss" :presenting-element="presentingElement">
        <ion-header>
          <ion-toolbar>
            <ion-title>👋用户协议</ion-title>
            <ion-buttons slot="end">
              <ion-button @click="dismiss()">
                {{ canDismiss ? '同意' : '不给用' }}
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <p class="ion-padding-horizontal">
            你必须同意此条款才能继续使用我们的服务。
          </p>
          <ion-item>
            <ion-label class="ion-text-wrap" for="terms">是否🙆同意?</ion-label>
            <ion-checkbox id="terms" @ionChange="onTermsChanged" :checked="canDismiss"></ion-checkbox>
          </ion-item>
        </ion-content>
      </ion-modal>
    </template>
  </app-layout>
</template>

<script setup>
import AppLayout from "@/layout/AppLayout.vue";
import {inject, onMounted, onUpdated, ref, watch} from "vue";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonPage,
} from '@ionic/vue';

const presentingElement = ref()
const modal = ref(null)

const page = ref(null);
const canDismiss = ref(false);


const openModal = (value) => {
  presentingElement.value = value.$el;
}
const dismiss = () => {
  modal.value.$el.dismiss();
}

const onTermsChanged = (ev) => {
  canDismiss.value = ev.detail.checked;
}
</script>
