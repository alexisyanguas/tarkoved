const SVG = ({
    width = 18,
    height = 18,
    fill = "none",
    viewBox = "0 0 18 18",
    stroke = "var(--colors-tarkovYellow-50)",
    children,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            stroke={stroke}
        >
            {children}
        </svg>
    );
};

export { SVG };
