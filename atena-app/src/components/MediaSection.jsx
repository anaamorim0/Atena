import arrowIcon from '../assets/icons/arrow-icon.png'
import Carousel3D from './Carousel3D';

function MediaSection({ title, items }) {
    return (
        <div className="media-section-card">
            <div className="section-header">
                <h2>{title}</h2>
                <div className="section-arrow">
                    <img src={arrowIcon} alt="See All" />
                </div>
            </div>

            <Carousel3D items={items} />
        </div>
    );
}

export default MediaSection;