<template>
	<div id="music">
	 <div id="container">
	  <img class="record" :class="{run:run}" ref="img" src="../assets/music.png" />
	  <audio ref="musicBar" src="static/music.mp3">音乐</audio>
	  <div id="musicControl" class="clearfix">
	  	<div id="play" v-on:click="play" class="fl"></div>
	  	<div id="pause" v-on:click="pause" class="fr">
	  		<span></span><span></span>
	  	</div>
	  </div>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'game',
  props:[''],
  data () {
    return {
      count: 0,
      run: false
    }
  },
  methods: {
  	play: function(){
  		this.$refs.musicBar.play();
  		this.run = true;
  	},
  	pause: function(){
  		this.$refs.musicBar.pause();
  		this.run = false;
  	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#music{
	width: 100%;
	height: 100%;
}
.record{
	display: block;
	width: 300px;
	height: 300px;
	margin-bottom: 80px;
	animation: rotate 2s ease infinite;
	animation-play-state: paused;
}
#container{
	width: 300px;
	height: 400px;
	margin: 0 auto;
	position: relative;
	top: 50%;
	margin-top: -200px;
}
#musicControl{
	width: 300px;
}
#play{
	width: 0;
	height: 0;
	border-top: 20px solid transparent;
	border-left: 40px solid #FBCF9D;
	border-bottom: 20px solid transparent;
	background-color: #31325F;
}
#pause span{
	display: inline-block;
	width: 10px;
	height: 35px;
	background-color: #FBCF9D;
	margin-left: 5px;
}
.run{
	animation-play-state: running;
}


@keyframes rotate{
  0%{transform: rotateY(0);}
  50%{transform: rotateY(180deg);}
  100%{transform: rotateX(180deg);}
}
</style>