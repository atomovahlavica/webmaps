var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_populationchange18411851_1 = new ol.format.GeoJSON();
var features_populationchange18411851_1 = format_populationchange18411851_1.readFeatures(json_populationchange18411851_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_populationchange18411851_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_populationchange18411851_1.addFeatures(features_populationchange18411851_1);
var lyr_populationchange18411851_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_populationchange18411851_1, 
                style: style_populationchange18411851_1,
                popuplayertitle: '%population change 1841-1851',
                interactive: true,
    title: '%population change 1841-1851<br />\
    <img src="styles/legend/populationchange18411851_1_0.png" /> -29.3 - -27.8<br />\
    <img src="styles/legend/populationchange18411851_1_1.png" /> -27.8 - -23.8<br />\
    <img src="styles/legend/populationchange18411851_1_2.png" /> -23.8 - -20.6<br />\
    <img src="styles/legend/populationchange18411851_1_3.png" /> -20.6 - -16.4<br />\
    <img src="styles/legend/populationchange18411851_1_4.png" /> -16.4 - 8.7<br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_populationchange18411851_1.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_populationchange18411851_1];
lyr_populationchange18411851_1.set('fieldAliases', {'fid': 'fid', 'County': 'County', 'latitude': 'latitude', 'longitude': 'longitude', 'Area_Acres': 'Area_Acres', 'Population in 1841': 'Population in 1841', 'Population Density in 1841': 'Population Density in 1841', 'Population in 1851': 'Population in 1851', 'Population Density in 1851': 'Population Density in 1851', '%Population Change between 1841-1851': '%Population Change between 1841-1851', 'Acres_Oats_1851': 'Acres_Oats_1851', '%Crops_Oats_1851': '%Crops_Oats_1851', 'Acres of Potatoes in 1851': 'Acres of Potatoes in 1851', '%Acres_Potatoes_1851': '%Acres_Potatoes_1851', 'Acres_of_Crops_1851': 'Acres_of_Crops_1851', '%Land_in_Crops': '%Land_in_Crops', 'Inhabited Houses in 1841': 'Inhabited Houses in 1841', 'Uninhabited Houses in 1841': 'Uninhabited Houses in 1841', 'Total Houses in 1841': 'Total Houses in 1841', 'Inhabited Houses in 1851': 'Inhabited Houses in 1851', 'Uninhabited Houses in 1851': 'Uninhabited Houses in 1851', 'Total Houses in 1851': 'Total Houses in 1851', 'Emmigrants_1850s': 'Emmigrants_1850s', '%Emmigrants_of_1851_Population': '%Emmigrants_of_1851_Population', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_populationchange18411851_1.set('fieldImages', {'fid': 'TextEdit', 'County': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Area_Acres': 'Range', 'Population in 1841': 'Range', 'Population Density in 1841': 'TextEdit', 'Population in 1851': 'Range', 'Population Density in 1851': 'TextEdit', '%Population Change between 1841-1851': 'TextEdit', 'Acres_Oats_1851': 'Range', '%Crops_Oats_1851': 'TextEdit', 'Acres of Potatoes in 1851': 'Range', '%Acres_Potatoes_1851': 'TextEdit', 'Acres_of_Crops_1851': 'Range', '%Land_in_Crops': 'TextEdit', 'Inhabited Houses in 1841': 'Range', 'Uninhabited Houses in 1841': 'Range', 'Total Houses in 1841': 'Range', 'Inhabited Houses in 1851': 'Range', 'Uninhabited Houses in 1851': 'Range', 'Total Houses in 1851': 'Range', 'Emmigrants_1850s': 'Range', '%Emmigrants_of_1851_Population': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_populationchange18411851_1.set('fieldLabels', {'fid': 'hidden field', 'County': 'header label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Area_Acres': 'hidden field', 'Population in 1841': 'inline label - visible with data', 'Population Density in 1841': 'inline label - visible with data', 'Population in 1851': 'inline label - visible with data', 'Population Density in 1851': 'inline label - visible with data', '%Population Change between 1841-1851': 'inline label - visible with data', 'Acres_Oats_1851': 'hidden field', '%Crops_Oats_1851': 'hidden field', 'Acres of Potatoes in 1851': 'hidden field', '%Acres_Potatoes_1851': 'hidden field', 'Acres_of_Crops_1851': 'hidden field', '%Land_in_Crops': 'hidden field', 'Inhabited Houses in 1841': 'inline label - visible with data', 'Uninhabited Houses in 1841': 'inline label - visible with data', 'Total Houses in 1841': 'hidden field', 'Inhabited Houses in 1851': 'inline label - visible with data', 'Uninhabited Houses in 1851': 'inline label - visible with data', 'Total Houses in 1851': 'hidden field', 'Emmigrants_1850s': 'hidden field', '%Emmigrants_of_1851_Population': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_populationchange18411851_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});