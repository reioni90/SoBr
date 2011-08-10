/*
 *	The Edge class is used by the graph to represent all of the edges
 *	in the graph. The edge contains the visual edge which is drawn by
 *	the graph. The edge also contains references to the to and from
 *	nodes as well as any extra information regarding the edge in the graph
 *	that is provided by the user.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */

/*
 *	Constructor for Edges.
 *
 *	Params:
 *
 *		from - The Node that this edge runs from.
 *
 *		to - The Node that this edge runs to.
 */
function Edge(from, to)
{
	this.fromNode = from;
	this.toNode = to;
}
