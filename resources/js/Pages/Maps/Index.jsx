import React from "react";
import Layout from "../../Components/Layouts/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Index = ({ layoutDatas, maps }) => {
    console.log(`maps`, maps);

    return (
        <Layout title={layoutDatas.title} page={layoutDatas.page}>
            <div className="map-container">
                <div className="map-container_list">
                    {Object.keys(maps).map((key) => {
                        const map = maps[key];
                        return (
                            <a
                                key={key}
                                className="map-container_list_item"
                                href={`/test/maps/${map?.normalizedName}`}
                            >
                                <div className="map-container_list_item_infos">
                                    <span className="map-container_list_item_infos-name">
                                        {map?.name}
                                    </span>
                                    <span className="map-container_list_item_infos-players">
                                        <FontAwesomeIcon icon={faPeopleGroup} />
                                        {map?.players}
                                    </span>
                                </div>
                                <img
                                    src={`/img/maps-bg/${map?.normalizedName}.jpg`}
                                    alt={map?.normalizedName}
                                />
                                <span>{map.name}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Index;
