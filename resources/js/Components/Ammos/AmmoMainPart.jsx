const AmmoPenetration = ({ ammo, armorClass, index }) => {
    return (
        <p
            key={`penetration-${index}`}
            className={`ammo-list_table_row-main_data-info_penetration_class bg_${"none"}`}
        >
            {1}
        </p>
    );
};

const AmmoMainPart = ({ ammo }) => {
    const armorClasses = [
        { id: 1, name: "Class 1", value: 1 },
        { id: 2, name: "Class 2", value: 2 },
        { id: 3, name: "Class 3", value: 3 },
        { id: 4, name: "Class 4", value: 4 },
        { id: 5, name: "Class 5", value: 5 },
        { id: 6, name: "Class 6", value: 6 },
    ];

    return (
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
                    {armorClasses.map((armorClass, index) => {
                        return (
                            <AmmoPenetration
                                armorClass={armorClass}
                                ammo={ammo}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AmmoMainPart;
