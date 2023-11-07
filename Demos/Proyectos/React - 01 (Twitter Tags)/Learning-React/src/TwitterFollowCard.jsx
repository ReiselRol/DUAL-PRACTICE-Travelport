import { useState } from "react"

export function TwitterFollowCard ({username, name, initialIsFollowing}) { 

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    const imageSrc = "https://unavatar.io/" + name
    const followingString = isFollowing ? 'Siguiendo' : 'Seguir'
    return (
        <article className='tw-followCard'>
          <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="Hola" src={imageSrc} />
            <div className='tw-followCard-info'>
              <strong>{name}</strong>
              <span className='tw-followCard-infoUserName'>@{username}</span>
            </div>
          </header>
          <aside>
            <button className='tw-followCard-button' onClick={handleClick}>
              {followingString}
            </button>
          </aside>
        </article>
      )
}