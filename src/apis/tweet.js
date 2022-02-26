import { apiHelper } from '../utils/helpers'

const getToken = () =>{
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJyb290QGV4YW1wbGUuY29tIiwibmFtZSI6InJvb3QiLCJhY2NvdW50Ijoicm9vdCIsInJvbGUiOiJhZG1pbiIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzMyMC8yNDAvcGVvcGxlIiwiaW50cm9kdWN0aW9uIjoidXQiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzgwMC82MDAvcGFyaXMiLCJjcmVhdGVkQXQiOiIyMDIyLTAyLTI1VDE3OjAxOjU5LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAyLTI1VDE3OjAxOjU5LjAwMFoiLCJpYXQiOjE2NDU4NTcwNTEsImV4cCI6MTY0ODQ0OTA1MX0.tiYQ2jzHIclyMWikYdTj6OY4vPwWt2TDLTNT4wsXiXo'
}

export default {
    getMainTweet(){
        return apiHelper.get('/tweets',{
            headers: { Authorization: `Bearer ${getToken()}` } 
        })
    }
}