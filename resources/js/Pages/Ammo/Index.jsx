import React, { useMemo, useState, useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";
import AmmoHeader from "../../Components/Ammos/AmmoHeader";
import AmmoItem from "../../Components/Ammos/AmmoItem";
import { caliberArrayWithSplit } from "../../Modules/format-calibers";

const AmmoCaliberButton = ({ caliber, onClick, active }) => {
    return (
        <button
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

    const skipTypes = [
        "Caliber30x29",
        "Caliber127x108",
        "Caliber26x75",
        "Caliber40mmRU",
    ];

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
                                        setCaliberSelected(caliber.id ?? null);
                                    }}
                                    active={caliberSelected === caliber.id}
                                    key={`caliber-${index}`}
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
                                if (skipTypes.includes(ammo[0])) return null;
                                return (
                                    <details
                                        key={`caliber_group-${index}`}
                                        className="ammo-list_table-caliber_content"
                                        open
                                    >
                                        <summary className="ammo-list_table-caliber_name">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="10"
                                                height="5"
                                                viewBox="0 0 10 5"
                                                fill="none"
                                            >
                                                <path
                                                    d="M10 0L5 5L0 0L10 0Z"
                                                    fill="var(--colors-kmrWhite-100)"
                                                />
                                            </svg>
                                            <h3>
                                                {calibers.find(
                                                    (caliber) =>
                                                        caliber.id === ammo[0]
                                                )?.name ?? ammo[0]}
                                            </h3>
                                        </summary>
                                        {ammo[1].map((ammo) => {
                                            return (
                                                <AmmoItem
                                                    ammo={ammo}
                                                    key={`caliber_group_${index}-ammo_${ammo?.item?.id}`}
                                                />
                                            );
                                        })}
                                    </details>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
