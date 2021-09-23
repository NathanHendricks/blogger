<template>
  <div class="container">
    <div class="blog-header" v-if="blog">
      <div class="row blog-img">
        <BlogPost />
      </div>
    </div>
    <div v-else>
      <h4>
        ....Loading
      </h4>
    </div>
    <!-- TODO finish the Comments -->
    <!-- <div class="row">
      <BlogComments v-for="bc in blog" :key="bc.id" :blog="bc" />
    </div>
    <div class="row">
      <h3> no comments ..... </h3>
    </div> -->
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  setup() {
    const route = useRoute()
    async function getBlog() {
      try {
        await blogsService.getBlog(route.params.id)
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        getBlog()
      }
    })
    return {
      blogs: computed(() => AppState.blogs),
      blog: computed(() => AppState.blog)
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-img {
    height: 66vh;
}
</style>
