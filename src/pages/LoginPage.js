import {useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const logIn = async() =>{
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            alert("Signed in successfully!")
            navigate('/articles');
        }catch{
            setError('Failed to log in');
        }
    }

    // const login = async (e) => {
    //     e.preventDefault();
    //     try{
    //         setError('');
    //         setLoading(true);
    //         await login(email, password);

    //     } catch {
    //         setError('Failed to log in');
    //     }

    //     setLoading(false);
    // }

    return(
        <div>
            <h1>Log In</h1>
            {error && <div><p className='error'>{error}</p></div>}
            <form onSubmit={logIn}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button disabled={loading} type="submit">Log In</button>
            </form>
            <Link to='/create-account'>Don't have an account? Create one here</Link>
        </div>
    );
}

export default LoginPage;