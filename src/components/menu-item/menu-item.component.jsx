import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({item,history}) => {
    return (
        <div className={`${item.size} menu-item`} onClick ={e => history.push(item.linkUrl)}>
            <div className='background-image'
                  style={{backgroundImage: `url(${item.imageUrl})`}} 
            />
            <div className="content">
                <h1 className="title">{item.title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

//With-Router allows us to make use of Route from App component without prop drilling
export default withRouter(MenuItem);