<template>
  <div class="p-2 w-11/12 xl:w-1280 flex h-16 items-center">
    <router-link to="/">블로그</router-link>
    <template v-if="loggined">
      <button>로그인</button>
    </template>
    <template v-else>
      <button>로그아웃</button>
    </template>
    <div>
      <hr />
      <h1>currentUser : {{ currentUser }}</h1>
      <h1>welcomeUser : {{ welcomeUser }}</h1>
      <button class="btn" @click="resetUser">
        Reset User
      </button>
      <button class="btn" @click="setUsername('lalala')">
        Set Username
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import { useStore } from "@/use/useStore";
import { AllMutationTypes } from "@/store/mutation-types";
import { AllActionTypes } from "@/store/action-types";

export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);
    const currentUser = computed(() => store.getters.currentUser);
    const welcomeUser = computed(() => store.getters.welcomeUser);
    const isRootDispatchSet = computed(() => store.getters.getRootDispatch);

    function resetUser() {
      store.commit(AllMutationTypes.RESET_USER);
    }
    function setUsername() {
      store.dispatch(AllActionTypes.SET_USER_DISPATCH, "kim");
    }

    function setRootDispatch() {
      store.dispatch(AllActionTypes.USER_CHECK);
    }
    async function getCounter() {
      await store.dispatch(AllActionTypes.GET_COUNTER, 100);
    }

    // function crossCounterDispatch() {
    //   store.dispatch(AllActionTypes.CALL_COUNTER1);
    // }

    const loggined = ref(true);
    return {
      currentUser,
      welcomeUser,
      resetUser,
      getCounter,
      setRootDispatch,
      isRootDispatchSet,
      setUsername,
      loggined
      // crossCounterDispatch
    };
  }
});
</script>

<style scoped></style>
