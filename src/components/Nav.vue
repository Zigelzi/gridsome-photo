<template>
    <nav class="nav">
        <g-link class="nav__link" to="/">Gallery</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
    </nav>
</template>
<style lang="scss">
.nav {
    display: flex;
    justify-content: space-around;
    padding: 10px;

    .active--exact {
        color: var(--secondary-red);
    }
}

.nav__link {
    text-transform: uppercase;
}


</style>

<script>
export default {
    
}
</script>