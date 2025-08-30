async function fetchData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json');
        const dataset = await response.json();
        return dataset;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function main() {
    const dataset = await fetchData();
    console.log(dataset);

    const w = 1200;
    const h = 600;
    const padding = 60;

    const svg = d3.select('#graph')
        .append('svg')
        .attr('width', w)
        .attr('height', h);

    // Scales
    const xScale = d3.scaleLinear()
        .domain([d3.min(dataset, d => d.Year - 1), d3.max(dataset, d => d.Year + 1)])
        .range([padding, w - padding]);

    const yScale = d3.scaleTime()
        .domain([d3.min(dataset, d => new Date(d.Seconds * 1000)), d3.max(dataset, d => new Date(d.Seconds * 1000))])
        .range([padding, h - padding]);

    // Axes
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
    const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'));

    svg.append('g')
        .attr('id', 'x-axis')
        .attr('transform', `translate(0, ${h - padding})`)
        .call(xAxis);

    svg.append('g')
        .attr('id', 'y-axis')
        .attr('transform', `translate(${padding}, 0)`)
        .call(yAxis);

    // Labels
    const tooltip = d3.select('#graph')
        .append('div')
        .attr('id', 'tooltip')

    // Data points
    svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', d => xScale(d.Year))
        .attr('cy', d => yScale(new Date(d.Seconds * 1000)))
        .attr('r', 7)
        .attr('data-xvalue', d => d.Year)
        .attr('data-yvalue', d => new Date(d.Seconds * 1000).toISOString())
        .attr('fill', d => d.Doping ? '#e63946' : '#3cb371')
        .on('mouseover', (event, d) => {
            tooltip.transition().duration(200).style('opacity', 0.9);
            tooltip.html(`${d.Name}: ${d.Nationality}<br/>Year: ${d.Year}, Time: ${d.Time}${d.Doping ? `<br/><br/>${d.Doping}` : ''}`)
                .attr('data-year', d.Year)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 28) + 'px');
        })
        .on('mouseout', () => {
            tooltip.transition().duration(500).style('opacity', 0);
        });

    // Legend
    const legend = svg.append('g')
        .attr('id', 'legend')
        .attr('transform', `translate(${w - padding - 250}, ${padding})`);

    legend.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 250)
        .attr('height', 70)
        .attr('fill', 'white')
        .attr('stroke', 'black')

    legend.append('rect')
        .attr('x', 10)
        .attr('y', 11)
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', '#3cb371');

    legend.append('text')
        .attr('x', 25)
        .attr('y', 20)
        .text('No doping allegations');

    legend.append('rect')
        .attr('x', 10)
        .attr('y', 41)
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', '#e63946');

    legend.append('text')
        .attr('x', 25)
        .attr('y', 50)
        .text('Doping allegations');
}

main();