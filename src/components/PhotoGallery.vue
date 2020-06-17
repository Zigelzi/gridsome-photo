<template>
    <div class="photo-gallery">
        <div class="photo-container">
            <g-image src="@/assets/images/Huussi.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
            <g-image src="@/assets/images/Kirves.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
          <g-image src="@/assets/images/Tuli.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
            <g-image src="@/assets/images/Viiru1.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
            <g-image src="@/assets/images/Viiru2.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
            <g-image src="@/assets/images/Viiru3.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
            <g-image src="@/assets/images/Viiru4.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
            <g-image src="@/assets/images/Viiru5.jpg" fit="cover" class="photo"/>
        </div>
        <div class="photo-container">
            <g-image src="@/assets/images/Viiru6.jpg" fit="cover" class="photo"/>
        </div>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.photo-gallery {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}

.photo-container {
    height: 40vh;
    flex-grow: 1;
}

.photo {
    max-width: 100%;
    min-height: 100%;
    object-fit: cover;
    vertical-align: bottom;
}
</style>