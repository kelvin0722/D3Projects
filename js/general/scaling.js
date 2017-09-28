function scaling() {

    var graphData = [100,200,1200],
        w  = 500,
        h =  500;
    
    var scaling = d3.scaleLinear()
        .domain([0,1400])
        .range([0,w])

    var axis = d3.axisBottom()
        .ticks(2)
        .scale(scaling);

    var canvas = d3.select(".graphContainer")
        .append("svg")
        .attr("width",w)
        .attr("height",h)
        .append("g")
        .attr("transform","translate(0,100)");
    
    var graphBar = canvas.selectAll("rect")
        .data(graphData)
        .enter()
        .append("rect")
        .attr("width",(d)=>{ return scaling(d)})
        .attr("height",20)
        .attr("fill","blue")
        .attr("y",(d,i)=>{return i * 50});
    
        canvas.append("g")
        .attr("transform","translate(0,100")
        .attr("stroke-width",3)
        .call(axis)
    
}