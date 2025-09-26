<p align="center">
  <a target="_blank" href="#">
  <img alt="autotoast" src="https://raw.githubusercontent.com/Larryzhu-dev/autotoast.js/main//autotoast.svg" width="300">
  </a>
</p>

<p align="center">
  <h2 align="center">autotoast.js</h2>
</p>

一个轻量化小弹窗，无需任何依赖，一行代码即可弹出，并自动管理状态。

## 安装

```shell
pnpm i autotoast.js
```

## 使用

```js
import autotoast from "autotoast.js";

autotoast.log("Hello World", "success", 2500);
// 其中 "success" 和 2500 都是可选项
```

## 自定义 icon

支持 svg 字符串，iconfont 类名，通过 createautotoast 方法创建自定义实例。

自定义 icon 时，autotoast 将优先使用你的自定义 icon，也就是说，你可以通过覆盖默认 icon 来修改预设图标。

autotoast 在创建弹窗元素时，会将 自定义 icon 的 key 作为 class 添加到 span 元素上，你可以通过 css 来自定义样式。如 `autotoast-customSvg` 或 `autotoast-iconfont`。


```js
import { createautotoast } from "autotoast.js";
const autotoast = createautotoast({
 svgIcons: {
     customSvg: `<svg>...</svg>`,
     iconfont: "icon-xxx"
 }
});
```

## 自定义样式

autotoast.js 提供了最简单的 css 和 预设图标，你可以通过覆盖默认样式来自定义弹窗样式。


这是全部的默认样式：

```css
#autotoast {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 20px;
  z-index: 9999999;
  cursor: pointer;
  transition: 0.2s;
}

#autotoast > span {
  pointer-events: auto;
  width: max-content;
  animation: fadein 0.4s;
  animation-delay: 0s;
  border-radius: 6px;
  padding: 10px 20px;
  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.1);
  margin: 4px;
  transition: 0.2s;
  z-index: 9999999;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: max-content;
  overflow: hidden;
  background-color: #fafafa;
}

#autotoast > span > span {
  max-width: 50vw;
}

#autotoast span.hide {
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  height: 0;
  padding: 0;
  margin: 0;
}

#autotoast > .autotoast-warn {
  background-color: #fffaec;
  color: #e29505;
}

#autotoast > .autotoast-error {
  background-color: #fde7e7;
  color: #d93025;
}

#autotoast > .autotoast-info {
  background-color: #e6f7ff;
  color: #0e6eb8;
}

#autotoast > .autotoast-success {
  background-color: #e9f7e7;
  color: #1a9e2c;
}

#autotoast > .autotoast- {
  background-color: #fafafa;
  color: #333;
}

@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

```