<template>
  <div class="blog container-fluid">
    <div class="row">
      <div class="col-md-3">
        <BlogCard v-for="b in blogs" :key="b.id" :blog="b" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
export default {
  name: 'BlogsPage',
  setup() {
    onMounted(async() => {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>
