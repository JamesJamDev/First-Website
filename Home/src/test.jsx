//import './test.css'
export default function Projects() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', padding: '0 20px' }}>
            <h1>PROJECTS:</h1>
            <div style={{ textAlign: 'center', maxWidth: '700px' }}>
                <h2>Boxception (2025)</h2>
                <p>Boxception is a 3D puzzle game I am developing, where you use a variety of unique boxes to complete puzzles while
                    taking control over various objects in the game world. The game is currently in development.
                </p>
            </div>
            <div style={{textAlign: 'center', maxWidth: '700px'}}>
                <h2>JellyJam's Tiny Company Mod (2024)</h2>
                <p>JellyJam's Tiny Company Mod is a mod I created for 'Lethal Company'. This allows the players to shrink to a fraction of their size and
                    experience the world of Lethal Company in a whole new perspective, from struggling to climb up to the door, to a normally small bug being able
                    to kidnap you. This is sure going to be a completely unique experience for the player.
                </p>
            </div>
        </div>
    )
}