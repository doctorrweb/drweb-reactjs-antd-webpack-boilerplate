import React from 'react'
import { Layout } from 'antd'
import Main from '../components/main/Main'

const { Header, Content, Footer } = Layout


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
                    <Main />
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>ReactJS-Antd-Webpack Boilerplate ©2020 Created by doctorrWeb</Footer>
        </Layout>
    )
}

export default App