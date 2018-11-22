import React, { Component } from 'react';
import  * as d3 from 'd3';

import './tryd3.css';
/** 
 * Ranges: 
 * 1-5 = 1
 * 6-12 = 2
 * 13-18 = 3
 * 19-25 = 4
 * 26-30 = 5
 * 31-37 = 6
 * **/

const Data = [
    {
        name: "Luisa",
        age: 17,
        range: 3
    },
    {
        name: "Leonardo",
        age: 30,
        range: 5
    },
    {
        name: "Lina",
        age: 20,
        range: 4
    }, 
    {
        name: "Andrés",
        age: 12,
        range: 2
    },
    {
        name: "Pepito",
        age: 35,
        range: 6
    }
]

class D3 extends Component {
    constructor(props){
        super(props)
        this.node = React.createRef();
        this.generateNodes = this.generateNodes.bind(this);
        this.random_rgba = this.random_rgba.bind(this);
    }

    random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return `rgba(${o(r()*s)},${o(r()*s)},${o(r()*s)},${(r()*(1 - 0.7) + 0.7).toFixed(1)}`;
    }

    ramdom_to_pos(){
        return Math.floor(Math.random()*100);
    }

    generateNodes(data, node) {

        return data.map((item)=>{
            const x = this.ramdom_to_pos();
            const y = this.ramdom_to_pos();
            const rgba = this.random_rgba();
            return (
                node
                .append("g")
                .attr("transform", `translate(${x},${y})`)
                .append("circle")
                .attr("r",`${item.range*2}`)
                .attr("fill",`${rgba}`)
            )
        })
    }

    componentDidMount(){
        const node = d3.select(this.node);
        node
        .attr("height", 300)
        .attr("width", 800)
        .style("background-color","#1e1e1e")
        .style("border-radius","20px")

        var nodes = this.generateNodes(Data, node);
        console.log(nodes, 'nodes')

    }
    
    render(){
        return(
            <svg viewBox="0 0 90 90" ref={node => this.node = node}></svg>
        )
    }
}

export default D3;