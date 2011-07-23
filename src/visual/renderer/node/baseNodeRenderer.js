/*
 *	The BaseNodeRenderer is the most basic way to render visual nodes. The nodes are drawn to their
 *	x and y coordinates represented by a circle of the given color and radius or default values if
 *	none are given.
 *	
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */

/*
 *	Constructor for the BaseNodeRenderer.
 *
 *	Params:
 *
 *		context - The context of the canvas that the nodes are supposed to be drawn to.
 *
 *		color - The color that the nodes should be drawn in, #FF0000 by default.
 *
 *		radius - The radius of the circles that should be drawn to represent the nodes, 15 by
 *		default.
 */
function BaseNodeRenderer(context, color, radius)
{
	// fill properties from arguments
	this.context = context;
	this.color = color ? color : "#FF0000";
	this.radius = radius ? radius : 15;
}

BaseNodeRenderer.prototype.drawNode =
function(vnode)
{
	if(!vnode)
		console.warn("Trying to render an undefined VisualNode");
	this.context.fillStyle = this.color;
	this.context.beginPath();
	this.context.arc(vnode.x, vnode.y, this.radius, 0, Math.PI*2, true);
	this.context.closePath();
	this.context.fill();
};
