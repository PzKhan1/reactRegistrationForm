import './../Style/dashboard.css'

const Dashboard = (props) => {
    const obj = props.data;
    
    function handleDel() {
        props.users(obj.id);
    }
        return (
            
            <div className='box-wrapper'>
                <img src={obj.image}></img>
                <h3>{obj.firstName + '' + obj.lastName}</h3>
                <p>{obj.email}</p>
                <p>{obj.phone}</p>
                <span className='close'onClick={handleDel}>X</span>
            </div>
        )
}

export default Dashboard;