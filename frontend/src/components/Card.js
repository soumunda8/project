import React from 'react';

const Card = (props) => {

    let classes = '';
    
    if ( props.favorite === 1 ) {
        classes = 'favorite active';
    } else {
        classes = 'favorite';
    }
    
    return(
        <div>
            <div className="card" onClick={() => {props.cardLink(props.company_id)}}>
                <div className="thums">
                    <div className="img"></div>
                    <div className="logo"></div>
                </div>
                <div className="info">
                    <h3>{props.recruit}</h3>
                    <div className="company">{props.company}</div>
                    <div className="rebate">채용 보상금 {props.rebate.toLocaleString('en')} 원</div>
                </div>
                <div className="opt">
                    <div className="recom">
                        {(props.recom > 0) && <span>{props.recom.toLocaleString('en')} 명 추천</span>}
                    </div>
                    <div className={classes}></div>
                </div>
            </div>
        </div>
    )
}

export default Card;