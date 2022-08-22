import { Select } from "antd";
import { SELECT_ORDER } from "../../redux/actions/ordersListActions";
import { useSelector, useDispatch } from 'react-redux';

import "antd/dist/antd.css";
import styles from './OrderListItem.module.css';

const { Option } = Select;

const OrderListItem = ({data, points}) => {

    const dispatch = useDispatch();
    const ordersList = useSelector(store => store.ordersList);

    const f1 = (id) => {
        dispatch({ type: SELECT_ORDER, orderId: id });
    }

    return (
        <div className={`${styles.container} ${ordersList === data.id ? styles.selected : ''}`} onClick={() => f1(data.id)}>
            <div>
                <span className={styles.label}>Откуда:</span>
                <Select className={styles.list} listItemHeight={10} listHeight={250} value={data.from}>
                {
                    points.map(item => {
                        return <Option value={item.id} key={item.id}>{item.name}</Option>
                    })
                }
                </Select>
            </div>

            <div>
                <span className={styles.label}>Куда:</span>
                <Select className={styles.list} listItemHeight={10} listHeight={250} value={data.dest}>
                {
                    points.map(item => {
                        return <Option value={item.id} key={item.id}>{item.name}</Option>
                    })
                }
                </Select>
            </div>
        </div>
    );
}

export default OrderListItem;
