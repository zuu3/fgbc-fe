import React from 'react';

const KakaoMap = () => {
    const mapScript = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; overflow: hidden; }
                .root_daum_roughmap { width: 100% !important; height: 100% !important; }
            </style>
        </head>
        <body>
            <div id="daumRoughmapContainer1766142263504" class="root_daum_roughmap root_daum_roughmap_landing"></div>
            <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
            <script charset="UTF-8">
                new daum.roughmap.Lander({
                    "timestamp" : "1766142263504",
                    "key" : "eiwbm6ahdbh",
                    "mapWidth" : "640",
                    "mapHeight" : "360"
                }).render();
            </script>
        </body>
        </html>
    `;

    return (
        <iframe
            title="Church Location"
            srcDoc={mapScript}
            style={{ width: '100%', height: '100%', border: 'none' }}
        />
    );
};

export default KakaoMap;
