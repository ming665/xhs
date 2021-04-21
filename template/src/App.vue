<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style {{#if_eq cssPreprocessor "less"}}lang="less"{{/if_eq}}{{#if_eq cssPreprocessor "sass"}}lang="scss"{{/if_eq}}{{#if_eq cssPreprocessor "stylus"}}lang="stylus"{{/if_eq}}>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

{{#if_eq cssPreprocessor "less"}}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
{{/if_eq}}
{{#if_eq cssPreprocessor "sass"}}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
{{/if_eq}}
{{#if_eq cssPreprocessor "stylus"}}
#nav
  padding 30

  a
    font-weight bold
    color #2c3e50

    &.router-link-exact-active 
      color #42b983
    
  }
}
{{/if_eq}}
{{#unless cssPreprocessor}}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} 
{{/unless}}
</style>












