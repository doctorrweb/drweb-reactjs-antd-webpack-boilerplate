import React, { useState, useEffect } from 'react'
import { Row, Col, Steps, Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import MainMenu from './MainMenu'
import { DrawerProvider } from '../helpers/contextProviders'

const Form = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        console.log('visible Form', visible)
    })

    const onClose = () => {
        return setVisible(!visible)
    }

    return (
        <Row>
        <DrawerProvider.Provider
            value={{ onClose }}
        >
            <MainMenu visibility={visible} />
        </DrawerProvider.Provider>
            <Row justify="space-between">
                <Col lg={14} md={14}>
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
                </Col>
                <Col lg={10} md={10}>
                    Preview
                </Col>
            </Row>
        </Row>
    );
}

export default Form
