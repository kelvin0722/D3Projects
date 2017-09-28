/** this is how we start d3js with javascript **/
function start ()
{
    d3.select("body")
        .append("p")
        .text("Load text with d3.js! today");

    console.log(d3);
}
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
// set the dimensions and margins of the graph
function lineChart(){
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) {return x(d.date) })
    .y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data/data.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
  });

  console.log(data);

  var dates = data.reduce((prev,curr,index)=>{
             prev.push(curr.date)
             return prev;
  },[]);

  console.log(dates);
  console.log(d3.extent(dates));
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});

}

function paths() {
    
    var canvas = d3.select(".paths").append("svg")
        .attr("width",500)
        .attr("height",500)
    
    var data = [
        {x:10,y:20},
        {x:100,y:100},
        {x:10,y:200}
    ]
    
    var group = canvas.append("g")
        .attr("transform","translate(100,100)")
    
    var line = d3.line()
        .x((d)=>{return d.x})
        .y((d)=>{return d.y})
    
    group.selectAll("path")
        .data([data])
        .enter()
        .append("path")
        .attr("d",line)
        .attr("stroke","red")
        .attr("fill","green")
        .attr("stroke-width",5 )  
        .attr("transform","translate(100,100)")
    
    var radius = 50;
    var p = Math.PI *2;

    var arc = d3.arc()
        .innerRadius(radius - 10)
        .outerRadius(radius)
        .startAngle(0)
        .endAngle(p)
    
    group.append("path")
        .attr("d",arc)
        .attr("fill","blue")
}
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