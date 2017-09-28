function transitions() {
    var w = 800,
        h = 600;
        
    var canvas = d3.select(".transitionsContainer")
        .append("svg")
        .attr("width",w)
        .attr("height",h);

    var rect = canvas.append("rect")    
        .attr("width",200 )
        .attr("height",100 )
        .attr("fill","blue")
      
    
    var circle = canvas.append("circle")
        .attr("cx",100 )
        .attr("cy",200 )
        .attr("r",50)
        .attr("fill","pink" )
    
    rect.transition()
        .duration(1000)
        .delay(2000)
        .attr("width",300)
}