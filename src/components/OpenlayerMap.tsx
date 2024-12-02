import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import { OSM } from "ol/source";
import { useEffect } from "react";

function OpenlayerMap() {

    useEffect(() => {
        const map = new Map({
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            target: 'map',
            view: new View({
                center: fromLonLat([53.6880, 32.4279]),
                zoom: 3
            })
        })

        return () => {
            map.setTarget(undefined);
        }
    }, [])

    return (
        <div id="map" style={{ width: "100%", height: "100vh" }} tabIndex={0}></div>
    );
}

export default OpenlayerMap;