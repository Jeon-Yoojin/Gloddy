import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Map = () => {
    return (
        <WebView
            style={{ width: '100%', height: 100 }}
            source={{ uri: 'https://map.kakao.com/link/map/회사,37.402056,127.108212' }}
        />
    )
}
const { kakao } = window;
const MapContainer = () => {
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div id='myMap' style={{
            width: '100%', 
            height: '60%'
        }}></div>
    );
}

const MapUri = {html: `
    <html>
    <body>
        <div id="map" style="width:100%;height:100%;"></div>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=10a1d1ed897c0ff14621bd54e509920d"></script>
        <script>
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };

            var map = new kakao.maps.Map(container, options);
        </script>
    </body>
    </html>
`}

export default Map;