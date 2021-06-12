import React , {useEffect , useState , Fragment} from 'react';
import { connect } from 'react-redux';

import { getUser } from './redux/action/fetchAction'; 


const FetchComponent = ({getUser , user}) => {
    useEffect(()=> {
        getUser()
    },[getUser])

    const [curruntPage , setPage] = useState(1)
    
    let modUser
    if(curruntPage === 1){
        modUser = user.user.slice(0, curruntPage * 6)
    }if(curruntPage === 2){
        modUser = user.user.slice(6,curruntPage*6)
    }
    
    return (
        <Fragment>
            {  
                user.isLoading ? <div>Loading...</div> : <Fragment>
                    {   
                        modUser.map(user => (
                            <div className='user' key={user.id}>
                                <img src={user.avatar} alt="" />
                                <h3 className='firstname'>{user.first_name}</h3>
                                <h5 className='lastname'>{user.last_name}</h5>
                                <p>{user.email}</p>
                            </div>
                        ))
                    }
                </Fragment>
            }
            <div>
                <button onClick={() => setPage(1)}>Page 1</button>
                <button onClick={()=> setPage(2)}>Page 2</button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    user:state.user
})

export default connect(mapStateToProps,{getUser})(FetchComponent)
