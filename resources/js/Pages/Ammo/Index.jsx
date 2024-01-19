import React, { useMemo, useState, useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";
import AmmoHeader from "../../Components/Ammos/AmmoHeader";
import AmmoItem from "../../Components/Ammos/AmmoItem";
import { caliberArrayWithSplit } from "../../Modules/format-calibers";

export default function Index({ layoutDatas, ammos }) {
    const calibers = caliberArrayWithSplit();
    const [caliberSelected, setCaliberSelected] = useState(null);
    const [search, setSearch] = useState("");

    const filterAmmos = useMemo(() => {
        let tempFilteredCaliber = Object.entries(ammos);

        if (caliberSelected !== null) {
            tempFilteredCaliber = Object.entries(ammos).filter((ammo) => {
                return ammo[1][0].caliber === caliberSelected;
            });
        }

        // console.log(tempFilteredCaliber, search);

        // if (search !== "") {
        //     tempFilteredCaliber = tempFilteredCaliber.filter((ammo) => {
        //         console.log(ammo[1][0].item.shortName);
        //         return ammo[1][0].item.shortName
        //             .toLowerCase()
        //             .includes(search.toLowerCase());
        //     });
        // }
        return tempFilteredCaliber;  
    }, [caliberSelected, search]);

    return (
        <Layout
            title={layoutDatas.title}
            page={layoutDatas.page}
            user={layoutDatas.user}
        >
            <div className="ammo-parent_container">
                <div className="ammo-container">
                    <div className="ammo-filter_container">
                        {calibers.map((caliber, index) => {
                            return (
                                <button
                                    key={`caliber-${index}`}
                                    onClick={() => {
                                        setCaliberSelected(caliber.id ?? null);
                                    }}
                                    className={`ammo-basic-button_bullet ${
                                        caliberSelected === caliber.id &&
                                        "active"
                                    }`}
                                >
                                    <p>
                                        <SVG>{caliber?.component}</SVG>
                                    </p>
                                    <p>{caliber?.name}</p>
                                </button>
                            );
                        })}
                    </div>
                    <div className="ammo-list">
                        <AmmoHeader
                            handleSearch={(e) => setSearch(e.target.value)}
                            search={search}
                        />
                        <div className="ammo-list_table">
                            {filterAmmos.map((ammo, index) => {
                                return ammo[1].map((ammo) => {
                                    return (
                                        <AmmoItem
                                            ammo={ammo}
                                            index={`caliber_group-${index}`}
                                        />
                                    );
                                });
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
