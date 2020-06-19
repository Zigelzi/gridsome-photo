<template>
  <Layout>
    <div class="content">
      <PhotoGallery />
    </div>
  </Layout>
</template>

<script>
import PhotoGallery from "@/components/PhotoGallery";

export default {
  components: {
    PhotoGallery
  },
  metaInfo: {
    title: 'Gallery'
  }
}
</script>

<style lang="scss">
.content {
  width: 100%;
  padding-top: var(--header-height);
}


</style>
