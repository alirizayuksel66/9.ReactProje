export default function Header({ user, setUser }) {

    const loginHandle = user => {
        setUser(user)
    }

    const logoutHandle = () => {
        setUser(false)
    }

    return (
        <header className="header">
            <h2>LOGO</h2>
            {!user && (
                <nav>
                    <button onClick={() => loginHandle({ id: 1, username: 'Ali Riza Yuksel' })}> Ali Rıza Yüksel Olarak Giriş Yap</button>
                    <button onClick={() => loginHandle({ id: 2, username: 'Yuksel' })}>Yüksel Olarak Giriş Yap</button>
                </nav>
            )}
            {user && (
                <nav>
                    Hoşgeldin, {user.username}
                    <button onClick={logoutHandle}>Çıkış Yap</button>
                </nav>
            )}
        </header>
    )
}