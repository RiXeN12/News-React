import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import { connect} from 'react-redux';
import { Typography } from '@mui/material';


const Profile = ({user,isAuth}) => {
    return (
        <>
            
            {isAuth && <div style={{
                color:'whitesmoke',
                //backgroundColor:'grey',
                background: 'linear-gradient(109.6deg, rgb(14, 11, 56) 11.2%, rgb(239, 37, 37) 91.1%)',
                margin:'5%',
                padding:'3%',
                borderRadius:'10px',
                marginRight:'30%'
            }}>
                <Typography display={'flex'} color={'white'} marginBottom={5} justifyContent={'center'}variant='h2'>Profile</Typography>
                <Box display={'flex'} justifyContent={'space-between'}>

                    {user && <Avatar style={{
                        width:'20%',
                        height:'20%',
                        border:'5px solid black',

                    }} alt="Remy Sharp" src={user.image} />}

                    <div style={{
                        //backgroundColor:'#595959',
                        borderRadius:'5px',
                        padding:'2%'
                    }}>
                        <Typography color={'white'}  justifyContent={'center'}variant='h3'>Name: {user.name}</Typography>
                        <br />
                        <hr />
                        <Typography color={'white'}  justifyContent={'center'}variant='h3'>Surname: {user.surname}</Typography>
                        <br />
                        <hr />
                        <Typography color={'white'}  justifyContent={'center'}variant='h3'>Email: {user.email}</Typography>
                    </div>
                    
                
            </Box>
            </div>}
        </>
        
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    isAuth: state.user.isAuth
});

export default connect(mapStateToProps)(Profile);