require([
    'esri/map',
    'esri/layers/ArcGISImageServiceLayer',
    'dojo/domReady!'
], function (
    Map,
    ArcGISImageServiceLayer
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

    console.log('hello');

    function init() {
        console.log('init fired');

        var map = new Map('map');

        var hro2012Lyr = new ArcGISImageServiceLayer(urls.hro2012);
        var hro2009Lyr = new ArcGISImageServiceLayer(urls.hro2009);
        var uao2003Lyr = new ArcGISImageServiceLayer(urls.uao2003);
        var doq1990Lyr = new ArcGISImageServiceLayer(urls.doq1990);

        map.addLayer(hro2012Lyr);
    }

    init();
});
