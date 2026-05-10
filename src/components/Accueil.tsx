export function Home() {
    return (
        <div className="main-container"> 
            <header className="hero-section">
                <img src="/src/image/icon-icons.svg" alt="Mawazine Logo" className="logo" />
                <Azol />
                <Button/>
            </header>
           
        </div>
        
    );
}

function Azol() {
    return (
        <div className="azol-content">
            <h1 className="title-beat">BEAT</h1>
            <h2 className="welcome-text">Welcome to Mawazine 2026</h2>
            <p className="location">Rabat</p>
          
        </div>
    );
    
}
function Button() {
    return (
        <>
            <button className="nav-button">Programme</button>
        </>
    );
}