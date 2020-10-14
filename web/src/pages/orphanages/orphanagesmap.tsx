import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import mapMarkerImg from "../../images/map-market.svg";
import "./orphanagesmap.css";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
const orphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Canindé</strong>
                    <strong>Ceará</strong>
                </footer>
            </aside>

            <Map
                center={[-4.354304, -39.3083139]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}>

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <div>
                <Link to="" className="create-orphanage">
                    <FiPlus size={32} color="#fff" />
                </Link>
            </div>
        </div>
    );
};

export default orphanagesMap;
