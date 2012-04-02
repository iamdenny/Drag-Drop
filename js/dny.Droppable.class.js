/**
 * @description This class makes selected elements droppable (meaning they accept being dropped on by draggables).
 * @class dny.Droppable
 * @names dny
 * @namespace
 * @author 
 * @version 1.0.1
 * @since January 31, 2012
 * @copyright Copyright (c) 2012, NHN Technology Services inc.
 * @generated by Jindo2 Code Generator v1.0.3
 * @sample
 * <div id="custom_id">drop me</div>
 * var oDroppable = new dny.Droppable("custom_id");
 */
dny.Droppable = jindo.$Class({
	/** @lends dny.Droppable.prototype */

	/**
     * @description  Drappable element
	 * @private
	 * @type Wrapping Element
	 */
	_welDroppable : null,

	/**
     * @description $init.
	 * @public
	 * @constructs
	 * @param {String} sDroppableElementName
	 */
	$init : function(sDroppableElementName) {
		this._welDroppable = jindo.$Element(sDroppableElementName);
	},

	/**
     * @description Is mouse over here?
	 * @public
	 * @param {Number} nMouseX
	 * @param {Number} nMouseY
	 * @return {Boolean}
	 */
	isMouseOverHere : function(nMouseX, nMouseY) {
		var aTargetPosition = this._welDroppable.offset();
		var aTargetWidth = parseInt(this._welDroppable.width(), 10);
		var aTargetHeight = parseInt(this._welDroppable.height(), 10);		
		if(	(nMouseX > aTargetPosition.left) &&
			(nMouseX < (aTargetPosition.left + aTargetWidth)) &&
			(nMouseY > aTargetPosition.top) &&
			(nMouseY < (aTargetPosition.top + aTargetHeight))){
			return true;
		}else{
			return false;
		}
	},
	
	/**
	 * @description Get drappable element
	 * @public
	 * @return {Wrapping Element}
	 */
	getDroppableElement : function() {
		return this._welDroppable;
	}

});

