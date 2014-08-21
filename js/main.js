require([
    'esri/map',
    'esri/layers/ArcGISImageServiceLayer',

    'dojo/on',
    'dojo/query',

    'IdentifyTiles',

    'dojo/domReady!'
], function (
    Map,
    ArcGISImageServiceLayer,

    on,
    query,

    IdentifyTiles
    ) {
    // this will save us some typing later on
    var baseUrl = 'http://mapserv.utah.gov/ArcGIS/rest/services/';

    // the four image services that we are working with
    var urls = {
        hro2012: baseUrl + 'AerialPhotography_Color/HRO2012Color6Inch_4Band/ImageServer',
        hro2009: baseUrl + 'AerialPhotography_Color/HRO2009_Color1Foot/ImageServer',
        uao2003: baseUrl + 'AerialPhotography_Color/UAO2003_Color1Foot/ImageServer',
        doq1990: baseUrl + 'AerialPhotography_BlackWhite/DOQ1990s_1Meter/ImageServer'
    };

    var layers = {
        hro2012: null,
        hro2009: null,
        uao2003: null,
        doq1990: null
    };

    console.log('hello');

    var currentLayer;
    var identify;

    function init() {
        console.log('init fired');

        var map = new Map('map');

        layers.hro2012 = new ArcGISImageServiceLayer(urls.hro2012);
        map.addLayer(layers.hro2012);
        currentLayer = layers.hro2012;

        layers.hro2009 = new ArcGISImageServiceLayer(urls.hro2009, {
            visible: false
        });
        map.addLayer(layers.hro2009);

        layers.uao2003 = new ArcGISImageServiceLayer(urls.uao2003, {
            visible: false
        });
        map.addLayer(layers.uao2003);

        layers.doq1990 = new ArcGISImageServiceLayer(urls.doq1990, {
            visible: false
        });
        map.addLayer(layers.doq1990);

        wireEvents();

        identify = new IdentifyTiles(map);
    }

    function wireEvents() {
        console.log('wireEvents fired');

        query("input[type='radio']").on('click', onRadioClicked);
    }

    function onRadioClicked(evt) {
        console.log('onRadioClicked fired');

        currentLayer.hide();

        currentLayer = layers[evt.target.value];

        currentLayer.show();

        identify.switchCurrentLayer(evt.target.value);
    }

    init();
});
