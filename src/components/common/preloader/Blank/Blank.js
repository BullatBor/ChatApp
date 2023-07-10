import classes from "./Blank.module.css"

export const FriendsSliderBlank = () => {
    const blankArr = [1, 2, 3, 4, 5, 6];
    return (
        <div className={classes.FriendsList}>
            {
                blankArr.map(item => {
                    return (
                        <div key={item} className={classes.FriendPhoto}>
                            <div className={classes.blankImg}>
                            </div>
                            <div className={classes.blankSpan}></div>
                        </ div>
                    )
                })
            }
        </div>
    )
}

export const ProfileFriendsBlank = () => {
    const blankArr = [1, 2, 3, 4];
    return (
        <div className={classes.friendsList}>
            {
                blankArr.map(item => {
                    return (
                        <div key={item} className={classes.friend}>
                            <div className={classes.friendImg}>
                                <div className={classes.blankProfileImg}></div>
                            </div>
                            <div className={classes.blankSpan}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const NewsPostBlank = () => {
    const blankArr = [1, 2, 3, 4, 5];
    return (
        <div className={classes.postBlank}>
            {
                blankArr.map(item => {
                    return (
                        <div key={item} className={classes.post}>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}
