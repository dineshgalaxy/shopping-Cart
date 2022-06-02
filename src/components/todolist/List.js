import '../todolist/list.css'
const List = (props) =>{
   
    return (
      <div className="listItem">
        <li>{props.text}</li>
        <i className="fa-solid fa-trash-can" onClick={()=>{
            props.onSelect(props.id)
        }}></i>
      </div>
    );
}
export default List;