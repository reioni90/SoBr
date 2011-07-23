/*
 *	The visual graph is in charge of drawing and laying out the visual display of the graph. It does
 *	this with the use of visual renderers for both the edges and the nodes as well as a layouter.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */
function VisualGraph(graph, nodes, edges)
{
	this.graph = graph; //TODO: this could cause an overflow due to vgraph and graph referencing
	//each other DOUBLE CHECK
	this.nodes = nodes;
	this.edges = edges;
	this.visualNodes = new Array(); //TODO DOUBLE CHECK
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
	for(node in this.nodes)
		this.nodeRenderer.drawNode(this.nodes[node].vnode);
};

/*
 *	Set the root node of the visual graph as well as populate the visualNodes list
 */
VisualGraph.prototype.setRootNode =
function(node)
{
	this.rootNode = node;
};

/*
 *	Populate the visualNodes list based on the current rootNode. The list is populated with all the
 *	nodes within the first n degrees where n is specified as a parameter.
 *
 *	Params:
 *
 *		degree - The number of degrees of visual nodes to add the the visualNode list. The minimum
 *		value is 1. If a value is not supplied or a value less than 1 is supplied then 1 is
 *		assigned.
 */
VisualGraph.prototype.populateVisualNodes =
function(degree)
{
	var root;
	var adjacentNodes;

	if(degree === null || degree < 1)
	{
		console.warn("A null or negative value was given for degree on a call to VisualGraph.prototype.populateVisualNodes");
		degree = 1;
	}

	root = this.rootNode;
	adjacentNodes = this.graph.getAdjacentNodes(root);
	// append nodes the the visualNodes list and iterate through new nodes if degree requires so.

	//TODO: FINISH
	//TODO: DOUBLE CHECK
};
