<template>
	<div id="home">
		<div id="welcome">
		<span>w</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span>
		</div>
		<img src="../assets/github.png" v-on:click="showGithub" />
		<div id="name">-paint by johan.</div>
	</div>
</template>

<script>
export default {
  name: 'home',
  props:[''],
  data () {
    return {
      count: 0
    }
  },
  methods:{
  	showGithub : function(){
  		window.open("https://github.com/johanzhu");
  	}
  	}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
	height: 200px;
	padding-left: 300px;
	color: #FBCF9D;
	text-align: center;
	font-size: 70px;
	font-family: "agency fb";
	position: relative;
	top: 50%;
	margin-top: -100px;
}
#welcome{
	margin-bottom: -30px;
	white-space: nowrap;
}
#welcome > span{
	display: inline-block;
}
#welcome span:nth-child(1){
	animation: jump1 1.2s .7s infinite;
}
@keyframes jump1{
	0%{transform: translateY(0);}
	14.28%{transform: translateY(-20px);}
}
#welcome span:nth-child(2){
	animation: jump2 1.2s .6s infinite;
}
@keyframes jump2{
	14.28%{transform: translateY(0);}
	28.56%{transform: translateY(-20px);}
}
#welcome span:nth-child(3){
	animation: jump3 1.2s .5s infinite;
}
@keyframes jump3{
	28.56%{transform: translateY(0);}
	42.84%{transform: translateY(-20px);}
}
#welcome span:nth-child(4){
	animation: jump4 1.2s .4s infinite;
}
@keyframes jump4{
	42.84%{transform: translateY(0);}
	57.12%{transform: translateY(-20px);}
}
#welcome span:nth-child(5){
	animation: jump5 1.2s .3s infinite;
}
@keyframes jump5{
	57.12%{transform: translateY(0);}
	71.4%{transform: translateY(-20px);}
}
#welcome span:nth-child(6){
	animation: jump6 1.2s .2s infinite;
}
@keyframes jump6{
	71.4%{transform: translateY(0);}
	85.68%{transform: translateY(-20px);}
}
#welcome span:nth-child(7){
	animation: jump7 1.2s .1s infinite;
}
@keyframes jump7{
	85.68%{transform: translateY(0);}
	100%{transform: translateY(-20px);}
}

#home img{
	width: 30px;
	height: 30px;
	padding-left: 10px;
	margin-top: 10px;
	cursor: pointer;
}
#home img{
	animation: blink 1.3s infinite;
}
@keyframes blink{
	from{opacity: 1;}
	to{opacity: 0;}
}
#name{
	font-size: 35px;
}
</style>
