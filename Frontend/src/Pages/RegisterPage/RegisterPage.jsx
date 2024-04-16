import React,{useState} from 'react';
import styles from './Register.module.css'; // If using CSS modules
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const navigate = useNavigate();
    const [data,setData]=useState({
      name: '',
      email: '',
      password: '',
    })
    const [error, setError] = useState(null);
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
      
    //     try {
    //       const response = await axios.post('https://gdscbackend.vercel.app/authentication/login', { email, password }); // Replace '/login' with your actual backend API endpoint
    //       if (response.data.success) {
    //         // Authentication successful, redirect to admin page
    //         console.log('Login successful:', response.data.authtoken);
    //         localStorage.setItem('authtoken', response.data.authtoken);
    //         window.location.href = '/';
    //           if(email===process.env.REACT_APP_EMAIL)
    //               adminhandler();
    //       } else {
    //         setError('Invalid email or password');
    //       }
    //     } catch (error) {
    //       setError('An error occurred during login');
    //     }
        
    //   };
    const loginUser = (e) =>{
      e.preventDefault()
      axios.get('/')
    }
    const registerUser =  async (e) =>{
      e.preventDefault();
      const {name,email,password}= data;
      try{
        const {data} = await axios.post('https://ats-resume-scorer-application-2.onrender.com/register',{
          name,email,password
        })
        if(data.error){
          toast.error(data.error)
        }
        else{
          setData({})
          toast.success("register success")
          navigate('/')
        }
      }catch(error){
        console.log('error registering the user')
      }
    }

  return (
    <div className={styles.main}>
    <form className={styles.loginForm} >
    <div className={styles.formgroup}>
        <label htmlFor="name">Name</label>
        <input type="name" className={styles.formcontrol} id="name" placeholder="Name" value={data.name} onChange={(e) => setData({...data,name:e.target.value})} />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="email">Email address</label>
        <input type="email" className={styles.formcontrol} id="email" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data,email:e.target.value})}/>
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="password">Password</label>
        <input type="password" className={styles.formcontrol} id="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data,password:e.target.value})} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.btn} onClick={registerUser} >Submit</button>
    </form>
    </div>
  )
}

export default LoginPage