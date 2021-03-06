import { env } from '../../root';

const ROOT_URL = `${env.domain}/server/`;
export const GoodsCollectApi = {
    mine: {
        url: `${ROOT_URL}goodscollect/mine`,
        method: 'GET'
    },
    add: {
        url: `${ROOT_URL}goodscollect/add`,
        method: 'POST'
    },
    del: {
        url: `${ROOT_URL}goodscollect/del`,
        method: 'POST'
    },
}
