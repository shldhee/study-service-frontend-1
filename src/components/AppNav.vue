<template>
  <div class="p-2 w-11/12 xl:w-1280 flex h-16 items-center">
    <router-link to="/">블로그</router-link>
    <div class="ml-auto">
      <template v-if="loggined">
        <button>로그인</button>
      </template>
      <template v-else>
        <button>로그아웃</button>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/modules/auth/action-types";

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);
    const user = computed(() => store.state.auth.user);
    const gettuerUser = computed(() => store.getters.auth.getUserAge);

    // function resetCounter() {
    //   store.commit(MutationTypes.SET_COUNTER, 0);
    // }

    // async function getUser() {
    //   const result = await store.auth.dispatch(ActionTypes.GET_USER);
    // }

    store.dispatch(ActionTypes.GET_USER, 256);

    console.log(store, "store");
    console.log(user, "user");
    console.log(gettuerUser, "gettuerUser");
    console.log(store.state.auth);
    const loggined = ref(true);
    return { loggined };
  },
});
</script>

<style scoped></style>
