<template>
  <div>
    <header class="header">
      <div class="main-title">
        <h1><span class="text-light">Miika</span>Savela</h1>
        <h2 class="text-small highlight-red">Photography</h2>
      </div>
      <Navigation />
    </header>
    <div class="layout">
      <div class="content">
      <slot/>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.layout {
  
}

.header {
  position: fixed;
  width: 100%;
  height: var(--header-height);
  background: rgba(white, 0.7);
}

.main-title {
  text-align: center;
  text-transform: uppercase;
  line-height: 1;
  h1 {
    margin-top: 10px;
    margin-bottom: 2px;
  }
  h2 {
    margin: 0;
    font-weight: 400;
  }
}

.text-light {
  font-weight: 200;
}

.text-small {
  font-size: 18px;
}
</style>

<script>
import Navigation from "@/components/Nav.vue";
export default {
  components: {
    Navigation
  }
}
</script>