type Props = { 
    text: string;
}

const Logo = () => {
    return (
        <>
            <div className="logo logo__leftSide"/>
            <div className="logo logo__rightSide"/>
        </>
    );
}


const Header = ({ text }: Props) => {
    return (
        <div className="headerPanel">
            <Logo/>
            <p className="text">{text}</p>
        </div>
    );
}

export default Header;