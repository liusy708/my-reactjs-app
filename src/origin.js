function UserData (props){
  return (
    <div>
      <table>
        <tr>
          <td><button onClick = {() => props.removeInfo(index)}>X</button></td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.activity}</td>
          <td>{props.restrictions}</td>
        </tr>
      </table>
    </div>
  )
}

function TableList (props){
  return(
    <table>
      <tr>
        <th>Remove</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Activity</th>
        <th>Restrictions</th>
      </tr> 
        {props.tableList.map((item,index) => 
         <UserData 
           key={index} 
           firstName={item.firstName} 
           lastName={item.lastName} 
           activity={item.activity}                   
           restrictions={item.restrictions} 
           removeInfo={()=>props.removeInfo(index)}
         />
        )}
    </table>  
  )
}

class Registration extends React.Component {
  constructor (props){
    super (props)
    this.state = { tableList: [], activity : "Science Lab"}
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.removeInfo = this.removeInfo.bind(this)
  }
  
  handleChange (){ // 用于监听输入框、复选框、下拉列表控件的变化
    if ([event.target.type === "checkbox"]) {
      this.setState ({ [event.target.name]: event.target.checked }) //如果事件类型为checkbox，则将其值改为checked
    } else {
      this.setState ({ [event.target.name]: event.target.value }) //如果事件类型为input，则将其值改为输入框内容
    }
  }
  
  handleClick (){ //用于绑定提交按钮
    var DataCopy = this.state.tableList.slice() //复制一个数组
    DataCopy.push({ //往数组里添加数据，获取各个控件的值
      firstName: this.state.firstName, 
      lastName: this.state.lastName,
      activity: this.state.activity,
      restrictions: (this.state.a? "a" : "") + (this.state.b? "b" : "") + (this.state.c? "c" : "") //如果选中a，则显示a，未选中则不显示
    })
    this.setState({ tableList: DataCopy, firstName: "", lastName: "", activity: "", a:"", b:"", c:""}) //点击提交以后各控件还原，数组改变为增改后的数组
  }
  
  removeInfo (index){ //用于绑定X删除按钮
    var DataCopy = this.state.tableList.slice()
    DataCopy.splice(index,1) //用slice()方法删除末行数据（后进先出）
    this.setState({ tableList: DataCopy}) //将数组改变为删改后的数组
  }
  render(){
    return(
      <div>
        <form>
          First Name<br/>
          <input style={style} name="firstName" value={this.state.firstName} onChange={this.handleChange} /><br/>
          Last Name<br/>
          <input style={style} name="lastName" value={this.state.lastName} onChange={this.handleChange} /><br/>
          Select Activity<br/>
          <select style={style} name="activity" value={this.state.activity} onChange={this.handleChange} >
            <option value="Science Lab">Science Lab</option>
            <option value="Swimming">Swimming</option>
            <option value="Cooking">Cooking</option>
            <option value="Painting">Painting</option>
          </select><br/>
          Check all that apply:<br/>
          <input type="checkbox" name="a" checked={this.state.a} onChange={this.handleChange} /> a) Dietary Restrictions<br/>
          <input type="checkbox" name="b" checked={this.state.b} onChange={this.handleChange} /> b) Physical Disabilities<br/>
          <input type="checkbox" name="c" checked={this.state.c} onChange={this.handleChange} /> c) Medical Needs<br/>
          <button style={style} type="button" onClick={this.handleClick}>Submit</button>
        </form>
        <TableList tableList={this.state.tableList} removeInfo={this.removeInfo(index)} />
      </div>
    )
  }  
}

ReactDOM.render(
  <Registration />,
  document.getElementById('root')
)
