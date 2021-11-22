import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const AppComponent = () => {

    const imageData = [
        {
            tile: "Mark I",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/fb/Iron_Man_Armor_-_Mark_I.png"
        },
        {
          title: "Mark II",
          url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0d/Iron_Man_Armor_-_Mark_II.png"
        },
        {
          title: "Mark III",
          url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/47/Iron_Man_Armor_-_Mark_III.png"
        },
        {
            title: "Mark IV",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6a/Iron_Man_Armor_-_Mark_IV.png"
        },
        {
            title: "Mark XLIV",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0b/Iron_Man_Armor_-_Mark_XLIV.png"
        },
        {
            title: "Mark L",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a0/Iron_Man_Armor_-_Mark_L.png"
        },
        {
            title: "Mark LXXXV",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f2/Iron_Man_Armor_-_Mark_LXXXV.png"

        },
        {
            title: "Mark XLIX",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/7a/Iron_Man_Armor_-_Mark_XLIX.png"
        },
        {
            title: "Iron Legion",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e5/IronLegionArmorDrone03.PNG"
        },
        {
            title: "War Machine I",
            url:
            "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/78/War_Machine_Armor_-_Mark_I.png"
        }
    ];

    return (
        <div className="base">
            <div className="base-container">
                {imageData.map(
                (item) => (
                    (
                        <ImagePanel myStyle={{ backgroundImage: `url(${item.url})` }}>
                            <h3>{item.title}</h3>
                        </ImagePanel>
                    )
                )
                )}
            </div>
        </div>
    )

}

export default AppComponent;

const ImagePanel = (props) => {

    const [active, setActive] = useState(false);

    const handleClick = (e) => {
        setActive((prev) => !prev);
      };

    return (
        <div className={`${active ? "panel active" : "panel"}`} style={props.myStyle} onClick={handleClick}>
            {props.children}
        </div>
);
               
};