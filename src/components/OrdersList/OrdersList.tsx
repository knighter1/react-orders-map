import OrderListItem from '../OrderListItem/OrderListItem';
import { List } from 'antd';
import points from '../../points.json';
import { IOrder } from '../../Types/order';

import styles from './OrdersList.module.css';

import { useDispatch, useSelector } from '../../hooks';
import { FC, useEffect } from 'react';
import { setOrders } from '../../redux/actions/orderActions';

interface IOrdersListProps {
    orders: IOrder[]
}

const OrdersList: FC<IOrdersListProps> = ({orders}: IOrdersListProps) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setOrders(orders));
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
                renderItem={(item: IOrder) => (
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
