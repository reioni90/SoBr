function VisualGraph(nodes, edges)
{
	this.nodes = nodes;
	this.edges = edges;
}

VisualGraph.prototype.setNodeRenderer =
function(nodeRenderer)
{
	this.nodeRenderer = nodeRenderer;
}

VisualGraph.prototype.refresh =
function()
{
	var node;
	for(node in this.nodes)
		this.nodeRenderer.drawNode(this.nodes[node].vnode);
};
