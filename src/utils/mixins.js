import FollowShipsApi from '../apis/Followships'
import tweetApis from '../apis/tweet'
import { Toast } from '../utils/helpers.js'
// import moment from 'moment'

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

export const Like = {
    methods: {
        async handleAddLike(tweetId){
            try{
                const {statusText} = await tweetApis.addLike({tweetId})
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.tweet = {
                    ...this.tweet,
                    likeCount: this.tweet.likeCount + 1,
                    isLiked: true
                }

            }catch(error){
                console.log('error',error.message)

                Toast.fire({
                    icon: 'error',
                    title: '加到喜歡失敗，請稍後再試'
                })
            }
        },
        async handleUnLike(tweetId){
            try{
                const {statusText} = await tweetApis.unLike({tweetId})
                if(statusText !== 'OK'){
                    throw new Error(statusText)
                }
                this.tweet = {
                    ...this.tweet,
                    likeCount: this.tweet.likeCount - 1,
                    isLiked: false
                }

            }catch(error){
                console.log('error',error.message)

                Toast.fire({
                    icon: 'error',
                    title: '收回喜歡失敗，請稍後再試'
                })
            }
        },
    }
}
// export const fromNowFilters = {
//     filters: {
//         fromNow(datetime){
//             if(!datetime){
//                 return '-'
//             }
//             // 使用moment 提供的fromNow 方法
//             return datetime ? moment(datetime).fromNow() : '-'
//         }
//     }
// }