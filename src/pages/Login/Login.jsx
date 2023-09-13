import {useState} from 'react';
import './login.scss';
import validate from '@utils/validate';
import api from '@api';
import {useNavigate} from 'react-router-dom';
import {message, Modal} from 'antd';

export default function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="login_container">
            <h2>Log In to your Account</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                let data = {
                    user_name: e.target.user_name.value,
                    password: e.target.password.value,
                    type: !validate.isEmail(e.target.user_name.value), // Email false, User Name true
                };

                try {
                    let result = await api.users.login(data);
                    if (result.status == 200) {
                        if (result.data.token == undefined) {
                            Modal.error({
                                content: `${result.data.message}`,
                            });
                        } else {
                            console.log(result.data)
                            localStorage.setItem("token", result.data.token);
                            if (localStorage.getItem("carts")) {
                                let carts = JSON.parse(localStorage.getItem("carts"));
                                console.log("carts", carts);
                                await carts.map(async (item) => {
                                    await api.purchase
                                        .addToCart(result.data.userId, item)
                                        .then((res) => {
                                            console.log("res", res);
                                        })
                                        .catch((err) => {
                                            alert("looix");
                                        });
                                    return item;
                                });
                                localStorage.removeItem("carts")
                                Modal.success({
                                    content: `${result.data.message}`,
                                    onOk: () => {
                                        window.location.href = "/";
                                    },
                                });
                            } else {
                                Modal.success({
                                    content: `${result.data.message}`,
                                    onOk: () => {
                                        window.location.href = "/";
                                    },
                                });
                            }
                        }
                    } else {
                        alert(result.data.message);
                    }
                } catch (err) {
                    err;
                }
            }}>
                <div className="form-control">
                    <label htmlFor="userName">User Name or Email:</label><br/>
                    <input type="text" name="user_name" id="userName" placeholder="User name or Email"/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label><br/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit" className="login_btn">Login</button>
                <button type="button" className="back_btn" onClick={() => navigate('/register')}>Create Account</button>
            </form>
        </div>
    );
}

