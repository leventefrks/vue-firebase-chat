<template>
  <div id="app">
    <main
      class="w-full h-screen flex flex-col items-center py-8 md:px-0 px-2 bg-purple-200"
    >
      <messages />
    </main>
  </div>
</template>

<script>
import Messages from "./components/Messages";

export default {
  name: "App",
  components: {
    Messages
  }
};
</script>
