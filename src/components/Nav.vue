<template>
    <nav class="nav">
        <g-link class="nav__link" to="/test">Gallery</g-link>
        <g-link class="nav__link" to="/">About</g-link>
        <g-link class="nav__link" to="/">Contact</g-link>
    </nav>
</template>
<style lang="scss">
.nav {
    display: flex;
    justify-content: space-around;
    padding: 10px;
}

.nav__link {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--primary-gray);

    transition: color, .2s, ease-in-out;

    &:visited {
        color: var(--secondary-navy);
    }

    &:hover {
        color: var(--secondary-red);
    }
}
</style>