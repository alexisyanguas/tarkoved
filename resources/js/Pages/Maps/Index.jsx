import React from "react";
import Layout from "../../Components/Layouts/Layout";

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
                                className="map-container_list_item"
                                href={`/test/maps/${map.code}`}
                            >
                                <div className="map-container_list_item_infos">
                                    <span>{map.name}</span>
                                </div>
                                <img
                                    src={`/img/maps-bg/${map.normalizedName}.jpg`}
                                    alt={map.normalizedName}
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
