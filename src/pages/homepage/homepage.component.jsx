//Home page is in pages folder because we're not gonna use it more than once in our code and hence will be a page
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

const HomePage = () => {
    return (
        <div className="homepage">
           <Directory/>
        </div>
    )
}

export default HomePage