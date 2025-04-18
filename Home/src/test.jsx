//import './test.css'
import steamLogo from './assets/steamlogo.png'; 
export default function Projects() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', padding: '0 20px' }}>
            <h1>PROJECTS:</h1>
            <div style={{ textAlign: 'center', maxWidth: '40%' }}>
                <h2>Boxception (2025)</h2>
                <p>Boxception is a 3D puzzle game I am developing, where you use a variety of unique boxes to complete puzzles while
                    taking control over various objects in the game world. The game is currently in development.
                </p>
                <h1>Steam Page</h1>
                    <a href="https://store.steampowered.com/app/1729280/Boxception/" target="_blank" rel="noopener noreferrer">
                        <img src={steamLogo} className="jellyjam" alt="Steam Logo" style={{ width: '100px', height: '100px' }}/>
                    </a>
            </div>
            <div style={{textAlign: 'center', maxWidth: '40%'}}>
                <h2>JellyJam's Tiny Company Mod (2024)</h2>
                <p>JellyJam's Tiny Company Mod is a mod I created for 'Lethal Company'. This allows the players to shrink to a fraction of their size and
                    experience the world of Lethal Company in a whole new perspective, from struggling to climb up to the door, to a normally small bug being able
                    to kidnap you. This is sure to be a completely unique experience for the player.
                </p>
                <p>This mod has been played by many Youtubers, amassing over a total of 1 million views among the videos</p>
            </div>
            <div style={{textAlign: 'center', maxWidth: '40%'}}>
                <h2>Timed Control 3D (2023)</h2>
                <p>A remake of a game jam project where you have to survive in an area while defeating enemies, 
                    you earn coins to then buy power ups such as more health, stationary turrets to defend you or even explosive arrows, 
                    all to assist you in surviving the waves of enemies.
                </p>
            </div>
            <div style={{textAlign: 'center', maxWidth: '40%'}}>
                <h2></h2>
                <p>
                </p>
            </div>
        </div>
    )
}