/*
 *	The SoBr file contains all of the functions needed to set up a SoBr and
 *	getting it running. As well all of the global variables are set up inside
 *	of the Object.SoBr object.
 *
 *	Author: Douglas Schneider <ds3@ualberta.ca>
 */

/*
 *	This is the constructor for the SoBr object.
 *	Set up the SoBr object and prepare it to be displayed. Once creation is
 *	complete the browser is started.
 *
 * TODO: finish commenting of this constructor.
 */
function SoBr(canvas, dataMode, data)
{
	this.canvas = canvas;
	this.context = canvas.getContext("2d");

	// prepare the graph
	this.graph = new Graph();

	// set the node Renderer
	this.graph.vgraph.setNodeRenderer(new BaseNodeRenderer(this.context));

	// set the layouter
	//TODO: set the radius of the layouter to the width of the canvas.
	this.graph.vgraph.setLayouter(new CircularLayout(this.graph.vgraph, 50));

	// initialize the graph from the input data
	if(dataMode == "JSON")
		this.graph.initFromJSON(data);
	else
	{
		console.error("You have provided an invalid dataMode to SoBr");
		die();
	}

	this.graph.vgraph.refresh();
}
