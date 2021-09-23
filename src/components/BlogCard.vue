<template>
  <div class="col-md-3">
    <router-link :to="{name: 'Blog', params: {id: blog.id}}" class="selectable">
      <div class="card" style="width: 18rem;">
        <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == blog.creatorId">
          <i class="mdi mdi-close text-danger f-20 selectable" @click="deleteBlog()">
          </i>
        </div>
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
import { computed } from '@vue/runtime-core'
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  props: {
    blog: {
      type: Object,
      requried: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async deleteBlog() {
        try {
          if (await Pop.confirm) {
            await blogsService.deleteBlog(props.blog.id)
            Pop.toast('deleted!!!', 'success')
          }
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
