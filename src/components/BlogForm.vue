<template>
  <form @submit.prevent="createPost()">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text"
             class="form-control bg-light"
             name="title"
             placeholder="Title...."
             v-model="editable.title"
             required
      >
    </div>
    <div class="form-group">
      <label for="title">Img Url</label>
      <input type="text"
             class="form-control bg-light"
             name="imgUrl"
             placeholder="Img Url...."
             v-model="editable.imgUrl"
             required
      >
    </div>
    <div class="form-group">
      <label for="title">body</label>
      <input type="text"
             class="form-control bg-light"
             name="body"
             placeholder="body...."
             v-model="editable.body"
      >
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-success mt-2">
        Make Post
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { blogsService } from '../services/BlogsService'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createPost() {
        try {
          await blogsService.createPost(editable.value)
          editable.value = {}

          const modal = Modal.getInstance(document.getElementById('make-post'))
          modal.hide()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }

}
</script>

<style>

</style>
