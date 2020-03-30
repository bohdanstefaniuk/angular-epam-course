import { OrderItem } from './order-items';

export class Order {
    id: number;
    ordererName: string;
    address: string;
    items: Array<OrderItem>;
}
