/* eslint-disable no-unused-vars */
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return (
    <>
      <div id='container'>
        <TwitterFollowCard initialIsFollowing userName="Tede00" name="TedeElJede"/>
        <TwitterFollowCard initialIsFollowing userName="TrImEaS" name="TrImEaS"/>
        <TwitterFollowCard initialIsFollowing={false} userName="Agusibanez" name="AgusCLaCme"/>
      </div>
    </>
  )
}
