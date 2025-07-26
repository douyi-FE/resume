import { httpGet } from '@/utils/http'

export const getBasicData = () => {
    return httpGet('/api/basic', {
        page: 1,
        pageSize: 10,
    })
}