const PlayerInfo = ({name, avatar, children, header}) => {
    return(
        <div className="battleCard">
            {header}
            <div className={`cardAvatar medium centered`}>
                <img alt={`Avatar for ${name}`} src={avatar} />
            </div>
            <h1>{name}</h1>
            {children}
        </div>
    );
}

export default PlayerInfo;