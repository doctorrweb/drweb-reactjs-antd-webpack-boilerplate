import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Steps, Drawer, Button } from 'antd'
import { DrawerProvider } from '../helpers/contextProviders'

const MainMenu = ({visibility}) => {

    const DrawerContext = useContext(DrawerProvider)
    const { onClose } = DrawerContext

    useEffect(() => {
        console.log('visibbility MainMenu', visibility)
    })

    return (
        <Drawer
            title="Basic Drawer"
            placement="left"
            closable={false}
            onClose={() => onClose()}
            visible={visibility}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}

MainMenu.propTypes ={
    visibility: PropTypes.bool
}

export default MainMenu;
