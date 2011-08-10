/*
 *	The visual graph is in charge of drawing and laying out the visual display of the graph. It does
 *	this with the use of visual renderers for both the edges and the nodes as well as a layouter.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */
function VisualGraph(nodes, edges)
{
	//each other DOUBLE CHECK
	this.nodes = nodes;
	this.edges = edges;
	this.visibleNodes = new Array();
}

VisualGraph.prototype.setNodeRenderer =
function(nodeRenderer)
{
	this.nodeRenderer = nodeRenderer;
}

/*
 *	Refresh all of the nodes and their positions on the canvas.
 */
VisualGraph.prototype.refresh =
function()
{
	var node;
	var i;

	this.populateVisibleNodes();
	this.layouter.layout();
	for(i = 0; i < this.visibleNodes.length; i++)
		this.nodeRenderer.drawNode(this.visibleNodes[i].vnode);
};

/*
 *	Set the root node of the visual graph as well as populate the visibleNodes list
 */
VisualGraph.prototype.setRootNode =
function(node)
{
	this.rootNode = node;
};

/*
 *	Populate the visibleNodes list based on the current rootNode. The list is populated with all the
 *	nodes within the first n degrees where n is specified as a parameter.
 *
 *	Params:
 *
 *		degree - The number of degrees of visual nodes to add the the visualNode list. The minimum
 *		value is 1. If a value is not supplied or a value less than 1 is supplied then 1 is
 *		assigned.
 */
VisualGraph.prototype.populateVisibleNodes =
function(degree)
{
	var root;
	var adjacentNodes = new Array();

	if(degree === null || degree < 1)
	{
		console.warn("A null or non-positive value was given for degree on a call to VisualGraph.prototype.populateVisualNodes");
		degree = 1;
	}

	root = this.rootNode;
	adjacentNodes.push(root);
	adjacentNodes = adjacentNodes.concat(root.getAdjacentNodes());
	// append nodes the the visibleNodes list and iterate through new nodes if degree requires so.


	//TODO: remove
	var i;
	for(i = 0; i < adjacentNodes.length; i++)
		this.visibleNodes[i] = adjacentNodes[i];
	//TODO: remove


	//TODO: FINISH
	//TODO: DOUBLE CHECK
};

VisualGraph.prototype.setLayouter = 
function(layouter)
{
	this.layouter = layouter;
	this.layouter.doneDrawing = false;
};
