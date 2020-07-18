import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.50,
                orderNumber: 'asdad454',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Kevin Castro',
                    shippingAddress: '123 Ws Street'
                }
            },
            {
                _id: 1,
                total: 19.50,
                orderNumber: 'asdad454',
                orderDate: new Date().toDateString(),
                creditCard: '-0001',
                user: {
                    name: 'Kevin Castro',
                    shippingAddress: '123 Ws Street'
                }
            },
            {
                _id: 2,
                total: 19.50,
                orderNumber: 'asdad454',
                orderDate: new Date().toDateString(),
                creditCard: '-0002',
                user: {
                    name: 'Kevin Castro',
                    shippingAddress: '123 Ws Street'
                }
            },
            {
                _id: 3,
                total: 19.50,
                orderNumber: 'asdad454',
                orderDate: new Date().toDateString(),
                creditCard: '-0003',
                user: {
                    name: 'Kevin Castro',
                    shippingAddress: '123 Ws Street'
                }
            },
            {
                _id: 4,
                total: 19.50,
                orderNumber: 'asdad454',
                orderDate: new Date().toDateString(),
                creditCard: '-0004',
                user: {
                    name: 'Kevin Castro',
                    shippingAddress: '123 Ws Street'
                }
            },
            {
                _id: 5,
                total: 19.50,
                orderNumber: 'asdad454',
                orderDate: new Date().toDateString(),
                creditCard: '-0005',
                user: {
                    name: 'Kevin Castro',
                    shippingAddress: '123 Ws Street'
                }
            },
            {
                _id: 6,
                total: 19.50,
                orderNumber: 'asdad454',
                orderDate: new Date().toDateString(),
                creditCard: '-0006',
                user: {
                    name: 'Kevin Castro',
                    shippingAddress: '123 Ws Street'
                }
            }
        ]
    })
}