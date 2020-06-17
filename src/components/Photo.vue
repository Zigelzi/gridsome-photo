<template>
    <figure class="photo-container">
        <g-image src="@/assets/images/Huussi.jpg" class="photo"/>
        <figcaption class="photo-description" >Description for the image</figcaption>
    </figure>
</template>

<style lang="scss" scoped >
figure {
    margin: 0;
    position: relative;
}
.photo-container {
    width: 100%;
}


.photo-description {
    position: absolute;
    bottom: 0;
    left: 20px;
}
</style>

<script>
export default {
    props: {
        imgSrc: String
    }
}
</script>