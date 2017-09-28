function donutChart() {
    d3.json('data/suicide-squad.json', (err,data)=>{
    var group = d3.select('.donutChart')
                      .append('svg')
                      .attrs({ width: 225, height: 225 })
                      .append('g')
                      .attr('transform', 'translate(105, 105)');
     console.log(group);
       
       let rankdata = data.map((obj)=>{
           return obj.rank
       });
       var pieSegments = d3.pie()(rankdata);
       console.log(pieSegments);
        var arcGenerator = d3.arc()
                             .innerRadius(50)
                             .outerRadius(100)
                             .startAngle((d)=>{return d.startAngle;})
                             .endAngle((d)=> {return d.endAngle; });
        var colors = d3.scaleOrdinal(d3.schemeCategory10);
        group.selectAll('path')
             .data(pieSegments)
             .enter()
             .append('path')
             .attrs({ d: arcGenerator, stroke: 'white',
                      'stroke-width': 3, fill: function (d, i) {
                          return colors(i);
                      },
             });
     
    });

    
} 