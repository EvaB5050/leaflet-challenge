# leaflet-challenge
Data Bootcamp Module 15 Challenge

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.  
<br>
The USGS is interested in building a new set of tools that will allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, the task is to develop a way to visualise USGS data that will allow them to better educate the public and other government organisations (and hopefully secure more funding) on issues facing our planet.  

## Create the Earthquake Visualisation

<img src= "https://static.bc-edx.com/data/dla-1-2/m15/lms/img/2-BasicMap.jpg" alt="2-BasicMap" width="500" height="300">  
<br>  
<br>  

1. Get the dataset:

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON page and choose a dataset to visualise. 
`https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php`  
<br>
This is the page used in this challenge.
`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson`  
<br>
<br>
2. Using Leaflet, the above map was created which shows all the earthquakes from the dataset based on their longitude and latitude.  
<br>
The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by their colour. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in colour.  
<br>
The popups provide additional information about the earthquake when its associated marker is clicked.  
<br>
A legend is located at the bottom right of the map which provides context for the map data.




