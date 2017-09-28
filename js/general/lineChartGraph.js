function lineChartGraph(){
    
drawLineGraph();
}
function drawLineGraph() {

  var yAxisTitle = "Amounts";
  
  var colors = ["#4885ed", "#db3236", "#26A65B", "#F89406", "#663399","#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf","EC644B"]
  
  var dataValues  = [{
  'Fruits/grains/vegetables': {
    name: 'Fruits/grains/vegetables',
    values: [
      {
        close: 6973,
        date: '06-2017'
      },
      {
        close: 5683,
        date: '07-2017'
      },
      {
        close: 3391,
        date: '05-2017'
      }
    ]
  },
  'Maize Flour': {
    name: 'Maize Flour',
    values: [
      {
        close: 5624,
        date: '06-2017'
      },
      {
        close: 4309,
        date: '07-2017'
      },
      {
        close: 5632,
        date: '05-2017'
      },
      {
        close: 4760,
        date: '04-2017'
      }
    ]
  },
  Milk: {
    name: 'Milk',
    values: [
      {
        close: 4763,
        date: '06-2017'
      },
      {
        close: 3978,
        date: '07-2017'
      },
      {
        close: 4829,
        date: '05-2017'
      },
      {
        close: 4363,
        date: '04-2017'
      }
    ]
  },
  'Cooking oil': {
    name: 'Cooking oil',
    values: [
      {
        close: 4509,
        date: '06-2017'
      },
      {
        close: 3613,
        date: '07-2017'
      },
      {
        close: 4306,
        date: '05-2017'
      },
      {
        close: 3758,
        date: '04-2017'
      }
    ]
  },
  Sugar: {
    name: 'Sugar',
    values: [
      {
        close: 3870,
        date: '06-2017'
      },
      {
        close: 3099,
        date: '07-2017'
      },
      {
        close: 1950,
        date: '05-2017'
      }
    ]
  },
  Bread: {
    name: 'Bread',
    values: [
      {
        close: 2889,
        date: '06-2017'
      },
      {
        close: 2289,
        date: '07-2017'
      },
      {
        close: 2964,
        date: '05-2017'
      },
      {
        close: 3003,
        date: '04-2017'
      }
    ]
  },
  Tea: {
    name: 'Tea',
    values: [
      {
        close: 1972,
        date: '06-2017'
      },
      {
        close: 1731,
        date: '07-2017'
      }
    ]
  },
  Groceries: {
    name: 'Groceries',
    values: [
      {
        close: 2600,
        date: '05-2017'
      },
      {
        close: 4482,
        date: '04-2017'
      }
    ]
  },
  'Wheat Flour': {
    name: 'Wheat Flour',
    values: [
      {
        close: 1944,
        date: '04-2017'
      }
    ]
  },
  Other: {
    name: 'Other',
    values: [
      {
        close: 1530,
        date: '04-2017'
      }
    ]
  }
}]
   
    //w = $(element).width() < CHART_WIDTH ? CHART_WIDTH: $(element).width()
    var width = 1290
   
    var options = {
        canvas: {
            margin: {
                top: 15,
                right: 150,
                bottom: 40,
                left: 100
            }
        },
        svg: {
            width: width,
            height: 370
        },
        circle: {
            fill: '#95a5a6',
            fillActive: '#4885ed',
            radius: 6,
            activeRadius: 8
        }
    };

    /** Run the operations on a data point to indicate that it is active.
     *
     * @param dataPoint the class/id of the point to make active.
     * @param active True/False whether or not to make the point active.
    */
    /*
    function dataPointActive(dataPoint, active) {
        var circleOptions = options.circle;
        var color = active ? circleOptions.fillActive : circleOptions.fill;
        var rad = active ? circleOptions.activeRadius : circleOptions.radius;

        $(dataPoint).attr('fill', color);
        $(dataPoint).attr('r', rad);
        $(dataPoint).css('transition', 'fill 0.7s, r 0.2s')
    }

    var tooltip = d3.select("div.data-tooltip");

    function tooltipActive(selector, active) {
        var opacity = active ? '1' : '0';
        selector.transition().style('opacity', opacity);
        if (!active) {
            selector.html('');
        }
    }*/
    // updates the options variable to adjust for the margins
    function updateOptions(options) {
        var spaceWidth = options.canvas.margin.left + options.canvas.margin.right;
        options.svg.width = options.svg.width - spaceWidth;

        var spaceHeight = options.canvas.margin.top + options.canvas.margin.bottom;
        options.svg.height = options.svg.height - spaceHeight;

        var center = (options.svg.width / Object.keys(dataValues[0]).length) / 2;
        options.svg.center = center;
        return options;
    };
    options = updateOptions(options);

    //console.log(dataValues);
  var parser = d3.timeParse("%m-%Y");

 var dateValues =  dataValues.map((obj)=>{
  var dates = [];
   for (key in obj){
    obj[key].values.sort((a,b)=>{
      if(a.date > b.date){
        return 1;
      }
      if(a.date < b.date){
        return -1;
      }
      return 0;
    });
    obj[key].values.forEach((curr)=>{
        curr.date = parser(curr.date)
        curr.close = +curr.close
        dates.push(curr.date)
    })
   }
  return [...dates]
});
 var amountValues = dataValues.map((obj)=>{
          var amounts = [];
            for (key in obj){
          obj[key].values.map((curr)=>{
       amounts.push(curr.close)   
    })
   }
  return [...amounts]
}); 
   var data = dataValues[0];

    // creates the x and y scales
    var scaleX = d3.scaleTime().range([0,options.svg.width]);
    var scaleY = d3.scaleLinear().range([options.svg.height, 0]); 
    // x and y domains 
    console.log(d3.extent(dateValues[0]));
    scaleX.domain(d3.extent(dateValues[0]));
    scaleY.domain([0, d3.max(amountValues[0])*1.5]);
      
    // function for creating the value line
    var valueline = d3.line()
        .x((d,i)=> {console.log("date:"+scaleX(d.date));return scaleX(d.date) })
        .y((d)=> { console.log("Amount:"+scaleY(d.close));return scaleY(d.close)});

    // x axis tick marks
    var xAxis = d3.axisBottom()
        .scale(scaleX)
        .ticks(4)
        .tickFormat(d3.timeFormat('%m-%y'))

    // y axis tick marks
    var yAxis = d3.axisLeft()
        .scale(scaleY)
        .ticks(10)
     
    // appends the main svg element to the body
    var svg = d3.select(".lineChart").append("svg")
            .attr('width', options.svg.width + options.canvas.margin.left + options.canvas.margin.right)
            .attr('height', options.svg.height + options.canvas.margin.top + 		options.canvas.margin.bottom)
            .attr('class', 'canvas')
            .append('g')
            .attr('transform','translate(' + options.canvas.margin.left + ',' + options.canvas.margin.top + ')');
    // creates the data line from the valueline function
    for (i in data){
      console.log(data[i].values)
        svg.append('path')
            .attr('class', 'line')
            .attr('d', valueline([...data[i].values]))
            .style('stroke', colors[Object.keys(data).indexOf(i)])
            .style('opacity', 1)
            .attr('id', function(d) {
                return "line-" + i;
            });
    }

    // adds the x axis to the chart
    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + options.svg.height + ')')
        .call(xAxis);

    // adds the y axis to the chart
    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis);

    // this adds the data points to the value line
    
    for(i in data){
     svg.selectAll('#line-'+ Object.keys(data).indexOf(i) +' circle')
        .data(data[i].values)
        .enter()
        .append('circle')
        .attr('class', 'd-point circle-' + i)
        .attr('r', options.circle.radius)
        .attr('fill', options.circle.fill)
        .attr('stroke', "#fff")
        .attr('stroke-width', 2)
        .attr('cx', function(d) {
           return  scaleX(d.date);
        })
        .attr('cy', function(d) {
           return scaleY(d.close);
        })
        .attr('data-tooltip', function(d) {
           return "<div class='box' style='background-color:"+ colors[Object.keys(data).indexOf(i)] +"'></div>" + d.close +" <small>KES</small>: " + i;
        })
        .attr('id', function(d,j) {
           return "dpoint-" + j + i;
        });
   }
   
    svg.append("text")
        .attr("class", "x label")
        .attr("x", options.svg.width)
        .attr("y", options.svg.height - 6)
        .attr("text-anchor", "end")
        .text("Time");

    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("y", -70)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text(yAxisTitle);


   
}