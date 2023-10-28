import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    
    //autenticación para el salto a este componente
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const navigate = useNavigate()

    if (!isAuthenticated) {
        navigate('/auth');
        return null;
      }

    //Traigo la data del user logueado
    const userData = useSelector(state => state.userData);
    console.log(userData)
    
    return ( 
        <div>
            <img src={userData.image} alt="" />
            <p>Name: {userData.name}</p>
            <p>Lastname: {userData.lastname}</p>
            <p>Nickname: {userData.nickname}</p>
            <p>Email: {userData.Email}</p>
        </div>
     );
}
 
export default Profile;