function Node(id, name, image)
{
	this.id = id;
	this.name = name;

	this.vnode = new VisualNode(image);
}

Node.prototype.getInfo = function()
{
	return this.id + " " + this.name;
}
