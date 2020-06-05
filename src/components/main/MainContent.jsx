import React, { useState } from 'react'
import { Steps, Row, Col, Button, notification } from 'antd'
import styles from '../../styles/styles'
import data from '../../../data/data.json'
import EditableTable from './EditaleTable'
// import FormComponent from './FormComponent'

const { Step } = Steps
const { styleAction, styleContent } = styles
const { steps } = data


const MainContent = () => {

    const [current, setCurrent] = useState(0)

    const openNotificationWithIcon = (type) => {
        notification[type]({
            message: "Notification Title",
            description:
                "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        })
    }

    const next = () => {
        setCurrent(current + 1)
    }

    const prev = () => {
        setCurrent(current - 1)
    }

    return (
        <Row justify="space-between" style={{ marginTop: 50 }}>
            <Steps current={current} size="small">
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>

            <div style={styleAction}>
                {current < steps.length - 1 && (
                    <Button size="small" type="primary" onClick={() => next()}>
                        Weiter
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button
                        type="primary"
                        size="small"
                        onClick={() => openNotificationWithIcon("success")}
                    >
                        Fertig
                    </Button>
                )}
                {current > 0 && (
                    <Button
                        size="small"
                        style={{ margin: "0 8px" }}
                        onClick={() => prev()}
                    >
                        Vorherige
                    </Button>
                )}
            </div>

            {/* <div style={styleContent}>{steps[current].content}</div> */}
            <div style={styleContent}>
                <EditableTable />
            </div>
        </Row>
    );
}

export default MainContent
