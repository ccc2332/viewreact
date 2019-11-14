import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Table,Button} from 'antd';
import * as Actions from "./action"


class ViewApp extends React.Component {
    constructor(props){
      console.log("constructor");
        super(props);
    }

  

  render (){
  
    return <div>Hello React!</div>
  }
}


//绑定状态到组件props
function mapStateToProps(state, ownProps) {
  return {
    $$state: state.viewApp
  }
}

//绑定action到组件props
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Actions, dispatch)
  }
}

//输出绑定state和action后组件
export default connect(mapStateToProps, mapDispatchToProps)(ViewApp);