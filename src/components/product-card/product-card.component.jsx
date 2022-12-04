import './product-card.styles.scss';

import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';

const ProductCard = ({ product }) => {
    let { name, price, imageUrl } = product;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name} </span>
            </div>
            <div className='footer'>
                <span className='price'>Rs. {price} only</span>
            </div>
            <div className='footer'>
                <h2  className='name'>Easy Installment Plan</h2>
                <span className='price'><span className='down-payment' >Down payment:</span>Rs. {(price * 20 / 100).toFixed(0)}</span>
            </div>
            <div className='footer'>
                <span className='price'><span className='bg'>12 Month Plan: </span>Rs. {((price - ((price * 20) / 100)) / 11).toFixed(0)} /per month</span>
            </div><br/>
            <div className='footer'>
                <span className='price'><span className='bg'>24 Month Plan:</span> Rs. {((price - ((price * 20) / 100)) / 23).toFixed(0)} /per month</span>
            </div><br/>
            <div className='footer'>
                <span className='price'><span className='bg'>36 Month Plan: </span>Rs. {((price - ((price * 20) / 100)) / 35).toFixed(0)} /per month</span>
            </div>
            <div className='footer'>
                <a
                    href="https://wa.me/923258199119"
                    class="whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='whatsapp-container'>
                        <Whatsapp className='whatsapp' />
                        Buy Now
                    </div>
                </a>
                
            </div>

            <div className='footer'>
                <a
                    href="https://wa.me/923268672603"
                    class="whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='whatsapp-container'>
                        <Whatsapp className='whatsapp' />
                        Ask for Details
                    </div>
                </a>
                
            </div>
            <div className='footer'>
                <a
                    href="https://wa.me/923267647251"
                    class="whatsapp-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className='whatsapp-container'>
                        <Whatsapp className='whatsapp' />
                        contact Us
                    </div>
                </a>
                
            </div>
        </div>  
    );
};

export default ProductCard;