import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

  return (
    <section className='App'>
      <TwitterFollowCard username="Reisel_Rol_7" name="Reisel" isFollowing/>
      <TwitterFollowCard username="ChemaGod" name="Chema" isFollowing={false}/>
    </section>
  )

}