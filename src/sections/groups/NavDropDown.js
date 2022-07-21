import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SvgMenuMobile from "./components/svg/SvgMenuMobile.js"
import NavProducts from "./NavProducts.js";

export const NavDropDown = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false
    });

    return (
        <div>
            <div
                style={{ marginTop: "10px" }}>
                <div onClick={() => setState({ isPaneOpenLeft: true })}>
                    <SvgMenuMobile />
                </div>
            </div>

            <SlidingPane
                closeIcon={<div>Close</div>}
                isOpen={state.isPaneOpenLeft}
                title="Products"
                from="left"
                width="100%"
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
            >
                <NavProducts />
            </SlidingPane>


        </div>
    );
};
