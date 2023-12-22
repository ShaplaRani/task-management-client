import PropTypes from 'prop-types';

const FeatureCard = ({feature}) => {
     const {description, icon} = feature;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
    <figure><img className='h-80 w-full' src={icon} alt="Shoes" /></figure>
     <div className="card-body">
      <h2 className="card-title text-2xl">{feature.feature}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn text-lg bg-emerald-600 text-white">Explore</button>
    </div>
      </div>
    </div>
            
        </div>
    );
};

 FeatureCard.propTypes = {
    feature: PropTypes.object
}
export default FeatureCard;