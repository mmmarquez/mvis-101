/*
                     ___           ___      
      _____         /  /\         /  /\     
     /  /::\       /  /::\       /  /::\    
    /  /:/\:\     /  /:/\:\     /  /:/\:\   
   /  /:/~/::\   /  /:/~/::\   /  /:/~/:/   
  /__/:/ /:/\:| /__/:/ /:/\:\ /__/:/ /:/___ 
  \  \:\/:/~/:/ \  \:\/:/__\/ \  \:\/:::::/ 
   \  \::/ /:/   \  \::/       \  \::/~~~~  
    \  \:\/:/     \  \:\        \  \:\      
     \  \::/       \  \:\        \  \:\     
      \__\/         \__\/         \__\/     
                                            
*/

d3.csv("./media/bar.csv", data => {
  //let's start by selecting our SVG and applying some width and height.
  let barSvg = d3
    .select("#bar")
    .attr("width", 600)
    .attr("height", 800);

  // first and last day, to stablish a domain
  // let minDate = new Date(Date.parse(""));
  // let maxDate = new Date(Date.parse(""));
  let dataLength = data.length;
  let firstItem = 0;
  let lastItem = dataLength - 1;
  // console.log(firstItem);
  // console.log(lastItem);

  // lets also find de max/min values!
  let valueMax = d3.max(data, (d, i) => {
    return d.value;
  });
  let valueMin = d3.min(data, (d, i) => {
    return d.value;
  });

  let valueScale = d3
    .scaleLinear()
    .domain([valueMin, valueMax])
    .range([0, 800]);

  // console.log(`Maximum ssss: ${valueScale(5)}`);

  //having the min/max index, we can create the starting and end dates.
  let minDate = new Date(Date.parse(data[firstItem].dtg));
  let maxDate = new Date(Date.parse(data[lastItem].dtg));
  // console.log(minDate);
  // console.log(maxDate);

  // lets create a scale with that data!
  let dayScale = d3
    .scaleTime()
    .domain([minDate, maxDate])
    .range([0, 600]);

  // console.log(dayScale(new Date(Date.parse(data[12].dtg))));

  // x is the d3.scaleTime()
  // .axisBottom() creates a bottom axis, and we pass the dayScale
  // .ticks() will create a `tick` every so oftem items.
  let axisX = d3.axisBottom(dayScale).ticks(10);

  // we call sampleSvg
  barSvg
    .append("g") // create a <g> element * we can group in SVG --
    .attr("class", "x-axis") // we can add a class to the group
    .attr("transform", "translate(0," + 400 + ")") // let's translate it and place it at bottom.
    .call(axisX); // we .call() our axisX

  // to create the rectangales (bars) we'll selectAll rect nodes and apply the data to it.
  // notice how we are creating a new variable for the rects -- this just makes syntax easier
  // grouping small parts together.
  let rects = barSvg.selectAll("rect").data(data);

  // we use rects variable and enter()
  rects
    .enter()
    .append("rect") // append actual <rect> nodes
    .attr("fill", "#222") // provide a fill for the rect.
    .attr("x", 0) // position each rect at 0 (starting point / left)
    .attr("y", function(d, i) {
      // the y position will require some logic, as it will be moved per item.
      // let's say the height of each bar is 10. We want to move the each bar's Y position
      // incrementally.
      // 1st bar : y : 10px
      // 2nd bar : y : 20px
      // 3rd bar : y : 30px
      // ...
      // we can this many ways. Easiest is just to use the index and multiply it by a number
      // so each time it will increment.
      // 1st bar : y : 0 x 20 -> 0
      // 2nd bar : y : 1 x 20 -> 20
      // 3rd bar : y : 2 x 20 -> 40
      // ...
      // we finally return the value to each <rect>
      return i * 20;
    })
    .attr("height", 10) // add height to each bar
    .attr("width", function(d, i) {
      // the width will be the actual data value
      // we return a function and use our ValueScale to map it.
      //console.log(valueScale(d.value));
      return valueScale(d.value);
    });
});
