import _ from "lodash";
import {Promise} from "es6-promise";
import axiosService from 'service/axios-service/axiosService';
Promise.polyfill();

export default class MenuService {

    getMenu() {
        return new Promise((resolve, reject) => {
            axiosService.request({
                url: '/api/menus',
                method: 'GET'
            }).then(res => {
                const menuTree = {};
                const navigators = {};
                _.forEach(res.data, function (item) {
                    _.set(menuTree, item.state, item.childItems);
                    _.set(navigators, item.state, item.name);
                });
                const menu = {
                    menuTree,
                    navigators,
                    defaultState: this.getDefaultState(menuTree),
                    modules: this.getModules(menuTree)
                };
                typeof resolve === 'function' && resolve(menu);
            }).catch(error => {
                typeof reject === 'function' && reject(error);
            })
        })
    }

    getSidebarMenu(menuTree, nav) {
        return _.result(menuTree, nav);
    }

    getCurrentItem(menus, currentState) {
        const currentItem = [];
        MenuService.findCurrentItem(menus, currentState, currentItem);
        return currentItem[0];
    }

    getParentItem(menus, currentItem) {
        const parentItem = [];
        MenuService.findParentItem(menus, currentItem, parentItem);
        return parentItem[0];
    }

    getDefaultState(menuTree) {
        const modules = this.getModules(menuTree);
        if (!_.isEmpty(modules)) {
            return _.get(modules[0], 'state');
        }
    }

    getModules(menuTree) {
        const modules = [];
        _.forIn(menuTree, function (value, key) {
            if (!_.isEmpty(value)) {
                const moduleItem = {};
                const moduleItems = [];
                _.set(moduleItem, 'type', key);
                MenuService.findModuleItem(moduleItems, value);
                _.set(moduleItem, 'state', moduleItems[0]);
                modules.push(moduleItem);
            }
        });
        return modules;
    }

    static findModuleItem(moduleItems, menuTreeValue) {
        _.forEach(menuTreeValue, function (item) {
            if (item.state.indexOf('.') !== -1) {
                moduleItems.push(_.get(item, 'state'));
            } else if (MenuService.hasChildItems(item)) {
                MenuService.findModuleItem(moduleItems, item.childItems);
            }
        })
    }

    static findCurrentItem(items, currentState, currentItem) {
        _.forEach(items, function (item) {
            if (item.state === currentState) {
                currentItem.push(item);
            } else if (MenuService.hasChildItems(item)) {
                MenuService.findCurrentItem(item.childItems, currentState, currentItem);
            }
        })
    }

    static findParentItem(items, currentItem, parentItem) {
        const fatherItem = _.find(items, {id: currentItem.fatherId});
        if (_.isEmpty(fatherItem)) {
            _.forEach(items, function (item) {
                if (MenuService.hasChildItems(item)) {
                    MenuService.findParentItem(item.childItems, currentItem, parentItem);
                }
            })
        } else {
            parentItem.push(fatherItem);
        }
    }

    static hasChildItems(item) {
        return !!item.childItems && item.childItems.length > 0;
    }
}