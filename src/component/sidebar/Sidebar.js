import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Icon} from "antd";
import _ from "lodash";
import "./index.scss"

const mapStateToProps = state => {
    return {
        menuData: state.MenuReducer.data
    }
};

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.currentState = props.location.pathname;
        this.menus = _.result(props.menuData.menuTree, props.nav);
    }

    componentDidMount() {
        const defaultNavItem = this.getDefaultNavItem();
        if (defaultNavItem === undefined) {
            this.props.history.replace('/forbidden');
            return;
        }
        this.setActiveNavItem(defaultNavItem);
        this.openNavItem(defaultNavItem);
        if (this.hasChildItems(defaultNavItem)) {
            this.setActiveChildNavItem(defaultNavItem.childItems);
        }
    }

    getDefaultNavItem() {
        const currentState = this.currentState;
        return _.find(this.menus, function (navItem) {
            if (navItem.state === currentState || _.some(navItem.childItems, {state: currentState})) {
                return navItem;
            }
        })
    }

    setActiveNavItem(navItem) {
        if (this.hasChildItems(navItem)) {
            this.clearParentActiveStatus();
        } else {
            this.clearActiveStatusWithChildItems();
            navItem.isActive = true;
            if (!!navItem.state) {
                this.props.history.replace(navItem.state);
            }
        }
    }

    setActiveChildNavItem(childNavItems) {
        const currentState = this.currentState;
        this.clearActiveStatusWithChildItems();
        if (_.isArray(childNavItems)) {
            childNavItems.forEach(function (navItem) {
                navItem.isActive = navItem.state === currentState;
            });
        } else {
            childNavItems.isActive = true;
        }
    }

    openNavItem(navItem) {
        navItem.isOpen = this.hasChildItems(navItem);
        this.forceUpdate();
    }

    onOpenNavItem(navItem) {
        if (this.hasChildItems(navItem)) {
            navItem.isOpen = !navItem.isOpen;
        } else {
            navItem.isOpen = false;
        }
        this.forceUpdate();
    }

    clearParentActiveStatus() {
        this.menus.forEach(function (navItem) {
            navItem.isActive = false;
        })
    }

    clearActiveStatusWithChildItems() {
        this.menus.forEach(function (navItem) {
            navItem.isActive = false;
            navItem.childItems.forEach(function (childItem) {
                childItem.isActive = false;
            })
        })
    }

    hasChildItems(navItem) {
        return !!navItem.childItems && navItem.childItems.length > 0;
    }

    menuIcon(navItem) {
        return <Icon type={navItem.isOpen ? 'caret-down' : 'caret-right'}/>
    }

    openOrActiveClass(navItem) {
        const basic = "nav-item";
        const openClass = navItem.isOpen ? "is-open" : "";
        const activeClass = navItem.isActive ? "active" : "";
        return basic + " " + openClass + " " + activeClass;
    }

    activeClass(navItem) {
        const basic = "child-nav-item";
        const activeClass = navItem.isActive ? "active" : "";
        return basic + " " + activeClass;
    }

    render() {
        return (
            <aside className="app-sidebar">
                <ul className="list-unstyled menu">
                    {
                        this.menus && this.menus.map((navItem, index) => {
                            return (
                                <li key={'li_' + index} className={this.openOrActiveClass(navItem)}>
                                   <span key={'span_' + index}
                                         className="item-name nav-item-content"
                                         onClick={() => {
                                             this.setActiveNavItem(navItem);
                                             this.onOpenNavItem(navItem)
                                         }}>
                                       {this.hasChildItems(navItem) ? this.menuIcon(navItem) : null}
                                       {navItem.name}
                                   </span>
                                    {
                                        navItem.isOpen ?
                                            <ul key={'subMenu_ul'} className="list-unstyled sub-menus">
                                                {
                                                    navItem.childItems.map((childItem, itemIndex) => {
                                                        return (
                                                            <li key={'submenu_li_' + itemIndex}
                                                                className={this.activeClass(childItem)}
                                                                onClick={() => {
                                                                    this.setActiveChildNavItem(childItem);
                                                                    this.setActiveNavItem(childItem)
                                                                }}>
                                                                <a className="item-name">{childItem.name}</a>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul> : null
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </aside>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Sidebar));