<template>
  <div id="app">
  	<div id="nav" class="fl">
  	<img src="./assets/bg.png" alt="error"/>
  	<ul>
  		<li><router-link to="/home">home</router-link></li>
  		<li><router-link to="/todo">todo</router-link></li>
  		<li><router-link to="/game">game</router-link></li>
  		<li><router-link to="/user">foo</router-link></li>
  		<li>...<li>
  	</ul>
  	</div>
  	<div id="main" class="fl">
  	<router-view></router-view>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
  	return {
  		
  	}
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
#nav{
	width: 300px;
	height: 100%;
	background-color: #28274E;
	color: #FBCF9D;
}
#nav li{
	font-size: 45px;
	font-family: "agency fb";
	padding-left: 60px;
}
#nav a{
	color: #FBCF9D;
}
#nav img{
	width: 300px;
	height: 270px;
}
#main{
	width: calc(100% - 300px);
	height: 100%;
	background-color: #31325F;
}
</style>
