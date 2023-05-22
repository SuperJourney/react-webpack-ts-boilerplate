import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chatgpt.scss'
export class Chatgpt extends Component {
  render() {
    return (
      <div className='container flex'>
        <div className='left'>
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
            <div className='left-message'>
              <div className='left-message-img'>
                <img src="" alt="头像" />
              </div>
              <div className='left-message-body'>
                <div className='left-message-name'>
                  君子
                </div>
                <div className='left-message-context'>
                  我说一就是一
                </div>
              </div>
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