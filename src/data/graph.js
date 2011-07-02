/*
 *	The Graph class is the main data representation of the SoBr.
 *	It is used to keep track of the nodes and edges. As well the
 *	Graph class is in charge of creating and managing the visual
 *	representation of the graph a.k.a the VisualGraph.
 *
 *	Author: Douglas Schneider
 */

function Graph()
{
	this.nodes = {};
	this.edges = {};
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
	if(this.nodes[i])
		console.warn("Adding a new node to the graph with an id already in use");
	this.nodes[id] = new Node(id, name, imageName);
};

Graph.prototype.addEdge =
function(from, to)
{
	var edgeid = from + "|" + to;
	if(!this.nodes[from] || !nodes[to])
		console.warn("One of the nodes required by an edge being added is not in the graph");
	if(this.edges[edgeid])
		console.warn("An edge that already exists is being replaced");
	this.edges[edgeid] = new Edge(from, to);
};
