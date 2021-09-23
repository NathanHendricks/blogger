<template>
  <div class="posty bg-dark">
    <div class="col-md-12 justify-content-center text-light text-center scrollable-y">
      <img :src="blog.imgUrl" class="post-img" alt="">
      <h1>{{ blog.title }}</h1>
      <div class="row">
        <div class="col-md-6 m-auto">
          <p>{{ blog.body }}</p>
        </div>
      </div>
      <cite>{{ blog.creator.name }}</cite>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      blog: computed(() => AppState.blog)
    }
  }

}
</script>

<style scoped lang='scss'>
.posty {
    height: 80vh;
}
.post-img {
    height: 30vh;
}

</style>
