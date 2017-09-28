function visualizeOranges() 
{
  var canvas = d3.select(".orangeContainer")
    .append("svg")
    .attr("width",768)
    .attr("height",500)

 var orangeData = [10,30,40,50,60];

 var oranges = canvas.selectAll("circle")
    .data(orangeData)
    .enter()
    .append("circle")
    .attr("fill","orange")
    .attr("cx",(d,i)=>{     
       return d + (i*100);
    })
    .attr("cy",(d,i)=>{   
        return d;
    })
    .attr("r",(d)=>{
        return d;
    })

}