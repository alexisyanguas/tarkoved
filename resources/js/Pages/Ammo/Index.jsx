import React, { useMemo, useState, useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";
import AmmoHeader from "../../Components/Ammos/AmmoHeader";
import AmmoItem from "../../Components/Ammos/AmmoItem";
import { caliberArrayWithSplit } from "../../Modules/format-calibers";

const AmmoCaliberButton = ({ caliber, onClick, active, index }) => {
    return (
        <button
            key={`caliber-${index}`}
            onClick={onClick}
            className={`ammo-basic-button_bullet ${active ? "active" : ""}`}
        >
            <p>
                <SVG>{caliber?.component}</SVG>
            </p>
            <p>{caliber?.name}</p>
        </button>
    );
};

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
                                    <AmmoCaliberButton
                                        caliber={caliber}
                                        onClick={() => {
                                            setCaliberSelected(
                                                caliber.id ?? null
                                            );
                                        }}
                                        active={caliberSelected === caliber.id}
                                        index={index}
                                    />
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
