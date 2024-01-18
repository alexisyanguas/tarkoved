import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";
import { caliberArrayWithSplit } from "../../Modules/format-calibers";

export default function Index({ layoutDatas, ammos }) {
    const [caliberArray, setCaliberArray] = useState(ammos);
    const caliberMap = caliberArrayWithSplit();
    console.log(caliberMap);

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
                        {Object.keys(caliberArray).map((caliberGroup, key) => {
                            if (skipTypes.includes(caliberGroup)) return;
                            return (
                                <button
                                    className="ammo-basic-button_bullet"
                                    key={key}
                                >
                                    <p>
                                        <SVG>
                                            {
                                                caliberMap[caliberGroup]
                                                    ?.component
                                            }
                                        </SVG>
                                    </p>
                                    <p>{caliberMap[caliberGroup]?.name}</p>
                                </button>
                            );
                        })}
                    </div>
                    <div className="ammo-list">
                        <div className="ammo-list_header">
                            <div className="ammo-list_header_searchBar">
                                <div className="ammo-list_header_searchBar_wrapper">
                                    <input
                                        className="ammo-list_header_searchBar_input"
                                        placeholder="Enter the name of the ammo"
                                    ></input>
                                    <div class="ammo-list_header_searchBar_searchBtn">
                                        <svg
                                            id="loupeIco"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_4498_12066)">
                                                <path
                                                    d="M12.9167 11.6667H12.2583L12.025 11.4417C12.8417 10.4917 13.3333 9.25833 13.3333 7.91667C13.3333 4.925 10.9083 2.5 7.91667 2.5C4.925 2.5 2.5 4.925 2.5 7.91667C2.5 10.9083 4.925 13.3333 7.91667 13.3333C9.25833 13.3333 10.4917 12.8417 11.4417 12.025L11.6667 12.2583V12.9167L15.8333 17.075L17.075 15.8333L12.9167 11.6667ZM7.91667 11.6667C5.84167 11.6667 4.16667 9.99167 4.16667 7.91667C4.16667 5.84167 5.84167 4.16667 7.91667 4.16667C9.99167 4.16667 11.6667 5.84167 11.6667 7.91667C11.6667 9.99167 9.99167 11.6667 7.91667 11.6667Z"
                                                    fill="var(--colors-tarkovYellow-50)"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_4498_12066">
                                                    <rect
                                                        width="20"
                                                        height="20"
                                                        fill="white"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="ammo-list_header_buttons_wrapper">
                                <button
                                    id="damage"
                                    class="ammo-list_header_buttons_damage"
                                >
                                    Damage
                                    <svg
                                        class=" ammo-arrow-icon ammo-arrow-icon_hidden "
                                        width="10"
                                        height="5"
                                        viewBox="0 0 10 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 5L5 0L10 5H0Z"
                                            fill="var(--colors-kmrBlack-50)"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    id="armorPenetration"
                                    class="ammo-list_header_buttons_penetration"
                                >
                                    Penetration
                                    <svg
                                        class=" ammo-arrow-icon ammo-arrow-icon_hidden "
                                        width="10"
                                        height="5"
                                        viewBox="0 0 10 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 5L5 0L10 5H0Z"
                                            fill="var(--colors-kmrBlack-50)"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    id="armorFrag"
                                    class="ammo-list_header_buttons_frag"
                                >
                                    Frag
                                    <svg
                                        class=" ammo-arrow-icon ammo-arrow-icon_hidden "
                                        width="10"
                                        height="5"
                                        viewBox="0 0 10 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 5L5 0L10 5H0Z"
                                            fill="var(--colors-kmrBlack-50)"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    id="recoil"
                                    class="ammo-list_header_buttons_recoil"
                                >
                                    Recoil
                                    <svg
                                        class=" ammo-arrow-icon ammo-arrow-icon_hidden "
                                        width="10"
                                        height="5"
                                        viewBox="0 0 10 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 5L5 0L10 5H0Z"
                                            fill="var(--colors-kmrBlack-50)"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    id="accuracy"
                                    class="ammo-list_header_buttons_accuracy"
                                >
                                    Accuracy
                                    <svg
                                        class=" ammo-arrow-icon ammo-arrow-icon_hidden "
                                        width="10"
                                        height="5"
                                        viewBox="0 0 10 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 5L5 0L10 5H0Z"
                                            fill="var(--colors-kmrBlack-50)"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    id="speed"
                                    class="ammo-list_header_buttons_speed"
                                >
                                    Speed
                                    <svg
                                        class=" ammo-arrow-icon ammo-arrow-icon_hidden "
                                        width="10"
                                        height="5"
                                        viewBox="0 0 10 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 5L5 0L10 5H0Z"
                                            fill="var(--colors-kmrBlack-50)"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="ammo-list_table">
                            <div className="ammo-list_table_row">
                                <div className="ammo-list_table_row-data">
                                    <div className="ammo-list_table_row-main_data">
                                        <div className="ammo-list_table_row-main_data-icon">
                                            <img src="/img/traders/54cb50c76803fa8b248b4571.jpg" />
                                            <p>M61</p>
                                        </div>
                                        <div className="ammo-list_table_row-main_data-info">
                                            <span className="ammo-list_table_row-main_data-info_name">
                                                M61
                                            </span>
                                            <div className="ammo-list_table_row-main_data-info_penetration">
                                                <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_best">
                                                    6
                                                </p>
                                                <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_best">
                                                    6
                                                </p>
                                                <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_best">
                                                    6
                                                </p>
                                                <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_good">
                                                    5
                                                </p>
                                                <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_average">
                                                    4
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ammo-list_table_row-other_data">
                                        <div className="ammo-list_table_row-damage">
                                            78
                                        </div>
                                        <div className="ammo-list_table_row-penetration">
                                            2
                                        </div>
                                        <div className="ammo-list_table_row-frag">
                                            40%
                                        </div>
                                        <div className="ammo-list_table_row-recoil">
                                            -7
                                        </div>
                                        <div className="ammo-list_table_row-accuracy">
                                            +10%
                                        </div>
                                        <div className="ammo-list_table_row-speed">
                                            878 m/s
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
