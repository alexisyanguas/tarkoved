export const AmmoInfoItem = ({ className, text }) => {
    return (
        <div className={`ammo-list_table_row-item ${className}`}>{text}</div>
    );
};

const AmmoItem = ({ ammo, index }) => {
    const getGoodOrBadClass = ({ float }) => {
        switch (true) {
            case float < 0:
                return "best";
            case float * 100 <= 25:
                return "belowaverage";
            case float * 100 <= 50:
                return "bad";
            case float * 100 > 100:
                return "none";
            default:
                return "";
        }
    };

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
                    <AmmoInfoItem className="damage" text={ammo?.damage} />
                    <AmmoInfoItem
                        className="penetration"
                        text={ammo?.armorDamage}
                    />
                    <AmmoInfoItem
                        className="frag"
                        text={
                            (ammo?.fragmentationChance * 100).toFixed(0) + "%"
                        }
                    />

                    <AmmoInfoItem
                        className={`recoil ${getGoodOrBadClass({
                            float: ammo?.recoilModifier,
                        })}`}
                        text={
                            ammo?.recoilModifier
                                ? Math.round(ammo?.recoilModifier * 100)
                                : ""
                        }
                    />
                    <AmmoInfoItem
                        className={`accuracy ${getGoodOrBadClass({
                            float: ammo?.accuracyModifier,
                        })}`}
                        text={
                            ammo?.accuracyModifier
                                ? `${Math.round(
                                      ammo?.accuracyModifier * 100
                                  )} %`
                                : ""
                        }
                    />

                    <AmmoInfoItem
                        className={`speed`}
                        text={`${ammo?.initialSpeed} m/s`}
                    />
                </div>
            </div>
        </div>
    );
};

export default AmmoItem;
