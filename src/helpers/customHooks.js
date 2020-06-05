import React, { useState } from 'react'
import { Input, InputNumber, Row, Col, Button } from 'antd'
import { EditOutlined, CheckOutlined, DeleteOutlined } from '@ant-design/icons'

const useCustomInput = (rules) => {

    const [status, setStatus] = useState(true)

    const handleStatus = () => {
        setStatus(!status)
    }

    return (
        <Row justify="space-between">
            <Col>
                <Input
                    disabled={status}
                    style={{ minWidth: 300 }}
                    // rules={[{ type: "email" }]}
                    rules={rules === 'email' ? [{ type: "email" }] : null}
                />
            </Col>
            <Col pull={3}>
                <Button
                    onClick={() => handleStatus()}
                    type="link"
                    icon={<EditOutlined />}
                    size="large"
                />
            </Col>
        </Row>
    );
}

const useCustomInputNumer = () => {

    const [status, setStatus] = useState(true)

    const handleStatus = () => {
        setStatus(!status)
    }

    return (
        <Row justify="space-between">
            <Col>
                <InputNumber
                    style={{ minWidth: 300 }}
                    min={1}
                    disabled={status}
                />
            </Col>
            <Col pull={3}>
                <Button
                    onClick={() => handleStatus()}
                    type="link"
                    icon={<EditOutlined />}
                    size="large"
                />
            </Col>
        </Row>
    )
}

const useCustomInputNumerRechnung = () => {

    const [status, setStatus] = useState(true)

    const handleStatus = () => {
        setStatus(!status)
    }

    return (
        <Row justify="space-between">
            <Col>
                <Input 
                    style={{ minWidth: 300 }} 
                    disabled={status} 
                />
            </Col>
            <Col pull={3}>
                <Button
                    type="link"
                    onClick={() => handleStatus()}
                    icon={<CheckOutlined />}
                    size="large"
                />
                <Button type="link" icon={<DeleteOutlined />} size="large" />
            </Col>
        </Row>
    );
}

export {
    useCustomInput,
    useCustomInputNumer,
    useCustomInputNumerRechnung
}
