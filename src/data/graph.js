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
	//TODO: check to see if the JSON is malformed.
	var data = JSON.parse(json);
	var i;
	var nodes = data.nodes;
	var edges = data.edges;

	for(i = 0; i < nodes.length; i++)
		this.addNode(nodes[i].id, nodes[i].name, nodes[i].imageName);
	for(i = 0; i < edges.length; i++)
		this.addEdge(edges[i].from, edges[i].to);

	// set the root node for the graph and vgraph.
	this.setRootNode(this.nodes[data.rootNode]);
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

	// create a new edge and set all it's dependants to it.
	var edge = new Edge(this.nodes[from], this.nodes[to]);
	this.edges[edgeid] = edge;
	this.nodes[from].addOutEdge(edge);
	this.nodes[to].addInEdge(edge);
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
		if(edges[edge].fromNode === root)
			adjacentNodes.add(edges[edge].toNode);
		else if(edges[edge].toNode === root)
			adjacentNodes.add(edges[edge].fromNode);
	}

	return adjacentNodes;

	//TODO DOUBLE CHECK
};

/*
 *	Set the root node of this graph, as well as this graphs vgraph to the supplied rootNode.
 *
 *	If the supplied root node is null the the program dies with an error.
 *
 *	Params:
 *	
 *	rootNode - The root node to set for this graph and it's vgraph.
 */
Graph.prototype.setRootNode =
function(rootNode)
{
	if(rootNode === null)
	{
		console.warn("Tried to set the graphs root node to null.");
		die();
	}

	this.rootNode = rootNode;
	this.vgraph.rootNode = rootNode;
};
