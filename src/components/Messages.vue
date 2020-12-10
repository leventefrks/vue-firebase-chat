<template>
  <div
    class="flex flex-col h-full my-2 w-96 bg-white px-4 py-6 shadow-xl rounded-md"
  >
    <div class="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
      <div
        class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100"
      ></div>
      <div class="flex flex-col ml-3">
        <div class="font-semibold text-sm">Vuejs & Firebase</div>
        <div class="text-xs text-gray-500">Tutorial</div>
      </div>
      <div class="ml-auto">
        <ul class="flex flex-row items-center space-x-2">
          <li>
            <a
              href="#"
              class="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
            >
              <span>
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="container"
      class="w-full flex-auto overflow-hidden flex flex-col pr-1 overflow-y-scroll"
    >
      <div v-for="message in messages" class="pt-2 py-4">
        <div class="h-full overflow-y-auto">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-start-6 col-end-13 p-1 rounded-lg">
              <div class="flex items-center justify-start flex-row-reverse">
                <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white flex-shrink-0"
                >
                  {{ message.nickname }}
                </div>
                <div
                  class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                >
                  <div>{{ message.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form class="flex flex-row items-center" @submit.prevent="storeMessage">
      <div
        class="flex flex-row items-center w-full border rounded-3xl h-12 px-2"
      >
        <span
          class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
            ></path>
          </svg>
        </span>
        <div class="w-full">
          <input
            type="text"
            class="border border-transparent w-full
          focus:outline-none text-sm h-10 flex items-center"
            placeholder="Type your message...."
            v-model="currentMessage"
          />
        </div>
        <div class="flex flex-row">
          <span class="flex items-center justify-center h-10 w-8 text-gray-400">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              ></path>
            </svg>
          </span>
          <span
            class="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div class="ml-6">
        <button
          class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white"
        >
          <svg
            class="w-5 h-5 transform rotate-90 -mr-px"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Messages",

  data() {
    return {
      messages: [],
      currentMessage: "",
      nickname: "You",
      database: firebase.database()
    };
  },

  created() {
    this.database.ref("messages").on("child_added", snapshot => {
      this.messages.push(snapshot.val());
    });
  },

  methods: {
    storeMessage() {
      if (!this.currentMessage) return;
      this.database
        .ref("messages")
        .push()
        .set({ text: this.currentMessage, nickname: this.nickname });

      this.currentMessage = "";
      this.updateScroll();
    },

    updateScroll(e) {
      const container = document.getElementById("container");
      container.scrollTop = container.scrollHeight;
    }
  }
};
</script>
