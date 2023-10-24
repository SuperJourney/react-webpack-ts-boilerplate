import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chatgpt.scss'
import {marked} from  'marked'


interface IState {
  Display: boolean
}
export class Chatgpt extends Component<any, IState> {
  state = {
    Display:false
  }
  toggle = () => {
    this.setState(prestate => ({
      Display: !prestate.Display
    }))
  }
  render() {
    const html = marked("# hello,world,sf");
    return (
      <div className='root'>
        <div className='top'> <button onClick={this.toggle}>==</button> </div>
        <div className='container flex'>
          <div className={`left ${this.state.Display?'show':''}`}>
            <div className='btn'>
              New Chat
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
              <li>5</li>
            </ul>
            <div className='setting'>设置</div>
          </div>
          <div className='content'>
            <div className='content-title'>家庭</div>
            <div className='content-main'>

              <div className='left-message content-item'>
                <div className='left-message-img'>
                  <img src="" alt="头像" />
                </div>
                <div className='left-message-body'>
                  <div className='left-message-name'>
                    君子
                  </div>
                  <div className='left-message-context' dangerouslySetInnerHTML={{ __html: html }}>
                  </div>
                </div>
                <div className='left-message-tail' ></div>
              </div>

              <div className='right-message content-item'>
                <div className='right-message-img'>
                  <img src="" alt="头像" />
                </div>
                <div className='right-message-body'>
                  <div className='right-message-context'>
                    我说二就是2
                  </div>
                </div>
                <div className='right-message-tail'></div>
              </div>
            </div>
            <div className='submit'>
              <textarea></textarea>
              <button>提交</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Chatgpt)