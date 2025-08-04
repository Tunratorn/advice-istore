<template>
  <iframe
    ref="iframe"
    src="/html/compare_mac/index.html"
    width="100%"
    frameborder="0"
  ></iframe>
</template>

<script setup>
const iframe = ref(null);

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'setHeight' && iframe.value) {
      iframe.value.style.height = `${event.data.height}px`;
    }
  });
});
</script>
