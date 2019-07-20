import React, { Component } from 'react';
import { Button, Icon, Layout, Menu } from 'antd';
import { Link } from 'umi';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class AppBasicLayout extends Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(): any {
    return (
      <Layout>
        <Sider style={{ textAlign: 'center', height: '100vh' }}>
          <div>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.ItemGroup key="/" title="引人注的目标题">
                <Menu.Item key="/welcome">
                  <Link to="/">Welcome</Link>
                </Menu.Item>
                <Menu.Item key="2">这个没有路由</Menu.Item>
              </Menu.ItemGroup>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>aaa</span>
                  </span>
                }
              >
                <Menu.Item key="/aaa/a01">
                  <Link to="/aaa/a01">aaa/a01</Link>
                </Menu.Item>
                <Menu.Item key="/aaa/a02">
                  <Link to="/aaa/a02">aaa/a02</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>以上是</span>
                  </span>
                }
              >
                <Menu.Item key="9">umi</Menu.Item>
                <Menu.Item key="10">Link组件</Menu.Item>
                <Menu.Item key="11">演示</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </div>
        </Sider>
        <Layout>
          <Header style={{ textAlign: 'center' }}>Header</Header>
          <Content style={{ textAlign: 'center', minHeight: '70vh' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AppBasicLayout;
