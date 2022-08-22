import OrderItem from '../OrderItem/OrderItem';
import { List } from 'antd';
import points from '../../points.json';

import styles from './OrdersList.module.css';

const OrdersList = ({orders}) => {

    return (
        <div className={styles.listContainer}>
            <List
                className={styles.list}
                itemLayout="vertical"
                size="small"
                dataSource={orders}
                bordered={true}
                renderItem={item => (
                <List.Item
                    key={item.id}
                    actions={[]}
                >
                    <OrderItem data={item} points={points} />
                </List.Item>
            )}
            />
        </div>
    )
};

export default OrdersList;
