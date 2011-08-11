/*
 *	This class is in charge of drawing all of the visual nodes in the VisualGraph.visualNodes list.
 *	The nodes are drawn in one large circle around the root node.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */

function CircularLayout(vgraph, radius, centreX, centreY)
{
	this.vgraph = vgraph;
	this.radius = radius;
	this.centreX = centreX;
	this.centreY = centreY;

	this.doneDrawing = true;
}

CircularLayout.prototype.layout = 
function(visibleNodes)
{
	var numNodes = this.vgraph.visibleNodes.length - 1;
	var currNode = 0;
	// the partial rotation is the amount of rotation around the circle separating each node.
	var startRotation = Math.PI/2;
	var partialRotation = ((2*Math.PI)/numNodes);
	var currentRotation;

	// if all of the nodes have already completed drawing then stop
	if(this.doneDrawing)
		return;

	var i;
	for(i = 0; i < this.vgraph.visibleNodes.length; i++)
	{
		// if the node is the root node place it in the centre
		if(this.vgraph.visibleNodes[i].id === this.vgraph.rootNode.id)
		{
			this.vgraph.visibleNodes[i].vnode.x = this.centreX;
			this.vgraph.visibleNodes[i].vnode.y = this.centreY;
		}
		else// otherwise place it in a circle around the centre
		{
			currentRotation = startRotation - (partialRotation*currNode);
			//TODO: set the actual x and y coordinates
			this.vgraph.visibleNodes[i].vnode.x = this.centreX -
				(Math.cos(currentRotation)*this.radius);
			this.vgraph.visibleNodes[i].vnode.y = this.centreY -
				(Math.sin(currentRotation)*this.radius);

			currNode++;
		}
	}
};
