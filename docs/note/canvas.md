### 一、基本使用

- #### canvas标签的默认大小为：300 x 150，内置width和height属性，可手动替换

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>canvas标签 基本使用</title>
</head>

<body>
    <!-- 浏览器不支持canvas元素，展示canvas标签里面的文字 -->
    <!-- 浏览器支持canvas元素，忽略canvas标签里面的文字 -->
    <canvas id=“canvas”>
        不想写代码了
    </canvas>
</body>

</html>
```

### 二、渲染上下文

**getContext()** 可接收参数，它是绘图上下文的类型，参数可能为：

- *2d：建立一个二维渲染上下文。这种情况可以用 CanvasRenderingContext2D()来替换getContext('2d')。*
- *webgl（或 experimental-webgl）： 创建一个 WebGLRenderingContext 三维渲染上下文对象。*
- *webgl2（或 experimental-webgl2）：创建一个 WebGL2RenderingContext 三维渲染上下文对*
- *bitmaprenderer：创建一个只提供将canvas内容替换为指定ImageBitmap功能ImageBitmapRenderingContext。*

```js
<script>
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
  }
</script>
```

### 三、绘制形状

### 🐵绘制直线

- #### moveTo(x, y) 设置初始位置，参数为初始位置x和y的坐标位置

- #### lineTo(x, y) 绘制一条从初始位置到指定位置的直线，参数为指定位置x和y的坐标点

- #### stroke() 通过线条来绘制图形轮廓

```js
<script>
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
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
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
    // 绘制一个三角形
    ctx.moveTo(150, 75);
    ctx.lineTo(300, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(150, 75);
    ctx.stroke();
  }
</script>
```

具体效果如下：

![](/images/canvans/triangle.png)

### 🐵绘制矩形

x和y 是矩形的起点坐标，width和height 是矩形的宽高

- #### strokeRect(x,y,width,hight)*绘制矩形边框*

```js
<script>
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
    // 绘制一个矩形边框
    ctx.strokeRect(50, 50, 200, 100);
  }
</script>
```

具体效果如下：

![](/images/canvans/simple-rectangle.png)

- #### fillRect(x,y,width,hight) 绘制填充矩形 （默认黑色）

```js
<script>
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
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
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
    // 清除指定矩形区域
    ctx.fillRect(50, 50, 200, 100);
    ctx.clearRect(125,75,50,50)
  }
</script>
```

具体效果如下：

![](/images/canvans/clear-rectangle.png)

###  🐵绘制圆弧和圆

x和y为圆心的坐标，radius为半径，startAngle为圆弧或圆的开始位置，endAngle为圆弧或圆的结束位置，anticlockwise是绘制的方向（不写默认为false，从顺时针方向）

- #### **arc(x, y, radius, startAngle, endAngle, anticlockwise)绘制圆弧和圆**

```js
<script>
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
      // 绘制圆弧
      ctx.arc(150,75,20,0,Math.PI,false)
      ctx.stroke();
      // 绘制圆
      ctx.arc(200,75,20,0,Math.PI*2,false)
      ctx.stroke();
    }
</script>
```

不同路径之间相互干扰，导致半圆弧和圆弧连在了一起

具体效果如下：

![](/images/canvans/arc-connect.png)

- #### beginPath 新建一条路径，生成之后，图形绘制命令被指向到路径上

- #### closePath 闭合路径之后图形绘制命令又重新指向到上下文中(非必需)

```js
<script>
  // 获取 canvas 元素
  var canvas = document.getElementById('canvas');
  // 通过getContext方法判断浏览器是否支持canvas
  if(canvas.getContext) {
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
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

- ### 一、基本使用

  - #### canvas标签的默认大小为：300 x 150，内置width和height属性，可手动替换

  ```html
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>canvas标签 基本使用</title>
  </head>
  
  <body>
      <!-- 浏览器不支持canvas元素，展示canvas标签里面的文字 -->
      <!-- 浏览器支持canvas元素，忽略canvas标签里面的文字 -->
      <canvas id=“canvas”>
          不想写代码了
      </canvas>
  </body>
  
  </html>
  ```

  ### 二、渲染上下文

  **getContext()** 可接收参数，它是绘图上下文的类型，参数可能为：

  - *2d：建立一个二维渲染上下文。这种情况可以用 CanvasRenderingContext2D()来替换getContext('2d')。*
  - *webgl（或 experimental-webgl）： 创建一个 WebGLRenderingContext 三维渲染上下文对象。*
  - *webgl2（或 experimental-webgl2）：创建一个 WebGL2RenderingContext 三维渲染上下文对*
  - *bitmaprenderer：创建一个只提供将canvas内容替换为指定ImageBitmap功能ImageBitmapRenderingContext。*

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
    }
  </script>
  ```

  ### 三、绘制形状

  ### 🐵绘制直线

  - #### moveTo(x, y) 设置初始位置，参数为初始位置x和y的坐标位置

  - #### lineTo(x, y) 绘制一条从初始位置到指定位置的直线，参数为指定位置x和y的坐标点

  - #### stroke() 通过线条来绘制图形轮廓

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
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
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一个三角形
      ctx.moveTo(150, 75);
      ctx.lineTo(300, 0);
      ctx.lineTo(300, 150);
      ctx.lineTo(150, 75);
      ctx.stroke();
    }
  </script>
  ```

  具体效果如下：

  ![](/images/canvans/triangle.png)

  ### 🐵绘制矩形

  ### x和y 是矩形的起点坐标，width和height 是矩形的宽高

  - #### strokeRect(x,y,width,hight)*绘制矩形边框*

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 绘制一个矩形边框
      ctx.strokeRect(50, 50, 200, 100);
    }
  </script>
  ```

  具体效果如下：

  ![](/images/canvans/simple-rectangle.png)

  - #### fillRect(x,y,width,hight) 绘制填充矩形 （默认黑色）

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
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
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
      // 清除指定矩形区域
      ctx.fillRect(50, 50, 200, 100);
      ctx.clearRect(125,75,50,50)
    }
  </script>
  ```

  具体效果如下：

  ![](/images/canvans/clear-rectangle.png)

  ###  🐵绘制圆弧和圆

  x和y为圆心的坐标，radius为半径，startAngle为圆弧或圆的开始位置，endAngle为圆弧或圆的结束位置，anticlockwise是绘制的方向（不写默认为false，从顺时针方向）

  - #### **arc(x, y, radius, startAngle, endAngle, anticlockwise)绘制圆弧和圆**

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
        // 绘制圆弧
        ctx.arc(150,75,20,0,Math.PI,false)
        ctx.stroke();
        // 绘制圆
        ctx.arc(200,75,20,0,Math.PI*2,false)
        ctx.stroke();
      }
  </script>
  ```

  不同路径之间相互干扰，导致半圆弧和圆弧连在了一起

  具体效果如下：

  ![](/images/canvans/arc-connect.png)

  - #### beginPath 新建一条路径，生成之后，图形绘制命令被指向到路径上

  - #### closePath 闭合路径之后图形绘制命令又重新指向到上下文中(非必需)

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
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

  - **fill()** 填充路径

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
        // 绘制圆
        ctx.arc(200,75,20,0,Math.PI*2,false)
        ctx.fill();
      }
  </script>
  ```

  具体效果如下：

  ![](/images/canvans/arc-fill.png)

  ### 🐵绘制椭圆

  x、y：椭圆的圆心位置，radiusX、radiusY：x轴和y轴的半径，rotation：椭圆的旋转角度，以弧度表示，startAngle：开始绘制点，endAngle：结束绘制点，anticlockwise：绘制的方向（默认顺时针）

  - ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
        // 绘制椭圆
        ctx.beginPath();
        ctx.ellipse(25, 50, 25, 50, 0, 0, 2 * Math.PI);
        ctx.stroke();
      
        // 绘制实心椭圆-旋转180°
        ctx.beginPath();
        ctx.ellipse(110, 50, 50, 25, Math.PI, 0, 2 * Math.PI);
        ctx.fill();
    }
  </script>
  ```

  具体效果如下：

  ![](/images/canvans/ellipse.png)

  ### 🐵绘制贝塞尔曲线

  [调试工具](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html)

  - #### **quadraticCurveTo(cp1x, cp1y, x, y)，其中cp1x和cp1y为一个控制点，x和y为结束点**

  ```js
  <script>
    // 获取 canvas 元素
    var canvas = document.getElementById('canvas');
    // 通过getContext方法判断浏览器是否支持canvas
    if(canvas.getContext) {
      // 获取绘图上下文
      var ctx = canvas.getContext('2d');
        // 绘制贝塞尔曲线
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

  ![](/images/canvans/curve.png)