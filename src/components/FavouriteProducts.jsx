import './FavouriteProducts.css'
import mockData from './mockData';

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const ProductItem = ({ id, url, title, regularPrice, salePrice, isDiscounted }) => {
    return (
        <div className="d-flex align-items-start mb-2 product-item">
            <img width={75} height={75} src={url} alt="shop hoa tươi hà nội" decoding="async" />
            <div className='ps-3 w-100'>
                <p className='m-0'>
                    {/* Use Router */}
                    <a className='fw-bold' href={`./${id}`}>{title}</a>
                </p>
                {isDiscounted ?
                    <p>
                        <span className='regular-price'>{formatter.format(regularPrice)}</span>
                        <br />
                        <span className='sale-price'>{formatter.format(salePrice)}</span>
                    </p> :
                    <p className='sale-price'>{formatter.format(regularPrice)}</p>
                }
            </div>
        </div>
    );
};

const FavouriteProducts = () => {

    return (
        <div>
            <h5 className='text-success py-2'>Sản phẩm yêu thích</h5>
            {
                mockData.map(product => (
                    <ProductItem
                        id={product.id}
                        url={product.url}
                        title={product.title}
                        regularPrice={product.regularPrice}
                        salePrice={product.salePrice}
                        isDiscounted={product.isDiscounted}
                    />
                ))
            }
        </div>
    );
};

export default FavouriteProducts;