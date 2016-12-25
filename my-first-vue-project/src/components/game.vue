<template>
	<div id="game">
	 <div id="grid">
	   <div id="row1" v-on:click="chess">
	   	<span id='cell1' ref='box1'></span><span id='cell2' ref='box2'></span><span id='cell3' ref='box3'></span>
	   </div>
	   <div id="row2" v-on:click="chess">
	   	<span id='cell4' ref='box4'></span><span id='cell5' ref='box5'></span><span id='cell6' ref='box6'></span>
	   </div>
	   <div id="row3" v-on:click="chess">
	   	<span id='cell7' ref='box7'></span><span id='cell8' ref='box8'></span><span id='cell9' ref='box9'></span>
	   </div>
	 </div>
	 <button v-on:click='resetGrid' id="resetBtn">Restart!</button>
	</div>
</template>

<script>
export default {
  name: 'game',
  props:[''],
  data () {
    return {
      count: 0
    }
  },
  methods: {
  	chess: function(e){
  		this.count +=1;
  		if(e.target.nodeName === 'DIV'){
  			console.log('点到棋盘咯0.0')
  		}else if(e.target.className){
  			console.log('已经有棋子了！');
  		}else{
  			if(this.count%2 === 0){
  			  e.target.className = "x";
  		    }else if((this.count-1)%2 === 0){
              e.target.className = "o";
  		    }
  		}
  		var bn1 = this.$refs.box1.className;
  		let bn2 = this.$refs.box2.className;
  		let bn3 = this.$refs.box3.className;
  		let bn4 = this.$refs.box4.className;
  		let bn5 = this.$refs.box5.className;
  		let bn6 = this.$refs.box6.className;
  		let bn7 = this.$refs.box7.className;
  		let bn8 = this.$refs.box8.className;
  		let bn9 = this.$refs.box9.className;
  		if((bn1 === 'o' && bn2 ==='o' && bn3 ==='o') || (bn1 === 'x' && bn2 ==='x' && bn3 ==='x') ){
          alert('Game over!');this.resetGrid();
  		}else if((bn4 === 'o' && bn5 ==='o' && bn6 ==='o') || (bn4 === 'x' && bn5 ==='x' && bn6 ==='x')){
  		  alert('Game over!');this.resetGrid();
  		}else if((bn7 === 'o' && bn8 ==='o' && bn9 ==='o') || (bn7 === 'x' && bn8 ==='x' && bn9 ==='x')){
  		  alert('Game over!');this.resetGrid();
  		}else if((bn1 === 'o' && bn4 ==='o' && bn7 ==='o') || (bn1 === 'x' && bn4 ==='x' && bn7 ==='x')){
  		  alert('Game over!');this.resetGrid();
  		}else if((bn2 === 'o' && bn5 ==='o' && bn8 ==='o') || (bn2 === 'x' && bn5 ==='x' && bn8 ==='x')){
  		  alert('Game over!');this.resetGrid();
  		}else if((bn3 === 'o' && bn6 ==='o' && bn9 ==='o') || (bn3 === 'x' && bn6 ==='x' && bn9 ==='x')){
  		  alert('Game over!');this.resetGrid();
  		}else if((bn1 === 'o' && bn5 ==='o' && bn9 ==='o') || (bn1 === 'x' && bn5 ==='x' && bn9 ==='x')){
  		  alert('Game over!');this.resetGrid();
  		}else if((bn3 === 'o' && bn5 ==='o' && bn7 ==='o') || (bn3 === 'x' && bn5 ==='x' && bn7 ==='x')){
  		  alert('Game over!');this.resetGrid();
  		}
  	},
  	resetGrid: function(){
  		this.$refs.box1.className = ' ';
  		this.$refs.box2.className = ' ';
  		this.$refs.box3.className = ' ';
  		this.$refs.box4.className = ' ';
  		this.$refs.box5.className = ' ';
  		this.$refs.box6.className = ' ';
  		this.$refs.box7.className = ' ';
  		this.$refs.box8.className = ' ';
  		this.$refs.box9.className = ' ';
  	}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
	font-family: "agency fb";
	src: url(../../static/AgencyFB.ttf);
}
#game{
	width: 100%;
	height: 100%;
	position: relative;
}
#grid{
	width:408px;
	height:408px;
	position:absolute;
	top: 50%;
	left: 50%;
	margin-left: -200px;
	margin-top: -200px;
}
#row1,#row2,#row3{
	box-sizing: border-box;
	height: 136px;
}
#grid span{
	display: inline-block;
	width: 134px;
	height: 134px;
	margin: 0 1px;
	border: 2px solid #FBCF9D;
	box-sizing: border-box;
	background-size: contain;
}
#resetBtn{
	border: none;
	background-color: #FBCF9D;
	font-family: "agency fb";
	font-size: 25px;
	padding:3px 15px;
	border-radius: 4px;
	width: 96px;
	height: 38px;
	position: absolute;
    top: 50%;	
    left: 50%;
    margin-left: -44px;
    margin-top: 215px;
}
.o{
	background:url(../assets/cicle.png);
}
.x{
	background: url(../assets/delete.png);
}


</style>