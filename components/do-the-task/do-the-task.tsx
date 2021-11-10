import styled from 'styled-components';

type TextContent = {
    title1: string;
    title2: string;
}

const DoTheTask = ({ title1, title2 }: TextContent) => {
    return (
        <div className="title">
            <div className="title__1">{title1}</div>
            <div className="title__2">{title2}</div>
            <div className="box">
                <div className="box__1"></div>
                <div className="box__2"></div>
            </div>
        </div>
    );
}

export default DoTheTask;