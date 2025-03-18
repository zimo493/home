# home

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This template should help get you started developing with Vue 3 in Vite.

## use wow.js

### 属性

- wow：是必须要添加的
- slideInLeft：说明了动画的样式，是从左边滑动出来的；
- data-wow-duration：动画持续时间；
- data-wow-delay：动画延迟时间；
- data-wow-offset：元素的位置露出后距离底部多少像素执行；
- data-wow-iteration：动画执行次数；

### 动画样式

- wow rollIn 从左到右、顺时针滚动、透明度从100%变化至设定值

- wow bounceIn 从原位置出现，由小变大超出设定值，再变小小于设定值，再回归设定值、透明度从100%变化至设定值
- wow bounceInUp 从下往上、窜上来以后会向上超出一部分然后弹回去、透明度为设定值不变
- wow bounceInDown 从上往下、掉下来以后会向下超出一部分然后弹跳一下、透明度为设定值不变
- wow bounceInLeft 从左往右、移过来以后会向右超出一部分然后往左弹一下、透明度为设定值不变
- wow bounceInRight 从右往左、移过来以后会向左超出一部分然后往右弹一下、透明度为设定值不变

- wow slideInUp 从下往上、上来后固定到设定位置、透明度为设定值不变（up是从下往上）（如果元素在最下面，会撑开盒子高度）
- wow slideInDown 从上往下、上来后固定到设定位置、透明度为设定值不变
- wow slideInLeft 从左往右、上来后固定到设定位置、透明度为设定值不变（left却是从左往右）
- wow slideInRight 从右往左、上来后固定到设定位置、透明度为设定值不变

- wow lightSpeedIn 从右往左、头部先向右倾斜，又向左倾斜，最后变为原来的形状、透明度从100%变化至设定值
- wow pulse 原位置放大一点点在缩小至原本大小、透明度为设定值不变（配合动画执行次数属性效果更佳）
- wow flipInX 原位置后仰前栽、透明度从100%变化至设定值
- wow flipInY 原位置左右旋动、透明度从100%变化至设定值
- wow bounce 上下抖动、透明度为设定值不变（配合动画执行次数和动画持续时间属性可以实现剧烈抖动亦或是慢慢抖）
- wow shake 左右抖动、透明度为设定值不变（配合动画执行次数和动画持续时间属性可以实现剧烈抖动亦或是慢慢抖）
- wow swing 从右往左、头部先向右倾斜，又向左倾斜，最后变为原来的形状、透明度为设定值不变
- wow bounceInU 原位置不变、直接从不显示到显示（无过过渡效果）
- wow wobble 原位置不变、类似于一个人站在那左右晃头、透明度为设定值不变
