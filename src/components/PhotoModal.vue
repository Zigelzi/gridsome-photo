<template>
    <div class="photo-modal">
        <button class="btn btn-close" @click="closeModal">X</button>
        <button class="btn btn-navigator text-white btn-prev"><</button>
        <button class="btn btn-navigator text-white btn-next">></button>
        <div class="photo-modal-container" >
            <div>
                <g-image class="photo modal-photo" :src="photoNode.photo.asset.url" />
                <div class="photo-details">
                    <h2 class="padding-sm mg-0">
                        {{ photoNode.title }}
                    </h2>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    props: {
        photoNode: Object
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    }
}
</script>
<style lang="scss">
.photo-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: rgba(var(--primary-gray-rgb), 0.9);
}

.btn-close {
    position: absolute;
    z-index: 10;
    top: 15px;
    right: 15px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}

.btn-navigator {
    position: absolute;
    top: 50%;
    z-index: 10;
    font-size: 30px;
    background: rgba(var(--primary-gray-rgb), 0.9);
    border-radius: 5px;
    padding: 2px;
}

.btn-prev {
    left: 10px;
}

.btn-next {
    right: 10px;
}

.photo-modal-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.modal-photo {
    max-width: 92vw;
    height: auto;
    min-height: initial !important;
    max-height: 80vh;
}

.photo-details {
    width: 100%;
    text-align: center;
    background: white;
}

</style>