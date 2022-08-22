import { Select } from "antd";
import { CHANGE_DESTINATION_POINT, CHANGE_SOURCE_POINT, SELECT_ORDER } from "../../redux/actions/orderActions";
import { RESET_MARKERS, SETUP_MARKER } from "../../redux/actions/mapMarkersActions";
import { getPointById } from "../../utils/points";
import { buildRoute } from "../../redux/actions/mapRouteActions";
import { useSelector, useDispatch } from "../../hooks";

import "antd/dist/antd.css";
import styles from './OrderListItem.module.css';

const { Option } = Select;

const OrderListItem = ({orderId, points}) => {

    const dispatch = useDispatch();

    const orderReducer = useSelector(store => store.order);
    const orders = orderReducer.ordersList
    const currentOrderId = orderReducer.currentOrderId;

    const orderData = orders && orders.find(item => item.id === orderId);

    const updateMarkers = () => {
        dispatch({type: RESET_MARKERS});

        const [sourcePoint, destPoint] = [getPointById(orderData.source), getPointById(orderData.dest)];

        dispatch({type: SETUP_MARKER, position: {lat: sourcePoint.lat, lng: sourcePoint.lng}});
        dispatch({type: SETUP_MARKER, position: {lat: destPoint.lat, lng: destPoint.lng}});
    }

    const handleChangeSource = (value) => {
        dispatch({type: CHANGE_SOURCE_POINT, orderId, pointId: value});
        orderData.source = value;
        updateMarkers();
    };

    const handleChangeDestination = (value) => {
        dispatch({type: CHANGE_DESTINATION_POINT, orderId, pointId: value});
        orderData.dest = value;
        updateMarkers();
    };

    const selectOrder = () => {
        dispatch(buildRoute(orderData.source, orderData.dest));

        if (orderId === currentOrderId)
            return;

        dispatch({type: SELECT_ORDER, orderId});
        updateMarkers();
    }

    return (
        orderData && <div className={`${styles.container} ${currentOrderId === orderId ? styles.selected : ''}`} onClick={(d) => selectOrder(d)}>
            <div>
                <span className={styles.label}>Откуда:</span>
                <Select className={styles.list} listItemHeight={10} listHeight={250} value={orderData.source} onChange={handleChangeSource}>
                {
                    points.map(item => {
                        return <Option value={item.id} key={item.id}>{item.name}</Option>
                    })
                }
                </Select>
            </div>

            <div>
                <span className={styles.label}>Куда:</span>
                <Select className={styles.list} listItemHeight={10} listHeight={250} value={orderData.dest} onChange={handleChangeDestination}>
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
