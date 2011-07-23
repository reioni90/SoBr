/*
 *	The Graph class is the main data representation of the SoBr.
 *	It is used to keep track of the nodes and edges. As well the
 *	Graph class is in charge of creating and managing the visual
 *	representation of the graph a.k.a the VisualGraph.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */

function Graph()
{
	this.nodes = {};
	this.edges = {};

	this.vgraph = new VisualGraph(this.nodes, this.edges);
}

Graph.prototype.initFromJSON =
function(json)
{
	var data = JSON.parse(json);
	var i;
	var nodes = data.nodes;
	var edges = data.edges;

	for(i = 0; i < nodes.length; i++)
		this.addNode(nodes[i].id, nodes[i].name, nodes[i].imageName);
	for(i = 0; i < edges.length; i++)
		this.addEdge(edges[i].from, edges[i].to);
};

Graph.prototype.addNode =
function(id, name, imageName)
{
	if(this.nodes[id])
		console.warn("Adding a new node to the graph with an id already in use");
	this.nodes[id] = new Node(id, name, imageName);
};

Graph.prototype.addEdge =
function(from, to)
{
	var edgeid = from + "|" + to;
	if(!this.nodes[from] || !this.nodes[to])
		console.warn("One of the nodes required by an edge being added is not in the graph");
	if(this.edges[edgeid])
		console.warn("An edge that already exists is being replaced");
	this.edges[edgeid] = new Edge(from, to);
};

/*
 *	Returns an array of all the nodes directly adjacent to the supplied node.
 *
 *	Params:
 *
 *	root - The root node to get all the adjacent nodes of.
 */
Graph.prototype.getAdjacentNodes =
function(root)
{
	var adjacentNodes = new Array();
	for(var edge in this.edges)
	{
		if(edge.fromNode === root)
			adjacentNodes.add(edge.toNode);
		else if(edge.toNode === root)
			adjacentNodes.add(edge.fromNode);
	}

	return adjacentNodes;

	//TODO DOUBLE CHECK
};
