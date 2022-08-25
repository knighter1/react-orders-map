import { Select } from "antd";
import { changeDestinationPoint, changeSourcePoint, selectOrder } from "../../redux/actions/orderActions";
import { resetMarkers, setupMarker } from "../../redux/actions/mapMarkersActions";
import { getPointById } from "../../utils/points";
import { buildRoute, buildRouteSuccess } from "../../redux/actions/mapRouteActions";
import { useSelector, useDispatch } from "../../hooks";

import "antd/dist/antd.css";
import styles from './OrderListItem.module.css';
import { TPoint } from "../../Types/point";
import { FC } from "react";
import { IOrder } from "../../Types/order";

const { Option } = Select;

interface IOrderListItemProps {
    orderId: number;
    points: TPoint[];
}

const OrderListItem: FC<IOrderListItemProps> = ({orderId, points}: IOrderListItemProps) => {

    const dispatch = useDispatch();

    const orderReducer = useSelector(store => store.order);
    const orders = orderReducer.ordersList
    const currentOrderId = orderReducer.currentOrderId;

    const orderData = orders && orders.find((item: IOrder) => item.id === orderId);

    const updateMarkers = () => {
        dispatch(resetMarkers());
        dispatch(buildRouteSuccess([]));

        const [sourcePoint, destPoint]: [TPoint | undefined, TPoint| undefined] = [getPointById(orderData.source), getPointById(orderData.dest)];

        sourcePoint && dispatch(setupMarker({lat: sourcePoint.lat, lng: sourcePoint.lng}));
        destPoint && dispatch(setupMarker({lat: destPoint.lat, lng: destPoint.lng}));
    }

    const handleChangeSource = (value: number) => {
        dispatch(changeSourcePoint(orderId, value));
        orderData.source = value;
        updateMarkers();
    };

    const handleChangeDestination = (value: number) => {
        dispatch(changeDestinationPoint(orderId, value));
        orderData.dest = value;
        updateMarkers();
    };

    const handleSelectOrder = () => {
        dispatch(buildRoute(orderData.source, orderData.dest));

        if (orderId === currentOrderId)
            return;

        dispatch(selectOrder(orderId));
        updateMarkers();
    }

    return (
        orderData && <div className={`${styles.container} ${currentOrderId === orderId ? styles.selected : ''}`} onClick={() => handleSelectOrder()}>
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
