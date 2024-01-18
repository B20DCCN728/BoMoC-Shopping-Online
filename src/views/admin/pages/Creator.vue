<script setup>
import { ref, onMounted } from 'vue';
import ContentEditor from '../../../components/ckeditors/ContentEditor.vue';

const isLoading = ref(true);

onMounted(() => {
    // Simulate an asynchronous operation, like fetching data
    setTimeout(() => {
      // Set loading to false once the data is loaded
      isLoading.value = false;
    }, 2000); // Simulated 2-second delay
})

</script>

<template>
    <a-spin v-if="isLoading" size="large" tip="Waiting..." />
    <content-editor v-else />
    <div>ok</div>
</template>