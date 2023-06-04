import React, { useEffect } from 'react'
import { TiTick } from 'react-icons/ti'
import { useNavigate , useParams} from 'react-router-dom'
import PageNotFound404 from './PageNotFound404'
import axios from 'axios'

const EmailVerification = () => {

    const [validUrl, setValidUrl] = React.useState(" ")
    const param = useParams()
    console.log(param.token)

    const navigate = useNavigate()

    useEffect(() => { 
        const verifyEmil = async () => { 
            try {
                const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/verifyemail/${param.token}`;
                const { data } = await axios.patch(url);
                if(data.status === 'success'){

                    setValidUrl(true)
                }
            }
            catch (error) { 
                setValidUrl(false)
            }
        }
        verifyEmil()
    }, [param])

    const HandleToLogin = () => {
        navigate('/login')
    }
    return (
        <>
            {
                (validUrl === " ") ? " " : validUrl ? (
                    <div className='Success-Page' >
                        <h2>Email Verfied Successfully</h2>
                        <TiTick />
                        <button onClick={HandleToLogin}>
                            Login
                        </button>
                    </div>
                ) : (
                    <PageNotFound404 loading={false} />
                )
            }
        </>
    )
}

export default EmailVerification