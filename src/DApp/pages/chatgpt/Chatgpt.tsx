import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chat.scss'
export class Chatgpt extends Component {
  render() {
    return (
      <div>
        <div className='chat'>
            <div className='chat-history'> 
            <div className='chat-add'> + new chat</div>
            <div>
                <ul>
                    <li>1212</li>
                    <li>1212</li>
                    <li>1212</li>
                </ul>
            </div>
            </div>
            <div className='chat-box'> context </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state:any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Chatgpt)