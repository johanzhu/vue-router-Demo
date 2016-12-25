<template>
  <div id="todo">
  	<div id="title">{{title}}</div>
    <div id="inputBox"><input type="text" name="todo" v-on:keyup.enter="addTodo" v-model="todoInput" placeholder="what to do ?"/></div>
    <ul>
    	<li v-bind:class="{isFinished: item.isFinished,isFilter: item.isFilter}" v-for="item in todos"
    	v-bind:key="item.id">{{item.todo}}<img id="delete" src="../assets/delete.png" v-on:click="finishTodo(item)" /></li>
    </ul>
    <div id="handleBar">
    	<button v-on:click="showFinished">Show Finished</button>
    	<button v-on:click="showNotFinished">Show Not Finished</button>
    	<button v-on:click="showAll">Show All</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  props:[''],
  data () {
    return {
      todos: [],
      remainTodos: [],
      todoInput: '',
      title: 'Todos',
    }
  },
  methods:{
  	addTodo: function(){
  		if(this.todoInput){
  		this.todos.push({
  			todo:this.todoInput,
  			isFinished:false,
  			isFilter: false
  		});
  		}else{alert("You must do something!")}
  		this.todoInput = '';
  	},
  	finishTodo: function(item){
      item.isFinished = !item.isFinished;
  	},
  	showFinished: function(){
  		for(let item in this.todos){
  			this.todos[item].isFilter = false;
  			if(this.todos[item].isFinished === false){
  			  this.todos[item].isFilter = true;
  		  }
  		}	
  	},
  	showNotFinished: function(){
  		for(let item in this.todos){
  			this.todos[item].isFilter = false;
  			if(this.todos[item].isFinished === true){
  			  this.todos[item].isFilter = true;
  			}
  		}
  	},
  	showAll: function(){
  		for(let item in this.todos){
  			this.todos[item].isFilter = false;
  		}
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
#todo{
	width: 500px;
	height: 608px;
	color: #FBCF9D;
	position: relative;
	top: 50%;
	left: 50%;
	font-family: "agency fb";
	margin-left: -250px;
	margin-top: -304px;
}
#todo input{
	background-color: #FBCF9D;
	text-align: center;
	width: 300px;
	height: 30px;
	font-size: 25px;
	color: #31325F;
	border-radius: 4px;
	font-family:  "microsoft yahei";
}
#inputBox{
	text-align: center;
}
#todo ul{
	width: 500px;
	height: 400px;
	border: 4px solid #FBCF9D;
	margin-top: 30px;
	overflow-y: auto;
	scrollbar-track-color:#FBCF9D !important;
	scrollbar-face-color: #FBCF9D !important;
}
#todo li{
	font-family:"microsoft yahei";
	text-align: center;
	font-size: 20px;
}
#title{
	text-align: center;
	font-size: 70px;
}
#delete{
	display: inline-block;
	width: 20px;
	height: 20px;
	vertical-align: calc(-3px);
}
#handleBar{
	width: 375px;
	margin: 0 auto;
	margin-top: 20px;
}
#handleBar button{
	border: 2px solid #FBCF9D;
	background-color: #31325F;
	color: #FBCF9D;
	font-family: "agency fb";
	font-size: 25px;
}
.isFinished{
	text-decoration: underline;
}
.isFilter{
	display: none;
}
</style>
