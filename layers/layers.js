var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ISDIQGIS_1 = new ol.format.GeoJSON();
var features_ISDIQGIS_1 = format_ISDIQGIS_1.readFeatures(json_ISDIQGIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISDIQGIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISDIQGIS_1.addFeatures(features_ISDIQGIS_1);
var lyr_ISDIQGIS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ISDIQGIS_1, 
                style: style_ISDIQGIS_1,
                interactive: true,
                title: '<img src="styles/legend/ISDIQGIS_1.png" /> ISDI QGIS'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ISDIQGIS_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ISDIQGIS_1];
lyr_ISDIQGIS_1.set('fieldAliases', {'Logo': 'Logo', 'Nom de l\'exutoire': 'Nom de l\'exutoire', 'Adresse': 'Adresse', 'Site Internet': 'Site Internet', 'Mail': 'Mail', 'Téléphone': 'Téléphone', 'Y': 'Y', 'X': 'X', });
lyr_ISDIQGIS_1.set('fieldImages', {'Logo': 'ExternalResource', 'Nom de l\'exutoire': 'TextEdit', 'Adresse': 'TextEdit', 'Site Internet': 'TextEdit', 'Mail': 'TextEdit', 'Téléphone': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_ISDIQGIS_1.set('fieldLabels', {'Logo': 'no label', 'Nom de l\'exutoire': 'inline label', 'Adresse': 'inline label', 'Site Internet': 'inline label', 'Mail': 'inline label', 'Téléphone': 'inline label', 'Y': 'no label', 'X': 'no label', });
lyr_ISDIQGIS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});