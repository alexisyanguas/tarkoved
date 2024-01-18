const AmmoItem = ({ ammo, index }) => {
    return (
        <div
            className="ammo-list_table_row"
            key={`${index}-ammo-${ammo.item.id}`}
        >
            <div className="ammo-list_table_row-data">
                <div className="ammo-list_table_row-main_data">
                    <div className="ammo-list_table_row-main_data-icon">
                        <img
                            src={ammo?.item.image512pxLink ?? ""}
                            alt={ammo?.item.shortName}
                        />
                        <p>{ammo?.item?.shortName}</p>
                    </div>
                    <div className="ammo-list_table_row-main_data-info">
                        <span className="ammo-list_table_row-main_data-info_name">
                            {ammo?.item?.shortName}
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
                        {ammo?.damage}
                    </div>
                    <div className="ammo-list_table_row-penetration">
                        {ammo?.armorDamage}
                    </div>
                    <div className="ammo-list_table_row-frag">
                        {(ammo?.fragmentationChance * 100).toFixed(0) + "%"}
                    </div>
                    {/* <div className="ammo-list_table_row-recoil">
                        {ammo?.recoilModifier ? ammo?.recoilModifier * 100 : ""}
                    </div> */}
                    <div
                        className={`ammo-list_table_row-recoil ${
                            ammo?.recoilModifier < 0
                                ? "best"
                                : ammo?.recoilModifier * 100 <= 25
                                ? "belowaverage"
                                : ammo?.recoilModifier * 100 <= 50
                                ? "bad"
                                : ammo?.recoilModifier * 100 > 100
                                ? "none"
                                : ""
                        }`}
                    >
                        {ammo?.recoilModifier
                            ? Math.round(ammo?.recoilModifier * 100)
                            : ""}
                    </div>
                    <div
                        className={`ammo-list_table_row-accuracy ${
                            ammo?.accuracyModifier < 0
                                ? "none"
                                : ammo?.accuracyModifier * 100 <= 100
                                ? "good"
                                : ammo?.accuracyModifier * 100 > 100
                                ? "best"
                                : ""
                        }`}
                    >
                        {ammo?.accuracyModifier
                            ? Math.round(ammo?.accuracyModifier * 100) + "%"
                            : ""}
                    </div>
                    <div className="ammo-list_table_row-speed">
                        {ammo?.initialSpeed} m/s
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmmoItem;
