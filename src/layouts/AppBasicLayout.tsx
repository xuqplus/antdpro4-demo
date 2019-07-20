import React, { Component } from 'react'
import { Layout } from 'antd'

const {Header, Footer, Sider, Content} = Layout

class AppBasicLayout extends Component {
  render(): any {
    return (
      <Layout>
        <Sider style={{textAlign: 'center', height: '100vh'}}>Sider</Sider>
        <Layout>
          <Header style={{textAlign: 'center'}}>Header</Header>
          <Content style={{textAlign: 'center', minHeight: '70vh'}}>{this.props.children}</Content>
          <Footer style={{textAlign: 'center'}}>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default AppBasicLayout
