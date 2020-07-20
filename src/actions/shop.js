import {
    // SET_SHOP_CATEGORIES
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS   
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'kasmkdaksmdion askndkanoksnf asndkasmkldn askndkans',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Database',
                description: 'kasmkdaksmdion askndkanoksnf asndkasmkldn askndkans',
                price: 1.99,
                belongsTo: [0, 3]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'kasmkdaksmdion askndkanoksnf asndkasmkldn askndkans',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'UI Design',
                description: 'kasmkdaksmdion askndkanoksnf asndkasmkldn askndkans',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript',
                description: 'kasmkdaksmdion askndkanoksnf asndkasmkldn askndkans',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 5,
                title: 'Advanced programming',
                description: 'kasmkdaksmdion askndkanoksnf asndkasmkldn askndkans',
                price: 1.99,
                belongsTo: [0, 5]
            },
            {
                _id: 6,
                title: 'JavaScript Development',
                description: 'kasmkdaksmdion askndkanoksnf asndkasmkldn askndkans',
                price: 1.99,
                belongsTo: [0, 1]
            }
        ]
    })
}