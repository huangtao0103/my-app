import request from '../utils/request'
import config from '../utils/config'

export function getTableList() {
    return request(`${config.baseUrl}/table/list`)
}