module("Drag & Drop Test", {
	setup : function() {
		var self = this;
		this.welDraggable1 = jindo.$Element("<div id='draggable1' class='draggable'>First Drag");
		this.welDroppable1 = jindo.$Element("<div id='droppable1' class='droppable'>First Drop");
		document.body.appendChild(this.welDraggable1.$value());
		document.body.appendChild(this.welDroppable1.$value());
		
		this.oDraggable1 = new dny.Draggable("draggable1").attach({
			dragStart : function(oCustomEvent){
				
			},
			dragging : function(oCustomEvent) {
				var bIsMouseOver1 = self.oDroppable1.isMouseOverHere(oCustomEvent.aMousePosition)
				if(bIsMouseOver1){
					self.oDroppable1.getDroppableElement().css({background:"blue"});
				}else{
					self.oDroppable1.getDroppableElement().css({background:"yellow"});
				}
				
			},
			dragEnd : function(oCustomEvent){
				var bIsMouseOver1 = self.oDroppable1.isMouseOverHere(oCustomEvent.aMousePosition)
				if(bIsMouseOver1){
					alert("dropped");						
				}
				self.oDroppable1.getDroppableElement().css({background:"yellow"});
				
			}
		});
		this.oDrappable1 = new dny.Droppable("droppable1");
	},
	
	teardown : function() {
		this.welDraggable1.leave();
		this.welDroppable1.leave();
		this.oDraggable1 = null;
		this.oDroppable1 = null;
	}
});

//Test code start //
test("드래그 영역에 마우스를 클릭합니다.", function () {
	// given
	var self = this;
	var oMockEventOk = {
		element : self.welDraggable1.$value(),
		pos : function () {
			return {
				clientX : 150,
				clientY : 450
			};
		},		
		mouse : function() {
			return {
				left : true,
				right : false
			};
		}
	};
	// when
	this.oDraggable1._onMouseDown(oMockEventOk);
	// Then
	ok(this.oDraggable1.getDraggableElement(), "드래그 할 엘리먼트를 선택하였습니다.");
	this.oDraggable1._onMouseUp(oMockEventOk);
	
	// given	
	var oMockEventFail = {
		element : self.welWrapperLayer.$value(),
		pos : function () {
			return {
				clientX : 50,
				clientY : 50
			};
		},		
		mouse : function() {
			return {
				left : true,
				right : false
			};
		}
	};
	// when
	this.oDraggable1._onMouseDown(oMockEventFail);
	// Then
	ok(!this.oDrag.getDraggableElement(), "드래그 할 엘리먼트를 선택하지 못하였습니다.");	
});