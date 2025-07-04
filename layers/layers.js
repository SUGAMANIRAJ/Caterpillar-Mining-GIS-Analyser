var wms_layers = [];


        var lyr_OSMOpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OSM OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://c.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MiningArea_3 = new ol.format.GeoJSON();
var features_MiningArea_3 = format_MiningArea_3.readFeatures(json_MiningArea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MiningArea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MiningArea_3.addFeatures(features_MiningArea_3);
var lyr_MiningArea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MiningArea_3, 
                style: style_MiningArea_3,
                popuplayertitle: 'Mining Area',
                interactive: false,
                title: '<img src="styles/legend/MiningArea_3.png" /> Mining Area'
            });
var format_InternalRoads_4 = new ol.format.GeoJSON();
var features_InternalRoads_4 = format_InternalRoads_4.readFeatures(json_InternalRoads_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InternalRoads_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InternalRoads_4.addFeatures(features_InternalRoads_4);
var lyr_InternalRoads_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InternalRoads_4, 
                style: style_InternalRoads_4,
                popuplayertitle: 'Internal Roads',
                interactive: false,
                title: '<img src="styles/legend/InternalRoads_4.png" /> Internal Roads'
            });
var format_SecurityCheckPosts_5 = new ol.format.GeoJSON();
var features_SecurityCheckPosts_5 = format_SecurityCheckPosts_5.readFeatures(json_SecurityCheckPosts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecurityCheckPosts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecurityCheckPosts_5.addFeatures(features_SecurityCheckPosts_5);
var lyr_SecurityCheckPosts_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecurityCheckPosts_5, 
                style: style_SecurityCheckPosts_5,
                popuplayertitle: 'Security Check Posts',
                interactive: false,
                title: '<img src="styles/legend/SecurityCheckPosts_5.png" /> Security Check Posts'
            });
var format_MedicalEmergency_6 = new ol.format.GeoJSON();
var features_MedicalEmergency_6 = format_MedicalEmergency_6.readFeatures(json_MedicalEmergency_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedicalEmergency_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedicalEmergency_6.addFeatures(features_MedicalEmergency_6);
var lyr_MedicalEmergency_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MedicalEmergency_6, 
                style: style_MedicalEmergency_6,
                popuplayertitle: 'Medical Emergency',
                interactive: false,
                title: '<img src="styles/legend/MedicalEmergency_6.png" /> Medical Emergency'
            });
var format_CaterpillerCommandPosts_7 = new ol.format.GeoJSON();
var features_CaterpillerCommandPosts_7 = format_CaterpillerCommandPosts_7.readFeatures(json_CaterpillerCommandPosts_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaterpillerCommandPosts_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaterpillerCommandPosts_7.addFeatures(features_CaterpillerCommandPosts_7);
var lyr_CaterpillerCommandPosts_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaterpillerCommandPosts_7, 
                style: style_CaterpillerCommandPosts_7,
                popuplayertitle: 'Caterpiller Command Posts',
                interactive: false,
                title: '<img src="styles/legend/CaterpillerCommandPosts_7.png" /> Caterpiller Command Posts'
            });
var format_Mining_8 = new ol.format.GeoJSON();
var features_Mining_8 = format_Mining_8.readFeatures(json_Mining_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mining_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mining_8.addFeatures(features_Mining_8);
var lyr_Mining_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mining_8, 
                style: style_Mining_8,
                popuplayertitle: 'Mining',
                interactive: false,
                title: '<img src="styles/legend/Mining_8.png" /> Mining'
            });
var format_MachinesVehicles_9 = new ol.format.GeoJSON();
var features_MachinesVehicles_9 = format_MachinesVehicles_9.readFeatures(json_MachinesVehicles_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MachinesVehicles_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MachinesVehicles_9.addFeatures(features_MachinesVehicles_9);
var lyr_MachinesVehicles_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MachinesVehicles_9, 
                style: style_MachinesVehicles_9,
                popuplayertitle: 'Machines & Vehicles',
                interactive: false,
                title: '<img src="styles/legend/MachinesVehicles_9.png" /> Machines & Vehicles'
            });
var format_ExplosionSite_10 = new ol.format.GeoJSON();
var features_ExplosionSite_10 = format_ExplosionSite_10.readFeatures(json_ExplosionSite_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExplosionSite_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExplosionSite_10.addFeatures(features_ExplosionSite_10);
var lyr_ExplosionSite_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExplosionSite_10, 
                style: style_ExplosionSite_10,
                popuplayertitle: 'Explosion Site',
                interactive: false,
                title: '<img src="styles/legend/ExplosionSite_10.png" /> Explosion Site'
            });

lyr_OSMOpenTopoMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_MiningArea_3.setVisible(true);lyr_InternalRoads_4.setVisible(true);lyr_SecurityCheckPosts_5.setVisible(true);lyr_MedicalEmergency_6.setVisible(true);lyr_CaterpillerCommandPosts_7.setVisible(true);lyr_Mining_8.setVisible(true);lyr_MachinesVehicles_9.setVisible(true);lyr_ExplosionSite_10.setVisible(true);
var layersList = [lyr_OSMOpenTopoMap_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,lyr_MiningArea_3,lyr_InternalRoads_4,lyr_SecurityCheckPosts_5,lyr_MedicalEmergency_6,lyr_CaterpillerCommandPosts_7,lyr_Mining_8,lyr_MachinesVehicles_9,lyr_ExplosionSite_10];
lyr_MiningArea_3.set('fieldAliases', {'qc_id': 'qc_id', 'name': 'name', });
lyr_InternalRoads_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_SecurityCheckPosts_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', });
lyr_MedicalEmergency_6.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', });
lyr_CaterpillerCommandPosts_7.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', });
lyr_Mining_8.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', });
lyr_MachinesVehicles_9.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_ExplosionSite_10.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'name': 'name', });
lyr_MiningArea_3.set('fieldImages', {'qc_id': '', 'name': '', });
lyr_InternalRoads_4.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', });
lyr_SecurityCheckPosts_5.set('fieldImages', {'qc_id': '', 'id': '', 'name': '', });
lyr_MedicalEmergency_6.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'name': 'TextEdit', });
lyr_CaterpillerCommandPosts_7.set('fieldImages', {'qc_id': '', 'id': '', 'name': '', });
lyr_Mining_8.set('fieldImages', {'qc_id': '', 'id': '', 'name': '', });
lyr_MachinesVehicles_9.set('fieldImages', {'qc_id': '', 'id': '', });
lyr_ExplosionSite_10.set('fieldImages', {'qc_id': '', 'id': '', 'name': '', });
lyr_MiningArea_3.set('fieldLabels', {'qc_id': 'no label', 'name': 'no label', });
lyr_InternalRoads_4.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', });
lyr_SecurityCheckPosts_5.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_MedicalEmergency_6.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_CaterpillerCommandPosts_7.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_Mining_8.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_MachinesVehicles_9.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', });
lyr_ExplosionSite_10.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'name': 'no label', });
lyr_ExplosionSite_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});