/* eslint-disable no-unused-vars */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return (
    <>
      <div id='container'>
        <TwitterFollowCard initialIsFollowing userName="Noiszia" name="Gonzalo Rives vive cerca de fletes"/>
        <TwitterFollowCard initialIsFollowing userName="PalaveccinoLu" name="Platonica de Fernan"/>
        <TwitterFollowCard initialIsFollowing={false} userName="Jugadornro99" name="Fernan El Crack"/>
      </div>
    </>
  )
}
