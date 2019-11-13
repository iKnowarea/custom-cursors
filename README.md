# custom-cursors

![Gitlab pipeline status](https://img.shields.io/gitlab/pipeline/iKnowarea/custom-cursors?color=red&logoColor=red)
[![GitHub file size in bytes](https://img.shields.io/github/size/iKnowarea/custom-cursors/js/Customcursors.min.js?color=green)](https://github.com/iKnowarea/custom-cursors/blob/master/js/Customcursors.min.js)
[![GitHub](https://img.shields.io/github/license/iKnowarea/custom-cursors)](https://github.com/iKnowarea/custom-cursors/blob/master/LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/iKnowarea/custom-cursors?color=pink)

I found that some people modified the original pointer on the page, which is very interesting.

So when I searched for such resources online, I found that people used a lot of formats and languages and were not suitable for me. So I wrote a piece of code myself. Some people think that this is nothing, but I think someone needs it.

## About use

[Demo](https://iknowarea.github.io/custom-cursors/)

custom-cursors does not depend on anything, is independent.

custom-cursors is easy to use and can be used in any `html tags`. You only need to add the `class` and `id` names, and customize the special `hover style` for them, it has been successful.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
		<title>Custom Cursors</title>
		<link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Hello world!</h1>
        <span class="cursor"></span>
        <script src="Customcursors.js"></script>
    </body>
</html>
```

And in `<script>` add `var cursor = new Cursor ( target , element style)`.

```javascript
var cursor = new Cursor("h1","incursor")
```

There is already a default `incursor` style, and you can change what you like. It's just as easy, you can do it with css, don't you?

I hope that can help some newbies. When others can modify the pointer but don't know how to do it，look at my code, maybe I can give you something new.

I am also a newbie, the code may not be beautiful, so you can help me simplify the code.

##### 为了新手懒人