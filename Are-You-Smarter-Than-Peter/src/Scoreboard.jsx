import * as d3 from "d3";
import {useEffect, useRef} from 'react'


export default function Scoreboard({points}){

  console.log(points);

  const point = 5

  let database = [{name: "You", score:14},
              {name: "Peter", score:12}]

    const ref = useRef();

    useEffect(()=> {
        //const svg = d3.select(ref.current)

        // set the dimensions and margins of the graph
    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 200 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select(ref.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Parse the Data
  d3.csv(
    "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"
  ).then(function (data) {
    // X axis
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(["You","Peter"])
      .padding(0.2);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    let y = d3.scaleLinear().domain([0, 20]).range([height, 0])
    y.ticks(20);
    svg.append("g").call(d3.axisLeft(y));

    // Bars
    // svg
    //   .selectAll("mybar")
    //   .data(database)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d) => xScale(d.name))
    //   .attr("y", (d) => xScale(d.score))
    //   .attr("width", 100)
    //   .attr("height", 100)
    //   .attr("fill", "#5f0f40");

    svg.selectAll("mybar").data(database).enter().append("rect").attr('x', 
      function(d){
        return x(d);
      
    }).attr('y', 
      function(d) {
      return y(database[d]);
    }).attr("width", x.bandwidth() - 2).attr("height", 
      function(d){
      return height - y(point);
    }).attr("fill", "#7e6acb")


  })
    },[])



  return (

    <svg width={460} height={400} ref={ref}></svg>
    

  )

}