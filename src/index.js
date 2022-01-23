/*
 * @Author: Sunny
 * @Date: 2022-01-15 18:44:47
 * @LastEditors: Suuny
 * @LastEditTime: 2022-01-15 18:48:21
 * @Description: 
 * @FilePath: /webpack-loader/src/index.js
 */

import data from './foo.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = data.note.body;
    element.classList.add('header');
    console.log(data);
    return element;
}

document.body.appendChild(component());