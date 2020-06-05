import React from "react"
import {
    Descriptions, 
    Button,
    Divider, 
    Input,
    InputNumber,
    Row,
    Col,
    Form
} from "antd"
import { EditOutlined } from '@ant-design/icons'
import { useCustomInput, useCustomInputNumer, useCustomInputNumerRechnung } from "../../helpers/customHooks";

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
}

const FormComponent = () => {
    return (
        <div>
            <Descriptions title="Lieferant" bordered size="small">
                <Descriptions.Item style={{ width: 250 }} label="Name" span={3}>
                    {useCustomInput()}
                </Descriptions.Item>
                <Descriptions.Item
                    style={{ width: 250 }}
                    label="E-mail"
                    span={3}
                >
                    {useCustomInput('email')}
                </Descriptions.Item>
                <Descriptions.Item
                    style={{ width: 250 }}
                    label="Stadt"
                    span={3}
                >
                    {useCustomInput()}
                </Descriptions.Item>
                <Descriptions.Item style={{ width: 250 }} label="PL2" span={3}>
                    {useCustomInputNumer()}
                </Descriptions.Item>
                <Descriptions.Item
                    style={{ width: 250 }}
                    label="Straße"
                    span={3}
                >
                    {useCustomInput()}
                </Descriptions.Item>
                <Descriptions.Item
                    style={{ width: 250 }}
                    label="Telefon"
                    span={3}
                >
                    {useCustomInput()}
                </Descriptions.Item>
            </Descriptions>

            <Divider />

            <Descriptions title="Rechnungsinformationen" bordered size="small">
                <Descriptions.Item
                    style={{ width: 250 }}
                    label="Rechnungsnummer"
                    span={3}
                >
                    {useCustomInputNumerRechnung()}
                </Descriptions.Item>
                <Descriptions.Item
                    style={{ width: 250 }}
                    label="Rechnungsdatum"
                    span={3}
                >
                    {useCustomInputNumerRechnung()}
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default FormComponent;
