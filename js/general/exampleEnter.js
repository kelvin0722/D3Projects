function exampleEnter() 
{
    var exampleData = [200,100],
        w = 800,
        h = 1200;
    
    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
    
    var box =canvas.append("rect")
        .attr("width",300)
        .attr("height",300)
        .attr("fill","red")

    var boxes = canvas.selectAll("rect")
        .data(exampleData)
        .attr("fill","purple")
        .exit()
        /*
        .enter()
        .append("rect")
        .attr("width",(d)=>d)
        .attr("height",(d)=>d)
        .attr("fill","grey")
        .attr("stroke","black")
        */
        
    
}