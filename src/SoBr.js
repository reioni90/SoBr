/*
 *	The SoBr file contains all of the functions needed to set up a SoBr and
 *	getting it running. As well all of the global variables are set up inside
 *	of the Object.SoBr object.
 *
 *	Author: Douglas Schneider
 */

/*
 *	This is the constructor for the SoBr object.
 *	Set up the SoBr object and prepare it to be displayed. Once creation is
 *	complete the browser is started.
 *
 * TODO: finish commenting of this constructor.
 *
 *	Author: Douglas Schneider
 */
function SoBr(canvas, dataMode, data)
{
	this.canvas = canvas;
	this.context = canvas.getContext("2d");

	// prepare the graph
	this.graph = new Graph();
	this.graph.vgraph.setNodeRenderer(new BaseNodeRenderer(this.context));

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
