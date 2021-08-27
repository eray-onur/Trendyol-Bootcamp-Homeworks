<template>
  <div id="app">
    <img id="logo" src="./../assets/logo.png" alt="Star Wars">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
html {
  box-sizing: border-box;
  font-size: 62.5%;
}
body {
  background-color: #1B1B1B;
}
h1 {
  color: orange;
}
h2, h3, h4, h5, p {
  color: beige;
}
*, *::before, *::after {
  box-sizing: inherit;
}
h1 {
  font-size: 3.6rem;
}
p, a {
  font-size: 1.8rem;
}
button {
  outline: none !important;
  border: 2px solid orange;
  background: transparent;
  color: beige;
  font-size: 1.6rem;
  padding: 1rem;
  transition: .15s all;
}
button:hover {
  border-end-start-radius: 10px;
}
button:active {
  background-color: orange;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
#logo {
  width: 30rem;
  height: auto;
  margin: 0 auto;
}
</style>
