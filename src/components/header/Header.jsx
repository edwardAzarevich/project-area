const [hover, setHover] = useState(false); // initial false

const HoverData = "Click or pinch to Zoom Image";

const onHover = (e) => {
    e.preventDefault();
    setHover(true); // turn true
    console.log("hovered");
};

const onHoverOver = (e) => {
    e.preventDefault(); // turn false
    setHover(false);
};
return (
    <div className="flex_center py-5">
        {/* if hover is true then only show the text */}
        {hover && <p className={hover}>{HoverData}</p>}
        <img
            onMouseEnter={(e) => onHover(e)}
            onMouseLeave={(e) => onHoverOver(e)}
            alt=""
            src="some image link"
            className="img-responsive"
        />
    </div>
);