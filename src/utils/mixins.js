import FollowShipsApi from '../apis/Followships'
import { Toast } from '../utils/helpers.js'

export const FollowshipMethods = {
    methods: {
        async afterClickFollow(userId){
            try{
                const {statusText} = await FollowShipsApi.followUser({userId})
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                // 這裡為users
                this.users = this.users.map(user => {
                    if(user.id === userId){
                        return {
                            ...user,
                            isFollowed: !user.isFollowed
                        }
                    }else{
                        return user
                    }
                })
            }catch(error){
                console.log('error', error.message)
                Toast.fire({
                    icon: 'error',
                    title: '追蹤使用者失敗，請稍後再試'
                })
            }
        },
        async afterClickUnFollow(userId){
            try{
                const {statusText} = await FollowShipsApi.unFollowUser({userId})
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.users = this.users.map(user => {
                    if(user.id === userId){
                        return {
                            ...user,
                            isFollowed: !user.isFollowed
                        }
                    }else{
                        return user
                    }
                })
            }catch(error){
                console.log('error', error.message)
                Toast.fire({
                    icon: 'error',
                    title: '追蹤使用者失敗，請稍後再試'
                })
            }
        },
    }
}

export const TweetsFollowshipMethods = {
    methods: {
        async afterClickFollow(userId){
            try{
                const {statusText} = await FollowShipsApi.followUser({userId})
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                // 這裡為tweets
                this.tweets = this.users.map(user => {
                    if(user.id === userId){
                        return {
                            ...user,
                            isFollowed: !user.isFollowed
                        }
                    }else{
                        return user
                    }
                })
            }catch(error){
                console.log('error', error.message)
                Toast.fire({
                    icon: 'error',
                    title: '追蹤使用者失敗，請稍後再試'
                })
            }
        },
        async afterClickUnFollow(userId){
            try{
                const {statusText} = await FollowShipsApi.unFollowUser({userId})
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.users = this.users.map(user => {
                    if(user.id === userId){
                        return {
                            ...user,
                            isFollowed: !user.isFollowed
                        }
                    }else{
                        return user
                    }
                })
            }catch(error){
                console.log('error', error.message)
                Toast.fire({
                    icon: 'error',
                    title: '追蹤使用者失敗，請稍後再試'
                })
            }
        },
    }
}