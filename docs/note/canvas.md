### **一、元素引用**

- #### canvas标签的默认大小为：300 x 150，内置width和height属性，可手动替换

```html
 <canvas id=“canvas” width="300" height="300"></canvas>
```

- #### **获取画布的渲染上下文，请调用[getContext()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)，参数如下**：

|      属性      |                             描述                             |
| :------------: | :----------------------------------------------------------: |
|       2d       | 导致创建 [`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)表示二维渲染上下文的对象 |
|     webgl      | 建一个 [`WebGLRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext)表示三维渲染上下文的对象。仅[WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)版本 1  的浏览器上可用 |
|     webgl2     | 创建一个[`WebGL2RenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext) 表示三维渲染上下文的对象。仅[WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) 版本 2 的浏览器上可用 |
| bitmaprenderer | 这将创建一个 [`ImageBitmapRenderingContext`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapRenderingContext)which 仅提供用给定的[`ImageBitmap`](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) |

```js
<script>
  // 获取 canvas 元素
  const canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 文章均使用CanvasRenderingContext2D
    const ctx = canvas.getContext('2d');
    // 创建渲染上下文时可以使用多个上下文属性
  }
</script>
```

### **二、绘制形状**

### 🐵绘制直线

- #### moveTo(x, y) 在给定坐标处开始一个新的子路径 

- #### lineTo(x, y)  将子路径的最后一个点连接到指定坐标 **`lineTo()`**来向当前子路径添加一条直线

- #### stroke()  通过线条来绘制图形轮廓

| 属性 |       描述       |
| :--: | :--------------: |
|  x   | x 轴（水平）坐标 |
|  y   | y 轴（垂直）坐标 |

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.moveTo(150, 75); // 起点
    ctx.lineTo(300, 150); // 终点
    ctx.stroke();
  }
</script>
```

具体效果如下：

![](/images/canvans/straight-line.png)

### 🐵绘制三角形

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // 绘制一个三角形
    ctx.moveTo(150, 75);
    ctx.lineTo(300, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(150, 75);
    ctx.stroke();
    // 如果是闭合三角形，使用closePath自动连接形状的第一个点和最后一个点
    // ctx.moveTo(20, 140);   // Move pen to bottom-left corner
    // ctx.lineTo(120, 10);   // Line to top corner
    // ctx.lineTo(220, 140);  // Line to bottom-right corner
    // ctx.closePath() // 三角形的底
  }
</script>
```

具体效果如下：

![](/images/canvans/triangle.png)

### 🐵绘制矩形

- #### strokeRect(x,y,width,hight)    绘制描边矩形

|    属性     |      描述      |
| :---------: | :------------: |
|     x,y     | 矩形的起点坐标 |
| width,hight |   矩形的宽高   |

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // 写法1
    // ctx.rect(50, 50, 200, 100);
    // ctx.stroke()
    
    // 写法2
    ctx.strokeRect(50, 50, 200, 100);
  }
</script>
```

具体效果如下：

![](/images/canvans/simple-rectangle.png)

- #### fillRect(x,y,width,hight) 绘制填充矩形 （默认黑色）

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // 绘制一个填充矩形
    ctx.fillRect(50, 50, 200, 100);
  }
</script>
```

具体效果如下：

![](/images/canvans/fill-rectangle.png)

- #### clearRect(x,y,width,hight) 清除指定矩形区域，让清除部分完全透明

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillRect(50, 50, 200, 100);
    // 清除指定矩形区域
    ctx.clearRect(125,75,50,50)
  }
</script>
```

具体效果如下：

![](/images/canvans/clear-rectangle.png)

###  🐵绘制圆弧和圆

- #### **arc(x, y, radius, startAngle, endAngle, counterclockwise)  绘制圆弧和圆**

|         属性         |                      描述                       |
| :------------------: | :---------------------------------------------: |
|         x, y         |                   圆心的坐标                    |
|        radius        |                半径，必须非负数                 |
| startAngle, endAngle | 圆弧或圆的开始的角度和结束的角度，从正 x 轴测量 |
|   counterclockwise   |  可选的布尔值，绘制方向，默认为false（顺时针）  |

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // 绘制圆弧,Math.PI 180度
    ctx.arc(150,75,20,0,Math.PI,false)
    ctx.stroke();
    // 绘制圆
    ctx.arc(200,75,20,0,Math.PI*2,false)
    ctx.stroke();
    }
</script>
```

不同路径之间相互干扰，会导致半圆弧和圆弧连在了一起

具体效果如下：

![](/images/canvans/arc-connect.png)

- #### beginPath  创建新路径，通过清空子路径列表来启动新路径

- #### closePath   尝试添加一条从当前点到当前子路径起点的直线。如果形状已经闭合或只有一个点，则此函数不执行任何操作(可选)

```js
<script>
  // 获取 canvas 元素
  const canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    const ctx = canvas.getContext('2d');
      // 绘制圆弧
      ctx.beginPath()
      ctx.arc(150,75,20,0,Math.PI,false)
      ctx.stroke();
      ctx.closePath()
      // 绘制圆
      ctx.beginPath()
      ctx.arc(200,75,20,0,Math.PI*2,false)
      ctx.stroke();
      ctx.closePath()
    }
</script>
```

具体效果如下：

![](/images/canvans/arc-separate.png)

- #### **fill()** 填充路径

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
      ctx.arc(200,75,20,0,Math.PI*2,false)
      // 填充圆 
      ctx.fill();
    }
</script>
```

具体效果如下：

![](/images/canvans/arc-fill.png)

### 🐵绘制椭圆

- #### ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)

|         属性         |                      描述                       |
| :------------------: | :---------------------------------------------: |
|         x, y         |                 椭圆的圆心位置                  |
|   radiusX, radiusY   |          x轴和y轴的半径，必须是非负数           |
|       rotation       |             椭圆的旋转，以弧度表示              |
| startAngle, endAngle | 椭圆开始的角度和结束的角度，从正 x 轴顺时针测量 |
|    anticlockwise     |  可选的布尔值，绘制方向，默认为false（顺时针）  |

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
      // 绘制椭圆
      ctx.beginPath();
      ctx.ellipse(25, 50, 25, 50, 0, 0, 2 * Math.PI);
      ctx.stroke();
    
      // 绘制实心椭圆-旋转180°
      ctx.beginPath();
      ctx.ellipse(110, 50, 50, 25, Math.PI, 0, Math.PI * 2);
      ctx.fill();
  }
</script>
```

具体效果如下：

![](/images/canvans/ellipse.png)

### 🐵绘制二次贝塞尔曲线

起点是当前路径中的最新点，可以[`moveTo()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)在创建贝塞尔曲线之前使用它进行更改

- #### **quadraticCurveTo(cp1x, cp1y, x, y)  二次贝塞尔曲线**[调试工具](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
      // 绘制二次贝塞尔曲线
      ctx.beginPath();
      // 起始点(100,50)
      ctx.moveTo(100,50)
      // 控制点（150, 100） 结束点（200,50)
      ctx.quadraticCurveTo(150,100,200, 50);
      ctx.stroke();
  }
</script>
```

具体效果如下：

![](/images/canvans/quadratic.png)

### 🐵绘制三次贝塞尔曲线

起点是当前路径中的最新点，可以[`moveTo()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)在创建贝塞尔曲线之前使用它进行更改

- #### **bezierCurveTo(cp1x,cp1y, cp2x,cp2y, x, y)  三次贝塞尔曲线**[调试工具](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)

|   属性    |                描述                 |
| :-------: | :---------------------------------: |
| cp1x,cp1y | 第一个控制节点的 x 轴坐标和y 轴坐标 |
| cp2x,cp2y | 第二个控制节点的 x 轴坐标和y 轴坐标 |
|   x, y    |     结束点的 x 轴坐标和y 轴坐标     |

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
      // 绘制三次贝塞尔曲线
      ctx.beginPath();
      // 起始点(25,100)
      ctx.moveTo(25,100)
      // 控制点1（75, 25） 控制点2（125, 150） 结束点（200, 100)
      ctx.bezierCurveTo(75, 25, 125, 150, 200, 100);
      ctx.stroke();
  }
</script>
```

具体效果如下：

![](/images/canvans/bezier.png)

### **四、绘制canvans复杂样式**

### 🐶线条样式

- #### lineWidth 设置当前绘线的粗细。属性值必须为正数。默认值是 1

- #### lineCap 设置线条两个端点的样式。可选值为：butt、round 、 square

- #### lineJoin 设置两线条连接处的样式。可选值为：miter、round、bevel 

- #### miterLimit 限制当两条线相交时交接处最大长度

- #### setLineDash 可以设置当前虚线样式

- #### getLineDash 则是返回当前虚线设置的样式，长度为非负偶数的数组

- #### lineDashOffset 设置虚线样式的起始偏移量

```js
<script>
  // 获取 canvas 元素
  const canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    const ctx = canvas.getContext('2d');
      ctx.beginPath()
      // 绘制一条虚线
      ctx.setLineDash([5, 10, 20]);
      // 非负偶数的数组
      console.log(ctx.getLineDash()); // [5, 10, 20, 5, 10, 20]
      // 设置线条长度为5
      ctx.lineWidth = 5;
      // 设置线条两个端点的样式为圆形
      ctx.lineCap='round'
      ctx.moveTo(150, 75);
      ctx.lineTo(300, 150); 
      ctx.stroke();
    
      ctx.beginPath()
      // 绘制一条虚线
      ctx.setLineDash([5, 10, 20, 40]);
      console.log(ctx.getLineDash()); // [5, 10, 20, 40]
      ctx.moveTo(150, 75);
      ctx.lineTo(0, 150); 
      ctx.stroke();
  }
</script>
```

具体效果如下：

![](/images/canvans/line.png)

### 🐶透明度

- #### fillStyle 设置填充样式

- #### strokeStyle 设置描边样式

- #### globalAlpha 设置透明度

```js
<script>
  // 获取 canvas 元素
  const canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
     // 获取绘图上下文
    const ctx = canvas.getContext('2d');
    ctx.beginPath()
    // 设置矩形透明度值
    ctx.globalAlpha = 0.5;
    ctx.fillRect(0,75,50,75);

    ctx.beginPath();
    // 指定矩形填充样式
    ctx.fillStyle = "rgba(205, 234, 11, 0.7)";
    ctx.fillRect(0,0,50,50);
    
    ctx.beginPath();
    // 指定矩形描边样式
    ctx.strokeStyle = "rgba(36, 185, 66, 0.8)";
    ctx.strokeRect(60, 0, 50, 50);
  }
</script>
```

具体效果如下：

![](/images/canvans/opacity.png)

### **🐶渐变**

- ####  createLinearGradient(x1, y1, x2, y2)       设置线性渐变 

|  属性  |           描述           |
| :----: | :----------------------: |
| x1, y1 | 起点的 x 轴坐标和y轴坐标 |
| x2, y2 | 终点的 x 轴坐标和y轴坐标 |



- #### gradient.addColorStop(offset, color)   设置渐变的颜色

|  属性  |           描述            |
| :----: | :-----------------------: |
| offset | offset 颜色的偏移值(0到1) |
| color  |         渐变颜色          |



```js
<script>
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
      const ctx = canvas.getContext('2d');
      // 创建线性渐变
      ctx.beginPath()
      const gradient = ctx.createLinearGradient(100,50,200,50)
      gradient.addColorStop(0,'#18e3e6')
      gradient.addColorStop(1,'#0f74b8')
      ctx.fillStyle = gradient
      ctx.fillRect(100,50,200,50)
      ctx.closePath()
    }
</script>
```

具体效果如下：

![](/images/canvans/linear-gradient.png)

- ####  createRadialGradient(x0, y0, r0, x1, y1, r1)        设置径向渐变

|    属性     |        描述        |
| :---------: | :----------------: |
| x0, y0, r0, | 开始圆的坐标和半径 |
| x1, y1, r1  | 结束圆的坐标和半径 |

- #### gradient.addColorStop(offset, color)  渐变的颜色 

```js
<script>
    const canvas = document.getElementById('canvas');
    if(canvas.getContext) {
      const ctx = canvas.getContext('2d');
      // 创建径向渐变
      ctx.beginPath()
      const gradient = ctx.createRadialGradient(225,75,50,225,75,0)
      gradient.addColorStop(0,'#18e3e6')
      gradient.addColorStop(1,'#0f74b8')
      ctx.fillStyle = gradient
      ctx.fillRect(150,0,150,150)
      ctx.closePath()
    }
</script>
```

具体效果如下：

![](/images/canvans/radial-gradient.png)

### **🐶绘制图案**

- ####  createPattern(image, type)  绘制图案

| 属性  |                             描述                             |
| :---: | :----------------------------------------------------------: |
| Image | 用作图案图像的图像  [Image](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern) |
| type  |  绘制的类型，参数为repeat，repeat-x，repeat-y 和 no-repeat   |

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>canvas - 绘制图案</title>
</head>
<body>
  <canvas id="image">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <canvas id="canvas">
    当前浏览器不支持canvas元素，请升级或更换浏览器！
  </canvas>
  <script>
    const image = document.getElementById('image');
    const canvas = document.getElementById('canvas');
    if(image.getContext && canvas.getContext) {
      const canvasImage = image.getContext('2d');
      const canvasSelf = canvas.getContext('2d');
      // 创建一个 canvas对象
      const img = new Image();
      img.src = '/images/common/excellent.png';
      img.onload = function() {
        // 图片加载完以后 创建图案
        const imagePattern = canvasImage.createPattern(img, 'repeat');
        canvasImage.fillStyle = imagePattern;
        canvasImage.fillRect(0, 0, 50, 50);
        // 用canvas来绘制canvas2
        const canvasPattern = canvasSelf.createPattern(image, 'repeat');
        canvasSelf.fillStyle = canvasPattern;
        canvasSelf.fillRect(400, 100, 500, 150);
      }
    }
  </script>
</body>
</html>
```

### **🐶绘制文本**

- #### strokeText(text, x, y, maxWidth)  描边文本

  |   属性   |                             描述                             |
  | :------: | :----------------------------------------------------------: |
  |   text   |                        需要渲染的文字                        |
  |   x, y   |                        文本的起始位置                        |
  | maxWidth | 最大宽度（可选参数），当文案大于最大宽度时不是裁剪或者换行，而是缩小字体 |

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // 设置文案大小和字体
    ctx.font = "50px serif";
    ctx.strokeText("strokeText", 0, 50);
    }
</script>
```

具体效果如下：

![](/images/canvans/stroke-text.png)

- #### fillText(text, x, y, maxWidth) 填充文本

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // 设置文案大小和字体
    ctx.font = "50px serif";
    ctx.fillText("fillText", 0, 50);
    }
</script>
```

具体效果如下：

![](/images/canvans/fill-text.png)

### **🐶文本样式**

- #### font 用于绘制文本的样式。默认的字体是 10px sans-serif。

- #### textAlign 文本对齐的方式。可选值为：left、right、center、start和end。默认值是 start

- #### direction 文本的方向。可选值为：ltr（从左向右）、rtl、inherit （继承元素文本方向）

- #### textBaseline 文字垂直方向的对齐方式。可选值为：top、hanging、middle、alphabetic、ideographic和bottom。默认值是 alphabetic

- #### measureText  测量文本，返回一个 TextMetrics对象

|    TeMetrics 对象属性    | 状态 |                             描述                             |
| :----------------------: | :--: | :----------------------------------------------------------: |
|          width           | 只读 |           基于当前上下文字体，计算内联字符串的宽度           |
|  actualBoundingBoxLeft   | 只读 | 从 textAlign 属性确定的对齐点到文本矩形边界左侧的距离，使用 CSS 像素计算；正值表示文本矩形边界左侧在该对齐点的左侧 |
|  actualBoundingBoxRight  | 只读 |    从 textAlign 属性确定的对齐点到文本矩形边界右侧的距离     |
|  fontBoundingBoxAscent   | 只读 | 从 textBaseline 属性标明的水平线到渲染文本的所有字体的矩形最高边界顶部的距离 |
|  fontBoundingBoxDescent  | 只读 | 从 textBaseline 属性标明的水平线到渲染文本的所有字体的矩形边界最底部的距离 |
| actualBoundingBoxAscent  | 只读 | 从 textBaseline 属性标明的水平线到渲染文本的矩形边界顶部的距离 |
| actualBoundingBoxDescent | 只读 | 从 textBaseline 属性标明的水平线到渲染文本的矩形边界底部的距离 |
|      emHeightAscent      | 只读 |  从 textBaseline 属性标明的水平线到线框中 em 方块顶部的距离  |
|     emHeightDescent      | 只读 |  从 textBaseline 属性标明的水平线到线框中 em 方块底部的距离  |
|     hangingBaseline      | 只读 | 从 textBaseline 属性标明的水平线到线框的 hanging 基线的距离  |
|    alphabeticBaseline    | 只读 | 从 textBaseline 属性标明的水平线到线框的 alphabetic 基线的距离 |
|   ideographicBaseline    | 只读 | 从 textBaseline 属性标明的水平线到线框的 ideographic 基线的距离 |

### **🐶阴影**

- #### shadowOffsetX、shadowOffsetY 设置阴影在 X 和 Y 轴的延伸距离。负值表示阴影会往上或左延伸，正值则表示会往下或右延伸，它们默认都为 0（纯数值）

- #### shadowBlur 设置阴影的模糊程度，默认为 0（纯数值）

- #### shadowColor 设置阴影颜色效果，默认是全透明的黑色

### **🐶绘制图片**

- #### drawImage(image, dx, dy)：只有单纯的绘制功能，可以绘制图片、视频和别的Canvas

- #### drawImage(image, dx, dy, dWidth, dHeight)：缩放

- #### drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)：裁剪

|      属性       |                          描述                          |
| :-------------: | :----------------------------------------------------: |
|      image      |                   绘制到上下文的元素                   |
|     sx、sy      |             裁剪框的左上角X轴坐标和Y轴坐标             |
| sWidth、sHeight |                   裁剪框的宽度和高度                   |
|     sHeight     |                      裁剪框的高度                      |
|     dx、dy      | 绘制到上下文的元素，在上下文中左上角的X轴坐标和Y轴坐标 |
| dWidth、dHeight |     绘制到上下文的元素，在上下文中绘制的宽度和高度     |

### **🐶变形**

- #### save()：快照(状态)保存，可以多次保存的，同时保存在栈中的元素遵循的是后进先出的顺序

- #### restore()：快照（状态）恢复

| 变形 |      方法       |                             描述                             |
| :--: | :-------------: | :----------------------------------------------------------: |
| 移动 | translate(x, y) |                x 是左右偏移量，y 是上下偏移量                |
| 旋转 |  rotate(angle)  |     angle是旋转的角度，它是顺时针旋转，以弧度为单位的值      |
| 缩放 |   scale(x, y)   | x 为水平缩放的值，y 为垂直缩放得值。x和y的值小于1则为缩小，大于1则为放大。默认值为 1 |

```js
<script>
  const canvas = document.getElementById('canvas');
  if(canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ee7034';
      ctx.save();
      ctx.save();
      ctx.save();
      ctx.save();
      // 移动
      ctx.translate(50, 50);
      ctx.fillRect(0, 0, 50, 50);
      ctx.restore();
      // 旋转
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(0, 0, 50, 50);
      ctx.restore();
      // 缩放
      ctx.scale(2, 1);
      ctx.fillRect(50, 0, 50, 50);
    }
  </script>
```

具体效果如下：

![](/images/canvans/change.png)

- #### transform(a, b, c, d, e, f)方法能将当前的变形矩阵乘上一个基于自身参数的矩阵；

- #### setTransform(a, b, c, d, e, f)方法会将当前变形矩阵重置为单位矩阵，然后用相同的参数调用 transform 方法

- #### resetTransform()方法为重置当前变形为单位矩阵。效果等同于调用 setTransform(1, 0, 0, 1, 0, 0

| 属性 |        方法        |
| :--: | :----------------: |
|  a   |   水平方向的缩放   |
|  b   | 竖直方向的倾斜偏移 |
|  c   | 水平方向的倾斜偏移 |
|  d   |   竖直方向的缩放   |
|  e   |   水平方向的移动   |
|  f   |   竖直方向的移动   |

### **🐶合成和裁剪**

- #### globalCompositeOperation = type   合成， type为合成的类型

|       type       |                             描述                             |
| :--------------: | :----------------------------------------------------------: |
|   source-over    |            默认值，在现有画布上下文之上绘制新图形            |
|    source-in     |  新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的  |
|    source-out    |            在不与现有画布内容重叠的地方绘制新图形            |
|   source-atop    |            新图形只在与现有画布内容重叠的地方绘制            |
| destination-over |               在现有的画布内容后面绘制新的图形               |
|  destination-in  | 现有的画布内容保持在新图形和现有画布内容重叠的位置,其他的都是透明的 |
| destination-out  |               现有内容保持在新图形不重叠的地方               |
| destination-atop | 现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的 |
|     lighter      |          两个重叠图形的颜色是通过颜色值相加来确定的          |
|       copy       |                         只显示新图形                         |
|       xor        |       图像中，那些重叠和正常绘制之外的其他地方是透明的       |
|     multiply     |     将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片     |
|      screen      |       像素被倒转，相乘，再倒转，结果是一幅更明亮的图片       |
|     overlay      | multiply 和 screen 的结合，原本暗的地方更暗，原本亮的地方更亮 |
|      darken      |                   保留两个图层中最暗的像素                   |
|     lighten      |                   保留两个图层中最亮的像素                   |
|   color-dodge    |                     将底层除以顶层的反置                     |
|    color-burn    |            将反置的底层除以顶层，然后将结果反过来            |
|    hard-light    | 屏幕相乘（A combination of multiply and screen）类似于叠加，但上下图层互换了 |
|    soft-light    |             用顶层减去底层或者相反来得到一个正值             |
|    difference    | 一个柔和版本的强光（hard-light）。纯黑或纯白不会导致纯黑或纯白 |
|    exclusion     |               和 difference 相似，但对比度较低               |
|       hue        | 保留底层的亮度（luma）和色度（chroma），同时采用了顶层的色调（hue） |
|    saturation    | 保留底层的亮度（luma）和色调（hue），同时采用顶层的色度（chroma） |
|      color       | 保留底层的亮度（luma），同时采用了顶层的色调 (hue) 和色度 (chroma) |
|    luminosity    | 保留底层的色调（hue）和色度（chroma），同时采用顶层的亮度（luma） |

- #### clip(path, fillRule)  裁剪

|   属性   |                             描述                             |
| :------: | :----------------------------------------------------------: |
|   path   |                     要剪切的 Path2D 路径                     |
| fillRule | 判断是在路径内还是在路径外，允许的值有 nonzero：非零环绕原则，evenodd：奇偶环绕原则 |



- #### Path2D（）

|        属性        |                             描述                             |
| :----------------: | :----------------------------------------------------------: |
|     addPath()      |                  添加一条新路径到对当前路径                  |
|    closePath()     | 使笔点返回到当前子路径的起始点。它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此函数不会做任何操作 |
|      moveTo()      |          将一个新的子路径的起始点移动到 (x，y) 坐标          |
|      lineTo()      |             使用直线连接子路径的终点到 x, y 坐标             |
|  bezierCurveTo()   | 添加一条三次贝赛尔曲线到当前路径， 绘制贝赛尔曲线前，通过调用 moveTo() 进行修改 |
| quadraticCurveTo() |               添加一条二次贝赛尔曲线到当前路径               |
|       arc()        |                      添加一条圆弧路径。                      |
|      arcTo()       |    根据控制点和半径添加一条圆弧路径，使用直线连接前一个点    |
|     ellipse()      |                       添加一条椭圆路径                       |
|       rect()       |                       创建一条矩形路径                       |

#### **🐶动画**

- #### window.requestAnimationFrame()来实现一个动画效果

```tex
动画实现步骤
1、清空 canvas：除非接下来要画的内容会完全充满 canvas（例如背景图），否则需要清空所有。最简单的做法就是用 clearRect 方法。
2、保存 canvas 状态：如果要改变 canvas 状态的设置（样式，变形之类的），之后又要在每画一帧之时都是原始状态的情况时，需要先保存一下。
3、绘制动画图形（animated shapes）
4、恢复 canvas 状态：如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧
```

参考资源：

[mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

[稀土掘金](https://juejin.cn/post/7119495608938790942)