import OrderListItem from '../OrderListItem/OrderListItem';
import { List } from 'antd';
import points from '../../points.json';

import styles from './OrdersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SET_ORDERS } from '../../redux/actions/orderActions';

const OrdersList = ({orders}) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({type: SET_ORDERS, orders});
    }, [dispatch, orders]);

    const storeOrders = useSelector(store => store.order?.ordersList);

    return (
        <div className={styles.listContainer}>
            <List
                className={styles.list}
                itemLayout="vertical"
                size="small"
                dataSource={storeOrders}
                bordered={true}
                renderItem={item => (
                <List.Item
                    key={item.id}
                    actions={[]}
                >
                    <OrderListItem orderId={item.id} points={points} />
                </List.Item>
            )}
            />
        </div>
    )
};

export default OrdersList;
