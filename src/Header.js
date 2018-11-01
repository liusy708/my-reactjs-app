import React, { Component } from 'react';

/*
这个例子的目的是用于了解  componentWillMount， componentDidMount和componentWillUnmount
的执行顺序。step1-5表示的是组件挂载过程中的5个不同的时间节点，通过提供这5个时间节点名对应的方法，
开发者可以在各个时间节点加入自己想要执行的操作，从而实现自己想要的功能。

比如，在加载一个很大的视频文件时，需要视频加载前显示“正在加载中，请稍后...”这样的文字，视频加载完成后这些文字消失掉，
我们就可以在componentWillMount方法中显示这些文字，然后在componentDidMount方法中删掉它们，这样就实现了我们想要的效果
*/
class Header extends Component {
  constructor () {
    super()
    // step1: 定义组件
    console.log('step1: 正在构造组件')
  }
  // step 2: React组件将会被挂载
  componentWillMount () {
    console.log('step2: 组件将被挂载')
  }
  // step 4: React组件已经被挂载
  componentDidMount () {
    console.log('step4: 组件已经被挂载')
  }

  componentWillUnmount () {
    console.log('step5: 即将从页面删除')
  }

  render () {
    // step3: 组件正在被挂载
    console.log('step3: 正在挂载组件')
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
}

export default Header