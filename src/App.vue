<template>
  <div class="App">
    <nav class="App__nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <footer>
      &copy; Awesome Company
    </footer>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  line-height: 1.6;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

p {
  &:not(:first-child) {
    margin-top: 1.25em;
  }
}
</style>
