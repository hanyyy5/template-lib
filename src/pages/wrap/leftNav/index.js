import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { Link } from 'react-router-dom';
import ROUTES from '../../../config/routes.config';
import _ from "lodash";

const routes = _.clone(ROUTES);
const { SubMenu } = Menu;

class LeftNav extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            activeKey: "Overview",
            openKey: ""
        };
    }
    componentWillMount() {
        console.log("route====", routes)
    }
    componentDidMount() {
        let pathname = window.location.pathname;
        pathname === "/" && (pathname = "/overview");
        let keyPath = [pathname];
        let index = _.findIndex(routes, route => route.link === pathname);
        let activeKey = "";
        if (index === -1) {
            routes.forEach((item, index) => {
                item.children && item.children.forEach(child => {
                    if(child.link === pathname) {
                        keyPath.push(item.key);
                        activeKey = child.key;
                        this.setState({openKey: item.key});
                    }
                 
                })
            })
        }else{
            activeKey = routes[index]['key']
        }
        this.setState({activeKey: activeKey});
        this.props.updateActive(activeKey, keyPath);
    }

    handleClick = (e) => {
        this.setState({activeKey: e.key});
        this.props.updateActive(e.key, e.keyPath);
    };

    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[this.state.activeKey]}
                style={{ lineHeight: '64px' }}
                onClick={this.handleClick}
                defaultOpenKeys={[this.state.openKey]}
            >
                {
                    routes.map((route) =>
                            !route.children ?
                            <Menu.Item key={route.key}>
                                <Link to={route.link}><b>{route.text}</b></Link>
                            </Menu.Item>
                            :
                            <SubMenu key={route.key} title={route.text}>
                                {
                                    route.children.map(subRoute =>  
                                        <Menu.Item key={subRoute.key}>
                                            <Link to={subRoute.link}><b>{subRoute.text}</b></Link>
                                        </Menu.Item>)
                                }
                               
                            
                            </SubMenu>
                        
                    )
                }
            </Menu>
        );
    }
}

LeftNav.contextTypes = {
    router: PropTypes.object
};

export default LeftNav;