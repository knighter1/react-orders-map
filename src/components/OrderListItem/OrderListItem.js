import { Select } from "antd";
import { SELECT_ORDER } from "../../redux/actions/ordersListActions";
import { RESET_MARKERS, SETUP_MARKER } from "../../redux/actions/mapMarkersActions";
import { useSelector, useDispatch } from 'react-redux';

import "antd/dist/antd.css";
import styles from './OrderListItem.module.css';
import { getPointById } from "../../utils/points";

const { Option } = Select;

const OrderListItem = ({orderData, points}) => {

    const dispatch = useDispatch();
    const ordersList = useSelector(store => store.ordersList);

    const selectOrder = () => {
        dispatch({type: SELECT_ORDER, orderId: orderData.id});
        dispatch({type: RESET_MARKERS});

        const [fromPoint, destPoint] = [getPointById(orderData.from), getPointById(orderData.dest)];

        dispatch({type: SETUP_MARKER, position: {lat: fromPoint.lat, lng: fromPoint.lng}});
        dispatch({type: SETUP_MARKER, position: {lat: destPoint.lat, lng: destPoint.lng}});
    }

    return (
        <div className={`${styles.container} ${ordersList === orderData.id ? styles.selected : ''}`} onClick={() => selectOrder()}>
            <div>
                <span className={styles.label}>Откуда:</span>
                <Select className={styles.list} listItemHeight={10} listHeight={250} value={orderData.from}>
                {
                    points.map(item => {
                        return <Option value={item.id} key={item.id}>{item.name}</Option>
                    })
                }
                </Select>
            </div>

            <div>
                <span className={styles.label}>Куда:</span>
                <Select className={styles.list} listItemHeight={10} listHeight={250} value={orderData.dest}>
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
