import React from 'react'
import { Layout, Typography } from 'antd'

const { Header, Content, Footer } = Layout
const { Title } = Typography


const App = () => {
    return (
        <Layout>
            <Layout
                style={{
                    background: '#fff',
                    // minHeight: '100%',
                    marginTop: 100
                }}
            >
                <Content
                    style={{ margin: '0 16px', minHeight: 750 }}
                >
                    <Title level={1}>doctorrWeb Boilerplate</Title>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>ReactJS-Antd-Webpack Boilerplate ©2020 Created by doctorrWeb</Footer>
        </Layout>
    )
}

export default App