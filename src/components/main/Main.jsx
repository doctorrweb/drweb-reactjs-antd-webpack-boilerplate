import React, { useState, useEffect } from 'react'
import { Row, Col, Steps, Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import MainMenu from '../../containers/MainMenu'
import MainContent from './MainContent'
import Preview from './Preview'
import { DrawerProvider } from '../../helpers/contextProviders'

const Main = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        console.log('visible Form', visible)
    })

    const onClose = () => {
        return setVisible(!visible)
    }

    return (
        <Row justify="space-between" >
            <DrawerProvider.Provider value={{ onClose }}>
                <MainMenu visibility={visible} />
            </DrawerProvider.Provider>

            <Col lg={12} md={12} >
                <Row justify="space-between">
                    <Col lg={20}>
                        <Button
                            type="link"
                            size="large"
                            onClick={() => setVisible(!visible)}
                            icon={
                                <MenuOutlined
                                    style={{
                                        fontSize: "2.5em",
                                        height: "2em",
                                    }}
                                />
                            }
                        />
                    </Col>
                    <Col lg={4}>pagination</Col>
                </Row>

                <MainContent />
            </Col>

            <Col lg={10} md={10}>
                <Preview />
            </Col>
        </Row>
    )
}

export default Main
