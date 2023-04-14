# **Auto Convert px2rem**
## **说明**
Auto Convert px2rem是一款VS Code插件，可以帮助开发者快速将CSS代码中的px值转换为rem值。通过使用快捷键，用户可以快速将选中的代码中的px值转换为px2rem()格式，从而方便地实现响应式布局。

使用Auto Convert px2rem插件非常简单，只需要在编辑器中选中需要转换的代码，然后按下快捷键`ctrl+s`（Windows）或者`cmd+s`（Mac），即可将选中的CSS代码中的px值转换为px2rem()格式。

## **具体操作**

例如，如果选中的CSS代码是`font-size: 26px`，则会被转换为`font-size: px2rem(26)`。

```css
.demo {
  font-size: 26px
}

// 转换
.demo {
 font-size: px2rem(26)
}
```