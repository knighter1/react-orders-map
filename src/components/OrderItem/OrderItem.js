import { Select } from "antd";
import "antd/dist/antd.css";
import styles from './OrderItem.module.css';

const { Option } = Select;

const OrderItem = ({data, points}) => {

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.label}>Откуда:</span>
                <Select style={{width: 200}} listItemHeight={10} listHeight={250} value={data.from}>
                {
                    points.map(item => {
                        return <Option value={item.id} key={item.id}>{item.name}</Option>
                    })
                }
                </Select>
            </div>

            <div>
                <span className={styles.label}>Куда:</span>
                <Select style={{width: 200}} listItemHeight={10} listHeight={250} value={data.dest}>
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

export default OrderItem;
