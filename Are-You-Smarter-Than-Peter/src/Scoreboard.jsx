import * as d3 from "d3";
import {useEffect, useRef} from 'react'


export default function Scoreboard({points, peter}){

  console.log(points);


    const ref = useRef();

    useEffect(()=> {

      let database = [{name: "You", score:points},
        {name: "Peter", score:peter}]
        //const svg = d3.select(ref.current)

        // set the dimensions and margins of the graph
    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
    width = 200 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  const svg = d3
    .select(ref.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Parse the Data
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
    let y = d3.scaleLinear().domain([0, 100]).range([height, 0])
    y.ticks(100);
    svg.append("g").call(d3.axisLeft(y));


    svg
    .selectAll("mybar")
    .data(database)
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return x(d.name);
    })
    .attr("y", function (d) {
      return y(d.score);
    })
    .attr("width", x.bandwidth())
    .attr("height", function (d) {
      return height - y(d.score);
    })
    .attr("fill", function(d){if(d.name == "You"){
      return "#37c1cd";
    }
    else{
      return "#cd3737";
    }});

    


  
    },[points,peter])



  return (

    <svg width={200} height={600} ref={ref}></svg>
    

  )

}