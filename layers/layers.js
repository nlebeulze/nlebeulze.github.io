var wms_layers = [];

var lyr_Corbeville2021_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Corbeville 2021",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Corbeville2021_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [240660.458014, 6224877.603897, 244877.225150, 6228975.265514]
                            })
                        });
var lyr_QEP_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "QEP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/QEP_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [243595.277131, 6224819.630768, 248183.974723, 6228410.159696]
                            })
                        });
var format_200218_cbv_fdp_2 = new ol.format.GeoJSON();
var features_200218_cbv_fdp_2 = format_200218_cbv_fdp_2.readFeatures(json_200218_cbv_fdp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200218_cbv_fdp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200218_cbv_fdp_2.addFeatures(features_200218_cbv_fdp_2);
var lyr_200218_cbv_fdp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200218_cbv_fdp_2, 
                style: style_200218_cbv_fdp_2,
                interactive: true,
                title: '200218_cbv_fdp'
            });
var format_200609ParcellaireQEP_3 = new ol.format.GeoJSON();
var features_200609ParcellaireQEP_3 = format_200609ParcellaireQEP_3.readFeatures(json_200609ParcellaireQEP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200609ParcellaireQEP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200609ParcellaireQEP_3.addFeatures(features_200609ParcellaireQEP_3);
var lyr_200609ParcellaireQEP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200609ParcellaireQEP_3, 
                style: style_200609ParcellaireQEP_3,
                interactive: true,
                title: '200609 Parcellaire QEP'
            });
var group_FDP = new ol.layer.Group({
                                layers: [lyr_200218_cbv_fdp_2,lyr_200609ParcellaireQEP_3,],
                                title: "FDP"});
var group_Orthophoto = new ol.layer.Group({
                                layers: [lyr_Corbeville2021_0,lyr_QEP_1,],
                                title: "Orthophoto"});

lyr_Corbeville2021_0.setVisible(true);lyr_QEP_1.setVisible(true);lyr_200218_cbv_fdp_2.setVisible(true);lyr_200609ParcellaireQEP_3.setVisible(true);
var layersList = [group_Orthophoto,group_FDP];
lyr_200218_cbv_fdp_2.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_200609ParcellaireQEP_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_200218_cbv_fdp_2.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_200609ParcellaireQEP_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_200218_cbv_fdp_2.set('fieldLabels', {});
lyr_200609ParcellaireQEP_3.set('fieldLabels', {});
lyr_200609ParcellaireQEP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});