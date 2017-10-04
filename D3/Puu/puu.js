var data = {
    "name": "Kati",
    "children": [
        {
            "name": "Mati"
        },
        {
            "name": "Ats",
            "children": [
                {
                    "name": "Kalle"
                },
                {
                    "name": "Janek"
                }
            ]
        },
        {
            "name": "Artur",
            "children": [
                {
                    "name": "Julius"
                },
                {
                    "name": "Piret"
                }
            ]
        },
        {
            "name": "Lauri",
            "children": [
                {
                    "name": "Tauri"
                },
                {
                    "name": "Mirt",
                    "children": [
                        {
                            "name": "Luisa"
                        },
                        {
                            "name": "Linda"
                        },
                        {
                            "name": "Liisu"
                        }
                    ]
                },
            ]
        },
        {
            "name": "Mait",
            "children": [
                {
                    "name": "Kaido"
                },
                {
                    "name": "Uku"
                }
            ]
        },
        {
            "name": "Kaupo"
        }
    ]
};

var margin = {top: 40, right: 90, bottom: 50, left: 90};
var w = 600 - margin.left - margin.right;
var h = 500 - margin.top - margin.bottom;

var svg = d3.select('body').append('svg')
    .attr('width', w + margin.left + margin.right)
    .attr('height', h + margin.top + margin.bottom);

var g = svg.append('g')
    .attr('transform', 'translate('+ margin.left +' , '+ margin.top +')');

var tree = d3.tree()
    .size([w, h]);

var nodes = d3.hierarchy(data);
nodes = tree(nodes);

var link = g.selectAll(".link")
    .data(nodes.descendants().slice(1))
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", (d) => {
    return "M" + d.x + "," + d.y + "C" + d.x + ","
    + (d.y + d.parent.y) / 2 + " "
    + d.parent.x + "," +  (d.y + d.parent.y) / 2
    + " " + d.parent.x + "," + d.parent.y;
})
.attr('fill', 'none')
    .attr('stroke', '#ccc')
    .attr('stroke-width', 2);

var node = g.selectAll('.node')
    .data(nodes.descendants())
    .enter()
    .append('g')
    .attr('class', (d) => { return "node", + (d.children ? " node--internal" : " node--leaf");
    })
    .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");

node.append('circle')
    .attr('r', 10)
    .attr('fill', 'red')

node.append('text')
    .attr("dy", 3)
    .attr("y", (d) => d.children ? -20 : 20)
    .style("text-anchor", (d) => d.children ? "end" : "start")
    .text((d) => d.data.name);