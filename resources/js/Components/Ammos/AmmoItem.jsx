const AmmoItem = ({ ammo, index }) => {
    console.log(ammo);
    return (
        <div
            className="ammo-list_table_row"
            key={`${index}-ammo-${ammo.item.id}`}
        >
            <div className="ammo-list_table_row-data">
                <div className="ammo-list_table_row-main_data">
                    <div className="ammo-list_table_row-main_data-icon">
                        <img src="/img/traders/54cb50c76803fa8b248b4571.jpg" />
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
                    <div className="ammo-list_table_row-recoil">
                        {ammo?.recoilModifier}
                    </div>
                    <div className="ammo-list_table_row-accuracy">+10%</div>
                    <div className="ammo-list_table_row-speed">878 m/s</div>
                </div>
            </div>
        </div>
    );
};

export default AmmoItem;
