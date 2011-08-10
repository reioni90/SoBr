/*
 *	This class is in charge of drawing all of the visual nodes in the VisualGraph.visualNodes list.
 *	The nodes are drawn in one large circle around the root node.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */

function CircularLayout(vgraph, radius)
{
	this.vgraph = vgraph;
	this.radius = radius;
	this.doneDrawing = true;
}

CircularLayout.prototype.layout = 
function(visibleNodes)
{
	// if all of the nodes have already completed drawing then stop
	if(this.doneDrawing)
		return;

	var i;
	for(i = 0; i < this.vgraph.visibleNodes.length; i++)
	{
		//TODO: set the actual x and y coordinates
		this.vgraph.visibleNodes[i].vnode.x = (i+1)*10;
		this.vgraph.visibleNodes[i].vnode.y = (i+1)*20;
	}
};
