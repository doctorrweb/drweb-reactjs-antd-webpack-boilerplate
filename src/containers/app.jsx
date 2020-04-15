import React from 'react'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout


const App = () => {
    return (
        <Layout>
            <Header
                theme="light"
                style={{ position: 'fixed', backgroundColor: '#EFEFEF' }}
            >
                Header
            </Header>
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
                    <p>...Put your content here</p>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>ReactJS-Antd-Webpack Boilerplate ©2020 Created by doctorrWeb</Footer>
        </Layout>
    );
}

export default App