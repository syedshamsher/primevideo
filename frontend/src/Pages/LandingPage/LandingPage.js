import React from 'react'
import styles from './styles.module.css'

const LandingPage = () => {

    React.useEffect(() => {
    }, [])

    return (
                <div className={styles.wrapper}>
                    <header
                        className={styles.banner}
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `linear-gradient(to right, #0f171e 40%, transparent 100%),url("")`,
                            backdropPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height:'88vh'
                        }}
                        >
                        <div className={styles.container}>
                            <div >
                                <h1>Welcome to Prime Video</h1>
                                <p className={styles.description} >
                                    Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals
                                </p>
                                <button>Start your 30-day free trial</button>
                            </div>
                            <div> {` `} </div>
                        </div>
                    </header>
                    <div>
                    </div>
                </div>
       
    )
}


export {LandingPage}
