# D3 Scatterplot Graph

This is my solution for the **freeCodeCamp Data Visualization Project: Scatterplot Graph**.  
The goal of this project was to build an interactive scatterplot using **D3.js**, displaying the 35 fastest times up Alpe d'Huez, with information about doping allegations in professional cycling.

## Features

- 📊 Scatterplot built with **D3.js**  
- 📅 X-axis: Year of the record  
- ⏱️ Y-axis: Time in minutes and seconds  
- 🟢 Data points without doping allegations are shown in **green**  
- 🔴 Data points with doping allegations are shown in **red**  
- 📝 Interactive **tooltip** on hover showing rider details, year, time, and doping information (if any)  
- 🎨 Responsive and styled legend with colored squares for quick visual reference  

## Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **[D3.js v6](https://d3js.org/)**  
- Data source: [Cyclist Data (freeCodeCamp)](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json)

## Project Structure

- `index.html` – Base HTML page, includes scripts and project title  
- `style.css` – Custom styling for layout, tooltips, and legend  
- `app.js` – Main D3 logic: scales, axes, scatterplot, tooltips, and legend  

## How to Run

1. Clone or download this repository.  
2. Open `index.html` in your browser.  
3. The scatterplot will be rendered automatically, fetching cyclist data from the freeCodeCamp repository.  

## User Stories (freeCodeCamp requirements)

- ✅ I can see a title element with a corresponding `id="title"`.  
- ✅ I can see an x-axis with `id="x-axis"`.  
- ✅ I can see a y-axis with `id="y-axis"`.  
- ✅ I can see dots plotted with the class `dot`.  
- ✅ Each dot has `data-xvalue` and `data-yvalue` attributes.  
- ✅ I can see multiple tick labels on both axes.  
- ✅ I can interact with a tooltip (`id="tooltip"`) that displays more information about the data point.  
- ✅ The tooltip’s `data-year` corresponds to the `data-xvalue` of the active dot.  
- ✅ The project uses the dataset provided by freeCodeCamp.  

## Live Demo

👉 You can view the live version of this project here:  
**[Scatterplot Graph Live App](https://dallatikes.github.io/freeCodeCamp-d3-scatterplot/)**

---
Built with ❤️ using **D3.js** as part of the freeCodeCamp Data Visualization Certification.
