import { apiHelper } from '../utils/helpers'

const getToken = () => localStorage.getItem('token')

export default {
    followUser({userId}){
        return apiHelper.post(`/followship/${userId}`, null, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    unFollowUser({userId}){
        return apiHelper.delete(`/followship/${userId}`,{
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    }
}