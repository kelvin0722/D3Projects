function svgExample() {
    var canvas = d3.select("body")
        .append("svg")
        .attr("width",700)
        .attr("height",700)
    
    var circle = canvas.append("circle")
        .attr("cx",80)
        .attr("cy",150)
        .attr("r",70)
        .attr("fill","blue")

    var rect = canvas.append("rect")
        .attr("x",200)
        .attr("y",150)
        .attr("width",100)
        .attr("height",100)
        .attr("fill","red")
    
    var line = canvas.append("line")
        .attr("x1",350)
        .attr("x2",450)
        .attr("y1",100)
        .attr("y2",400)
        .attr("stroke","grey")
        .attr("stroke-width",3)
    
}