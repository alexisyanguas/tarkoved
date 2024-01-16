import React from "react";
import Layout from "../../Components/Layouts/Layout";

const Index = ({ layoutDatas, link }) => {
    const maps = {
        customs: {
            name: {
                en: "Customs",
                fr: "Douanes",
            },
            code: "customs",
            image: "/img/maps-bg/customs.jpg",
        },
        interchange: {
            name: {
                en: "Interchange",
                fr: "Echangeur",
            },
            code: "interchange",
            image: "/img/maps-bg/interchange.jpg",
        },
        reserve: {
            name: {
                en: "Reserve",
                fr: "Réserve",
            },
            code: "reserve",
            image: "/img/maps-bg/customs.jpg",
        },
    };

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
                                    <span>{map.name.en}</span>
                                    <span>{map.name.fr}</span>
                                </div>
                                <img src={map.image} alt={map.name.en} />
                                <span>{map.name.fr}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Index;
