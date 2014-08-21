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
}
