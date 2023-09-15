import { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './productItem.scss';
import { useParams } from 'react-router-dom';
import { productActions } from '@rtk/product';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { RootContext } from '@/App';
import { message } from 'antd';
import api from "@api";
import actions from '@/stores/actions';

message.config({
    top: 200,
    duration: 3,
    maxCount: 1,
    rtl: true,
    prefixCls: 'my-message',
});

export default function ProductItem() {
    const { userStore, setLocalCartState, localCartState } = useContext(RootContext);
    const { id } = useParams();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const productStore = useSelector(store => store.productStore);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(productActions.findProductById(id))
    }, [id])

    function addToCart() {
        let data = {
            product_id: productStore.data.id,
            quantity
        };

        if (localStorage.getItem("token")) {
            api.purchase
                .addToCart(userStore.data.id, data)
                .then((res) => {
                    api.purchase
                        .findCart(userStore.data?.id)
                        .then((res) => {
                            if (res.status == 200) {
                                dispatch(actions.cartActions.setCartData(res.data.data));
                                message.success("add to cart success")
                                // navigate("/")
                            } else {
                                alert(res.data.message);
                            }
                        })
                        .catch((err) => {
                            console.log("err", err)
                            alert("sập!");
                        });
                })
                .catch((err) => {
                    alert("looix");
                });
        } else {
            let carts = localStorage.getItem("carts");
            if (carts) {
                carts = JSON.parse(carts);
                let flag = false;
                carts = carts.map((item) => {
                    if (item.product_id == data.product_id) {
                        item.quantity += data.quantity;
                        flag = true;
                    }
                    return item;
                });
                if (!flag) {
                    carts.push(data);
                }
                localStorage.setItem("carts", JSON.stringify(carts)); // save
            } else {
                let cartTemp = [];
                cartTemp.push(data);
                localStorage.setItem("carts", JSON.stringify(cartTemp)); // save
            }
            setLocalCartState(!localCartState)
        }
    }

    return (
        <div className='productItem_container'>
            <div className='image'>
                <img src={productStore?.data?.avatar} alt="" />
            </div>
            <div className='productItem_infor'>
                <h3>{productStore?.data?.name}</h3>
                <p>{productStore?.data?.des}</p>
                <p>{convertToUSD(productStore?.data?.price)}</p>
                <div className="count_product">
                    <button
                        className="count"
                        onClick={() => {
                            if (quantity > 1) {
                                setQuantity(quantity - 1);
                            }
                        }}
                    >
                        <span className="material-symbols-outlined">-</span>
                    </button>

                    <span className="quantity" style={{ fontSize: "25px" }}>
                        {quantity}
                    </span>
                    <button
                        className="count"
                        onClick={() => {
                            if (quantity > 0) {
                                setQuantity(quantity + 1);
                            }
                        }}
                    >
                        <span className="material-symbols-outlined">+</span>
                    </button>
                </div>
                {/* <button className='add_to_cart_btn' onClick={() => addToCart(userStore?.data?.id, {
                    product_id: productStore?.data?.id,
                    quantity: 1
                })}>Add to cart</button> */}
                <button className='add_to_cart_btn' onClick={() => addToCart()}>Add to cart</button>
            </div>
        </div>
    )
}
