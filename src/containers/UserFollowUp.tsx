import { DefaultData } from '../types'
import { FollowUpItem } from '../components'

type FollowUpProps = Pick<DefaultData, 'followers' | 'following' | 'public_repos' | 'repos_url'>

export const UserFollowUp = (userData: FollowUpProps) => {
    return (
        <div
            className={`followup mb-[30px] flex w-full justify-evenly rounded-[10px] bg-[#F6F8FF] py-[18px] px-[32px] dark:bg-[#141D2F] sm:grid sm:grid-cols-3`}
        >
            <FollowUpItem
                itemName='Repos'
                itemData={userData?.public_repos}
                itemLink={userData?.repos_url}
            />
            <FollowUpItem
                itemName='Followers'
                itemData={userData?.followers}
                itemLink={userData?.repos_url}
            />
            <FollowUpItem
                itemName='following'
                itemData={userData?.following}
                itemLink={userData?.repos_url}
            />
        </div>
    )
}
