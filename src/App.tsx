import { useState } from 'react'
import { Navigation, Search, UserCard } from './components'
import { useDarkmode } from './hooks'
import type { DefaultData } from './types'

function App() {
    useDarkmode()
    const defaultData = {
        name: "Shreyas Dhoke",
        login: "shreyasd2001",
        avatar_url: "https://avatars.githubusercontent.com/u/72761874?v=4",
        url: "https://api.github.com/users/SHREYASD2001",
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
        created_at: "2020-10-12T18:35:25Z",
        followers: 1000,
        following: 0,
        public_repos: 4,
        location: "Hyderabad",
        email: "shreyas.dhoke@ril.com",
        blog: "null",
        twitter_username: "shreyas_Dh0ke",
        company: "JPL",
        html_url: "https://github.com/SHREYASD2001",
        repos_url: "https://api.github.com/users/SHREYASD2001/repos"
    }

    const [searchData, setSearchData] = useState<DefaultData>(defaultData)

    const handleSetSearchData = (searchData: DefaultData) => setSearchData(searchData)

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-[#F6F8FF] transition-colors dark:bg-[#141D2F]'>
            <main className='container font-spaceMono sm:w-[573px] md:w-[730px]'>
                <Navigation />
                <Search handleSetSearchData={handleSetSearchData} />
                <UserCard {...searchData} />
            </main>
        </div>
    )
}

export default App
