import './index.css'
    function Student(props){
    return(
        <div className='student'>
            <p> name:{props.name}</p>
            <p> age:{props.age}</p>
            <p> email:{props.email}</p>
        </div>
    )
}
export default Student;