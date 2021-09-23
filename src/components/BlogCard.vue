<template>
  <div class="col-md-3">
    <router-link :to="{name: 'Blog', params: {id: blog.id}}" class="selectable">
      <div class="card" style="width: 18rem;">
        <img :src="blog.imgUrl" class="card-img-top" alt="blog picture">
        <div class="card-body">
          <p class="card-text">
            {{ blog.title }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { Blog } from '../model/Blog'
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Pop'
export default {
  props: {
    blog: {
      type: Blog,
      requried: true
    }
  },
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
