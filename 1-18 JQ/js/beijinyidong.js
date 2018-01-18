var yxbj={
	ele:$("#box"),
	start:function(){
		var self=this
		this.ele.animate({"background-position-y": "-230%"},10000,"linear",function(){
			self.ele.css({"background-position-y":"0%"})
			self.start()
		})
	}
}