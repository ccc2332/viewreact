import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Table,Button} from 'antd';
import * as Actions from "./action"


class App extends React.Component {
    constructor(props){
      console.log("constructor");
        super(props);
        this.state = {
            num:1,
            value:""
        }
        this.columns = [
          {
            title: 'Name',
            dataIndex: 'name',
          },
          {
            title: 'Age',
            dataIndex: 'age',
          },
          {
            title: 'Address',
            dataIndex: 'address',
          },
        ];
    }

    componentWillMount (){
      console.log("componentWillMount");
    }

    handleChange(e) {
      this.setState({value: e.target.value});
    }

    btnOnClick() {
      console.log("btnOnClick");
      this.setState({
        num:this.state.num+1
      });
    }
    onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
    };

    getTableData(){
      this.props.action.getTableData();
    }


  render (){
    console.log("render");
    let selectedRowKeys = [];
    let data = this.props.$$state.get("data").toJS();
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    var style = {textAlign:"center"}
    var value = this.state.value;
    return <div style={style} className="App">
        Hello React,我是{this.props.name}
        <br /> 我喜欢{value}
        <br/><input type="text" onChange={this.handleChange.bind(this)} /> 
        <br />{this.state.num}是
        {this.state.num%2 == 0?"偶数":"奇数"}!
        <br />
        <button onClick={this.btnOnClick.bind(this)}>Num++</button>
        <button onClick={this.props.changeName.bind(this)}>我要改名</button>
        <Button onClick={this.getTableData.bind(this)}>获取列表数据</Button>
        <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} />
    </div>
  }
}


//绑定状态到组件props
function mapStateToProps(state, ownProps) {
  return {
    $$state: state.app
  }
}

//绑定action到组件props
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(Actions, dispatch)
  }
}

//输出绑定state和action后组件
export default connect(mapStateToProps, mapDispatchToProps)(App);