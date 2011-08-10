/*
 *	The Node class is used by the Graph class as the basic representation
 *	for all nodes in the graph. It contains all the information necessary
 *	to represent the Node both as a data structure and create a visual
 *	representation of itself.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */

/*
 *	The constructor for the Node class.
 *
 *	Params:	
 *
 *		id - the unique id that the graph will use to represent this node.
 *
 *		name - the name that the use will visually see representing this node.
 *
 *		imageName - the imageName that will be loaded to represent this node
 *		as an icon.
 */
function Node(id, name, imageName)
{
	//TODO: handle undefined variables
	this.id = id;
	this.name = name;

	// keep track of incident edges.
	this.inEdges = new Array();
	this.outEdges = new Array();

	this.vnode = new VisualNode(imageName);
}

Node.prototype.getAdjacentNodes = 
function()
{
	var i;
	var j = 0;
	var adjacentNodes = new Array();

	for(i = 0; i < this.inEdges.length; i++)
		adjacentNodes[j++] = this.inEdges[i].fromNode;
	for(i = 0; i < this.outEdges.length; i++)
		adjacentNodes[j++] = this.outEdges[i].toNode;

	return adjacentNodes;
};

Node.prototype.addInEdge =
function(edge)
{
	this.inEdges.push(edge);
};

Node.prototype.addOutEdge =
function(edge)
{
	this.outEdges.push(edge);
};
