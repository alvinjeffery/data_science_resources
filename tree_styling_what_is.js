var i3 = 0,
    duration3 = 750,
    root3;

// declares a tree layout and assigns the size
var treemap3 = d3.tree().size([height, width]);

// Assigns parent, children, height, depth
root3 = d3.hierarchy(wiTreeData, function(d) { return d.children; });
root3.x0 = height / 2;
root3.y0 = 0;

// Collapse after the second level
root3.children.forEach(collapse);

update3(root3);

// Collapse the node and all it's children
function collapse(d) {
    if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
    }
}

function update3(source) {

    // Assigns the x and y position for the nodes
    var wiTreeData = treemap3(root3);

    // Compute the new tree layout.
    var nodes = wiTreeData.descendants(),
        links = wiTreeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 180 });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg3.selectAll('g.node')
        .data(nodes, function(d) { return d.id || (d.id = ++i3); });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
            return "translate(" + source.y0 + "," + source.x0 + ")";
        })
        .on('click', click)
        // Mouseover functionality 
        // source: http://bl.ocks.org/PandaRider/84b9c096e37334c2a4fd945a66b8ccf9 
        .on("mouseover", function(d) {
            var g = d3.select(this); // The node
            // The class is used to remove the additional text later
            var info = g.append('text')
                .classed('info', true)
                .attr('x', -75)
                .attr('y', 30)
                .text(d.data.comment)
                .style('font-style', 'italic')
                .call(wrap, 200);
        })
        .on("mouseout", function() {
            // Remove the info text on mouse out.
            d3.select(this).select('text.info').remove()
        });;

    // Add Circle for the nodes
    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

    // Function for wrapping long text
    // Source: https://stackoverflow.com/questions/24784302/wrapping-text-in-d3 
    function wrap(text, width) {
        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1, // ems
                x = text.attr("x"),
                y = text.attr("y"),
                dy = 0, //parseFloat(text.attr("dy")),
                tspan = text.text(null)
                .append("tspan")
                .attr("x", x)
                .attr("y", y)
                .attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("dy", ++lineNumber * lineHeight + dy + "em")
                        //.attr("dy", 1 + dy + "em") // modified by Alvin
                        .text(word);
                }
            }
        });
    }

    // Add labels for the nodes
    nodeEnter
        .append("a")
        .attr("xlink:href", function(d) { return d.data.url; })
        .attr("target", "_blank")
        .append('text')
        .attr("dy", ".35em")
        .attr("x", function(d) {
            return d.children || d._children ? -13 : 35;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function(d) {
            return d.children || d._children ? d.data.name : d.data.name;
        })
        .call(wrap, 175);

    // Add image to terminal node to help user know it opens a new window
    nodeEnter
        .append("image")
        .attr('x', 15)
        .attr('y', -10)
        .attr('width', 15)
        .attr('height', 15)
        .attr("xlink:href", function(d) {
            return d.children || d._children ? null : "up_right_arrow.png";
        });

    // Define the div for the tooltip
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
        .duration(duration3)
        .attr("transform", function(d) {
            return "translate(" + d.y + "," + d.x + ")";
        });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
        .attr('r', 10)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        })
        .attr('cursor', 'pointer');


    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
        .duration(duration3)
        .attr("transform", function(d) {
            return "translate(" + source.y + "," + source.x + ")";
        })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
        .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
        .style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = svg3.selectAll('path.link')
        .data(links, function(d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function(d) {
            var o = { x: source.x0, y: source.y0 }
            return diagonal(o, o)
        });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration3)
        .attr('d', function(d) { return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(duration3)
        .attr('d', function(d) {
            var o = { x: source.x, y: source.y }
            return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {

        path = `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`

        return path
    }

    // Toggle children on click, storing values for tracking clicks. 	
    function click(d) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
            //clickpath += '(-)' + d.data.name + ';';
        } else {
            d.children = d._children;
            d._children = null;
            //clickpath += '(+)' + d.data.name + ';';
        }
        update3(d);
    }
}