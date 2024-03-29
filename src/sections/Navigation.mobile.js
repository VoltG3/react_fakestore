import React, { useState } from 'react'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import {ReactComponent as MenuMobile} from '../components/svg/menu.svg'
import {ReactComponent as MenuClose} from '../components/svg/close.svg'

import Logo from '../components/svg/Logo.js'
import NavigationDesktop from './Navigation.desktop.js'

export const NavigationMobile = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false
    })

    return (
        <div>
            <div
                style={{ marginTop: "10px" }}>
                <div onClick={() => setState({ isPaneOpenLeft: true })}>
                    <MenuMobile />
                </div>
            </div>

            <SlidingPane
                closeIcon={<MenuClose
                    width="100pt"
                    height="100pt"
                    fill="var(--color-primary)"
                    />}
                isOpen={state.isPaneOpenLeft}
                title={<Logo />}
                from="left"
                width="100%"
                onRequestClose={() => setState({ isPaneOpenLeft: false })}
            >
                <NavigationDesktop />
            </SlidingPane>
        </div>
    )
}
