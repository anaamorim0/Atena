import { Link } from 'react-router-dom'
import arrowIcon from '../assets/icons/arrow-icon.png'

function Films() {
    return (
        <div className="films">
            <main className="content">
                <Link to="/movies" className="card">
                    <h2>Movies</h2>
                    <div className="arrow-icon">
                        <img src={arrowIcon} alt="Go" />
                    </div>
                </Link>

                <Link to="/series" className="card">
                    <h2>Series</h2>
                    <div className="arrow-icon">
                        <img src={arrowIcon} alt="Go" />
                    </div>
                </Link>
            </main>
        </div>
    )
}

export default Films