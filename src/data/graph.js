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
};
