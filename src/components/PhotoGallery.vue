<template>
    <div class="photo-gallery">
        <div class="photo-container" v-for="(edge, index) in $static.photos.edges" :key="index" @click="openPhoto(index)">
            <g-image class="photo" :src="edge.node.photo.asset.url" />
        </div>
        <PhotoModal v-if="modalIsOpen" @closeModal="hideModal" :photoNodes="$static.photos.edges" :photoIndex="photoIndex" />
    </div>
</template>
<static-query>
query {
  photos:allSanityPhoto {
    edges {
      node {
        id
        title
        photo {
          asset {
            url
          }
        }
      }
    }
  }
}
</static-query>

<script>
import PhotoModal from "@/components/PhotoModal";

export default {
    components: {
        PhotoModal
    },
    data() {
        return {
            photoIndex: 0,
            modalIsOpen: false
        }
    },
    methods: {
        openPhoto(index) {
            this.photoIndex = index;
            this.showModal();
        },
        showModal() {
            this.modalIsOpen = true;
        },
        hideModal() {
            this.modalIsOpen = false;
        }
    }
}
</script>
<style lang="scss">
.photo-gallery {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.photo-container {
    flex-grow: 1;
    flex-basis: 49%;
    margin-right: 1%;
    margin-bottom: 1%;
    min-width: 250px;
}

.photo {
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
}
</style>