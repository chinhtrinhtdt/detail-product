import { Breadcrumb, Button, Carousel, Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import Endow from '../components/Endow';
import FavouriteProducts from '../components/FavouriteProducts';
import QuantityInput from '../components/QuantityInput';
import RatingForm from '../components/RatingForm';
import './Detail.css';
import mockData from '../components/mockData';

const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function Detail() {
  return (
    <>
      <Container>
        <Row>
          {/* SIDE LEFT */}
          <Col xs={12} lg={9}>
            {/* DETAIL PRODUCT */}
            <Row >
              <Col>
                <img alt='flower' src='https://shophoahanoi.com/wp-content/uploads/2021/06/gdgh.jpg' />
              </Col>
              <Col className="mt-5 mt-md-0">
                <Breadcrumb>
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                  <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>

                <h2>Hoa chúc mừng khai trương</h2>
                <p className='price'>
                  <span className="currencySymbol">₫</span>760,000
                </p>

                <div className='prombox'>
                  <h6>ƯU ĐÃI ĐẶC BIỆT</h6>
                  <ol>
                    <li>Tặng Banner Hoặc Thiệp (Trị Giá 20.000đ - 50.000đ) Miễn Phí</li>
                    <li>Giao Miễn Phí Trong Nội Thành 63/63 Tỉnh</li>
                    <li>Giao Gấp Trong Vòng 60 phút</li>
                    <li>Cam Kết 100% Hoàn Lại Tiền Nếu Bạn Không Hài Lòng</li>
                    <li>Gửi Hình Hoa Trước Và Sau Khi Giao</li>
                    <li>Cam Kết Hoa Tươi Trên 3 Ngày</li>
                    <li>Có Hóa Đơn VAT 10%</li>
                  </ol>
                  <small>
                    <i>
                      Chú ý: Giảm tiếp 3% cho đơn hàng bạn tạo online lần thứ 2, 5% cho đơn hàng bạn tạo online lần thứ 5 và 10% cho đơn hàng bạn tạ online lần thứ 10.
                    </i>
                  </small>
                </div>

                <div className='d-flex justify-content-start mt-4'>
                  <QuantityInput />
                  <Button className='ms-5' variant="success">Thêm vào giỏ hàng</Button>
                </div>

                <div class="mt-5">
                  <a href="/#" target='_blank' class="btn btn-primary me-2 rounded-circle social-btn"><i class="fab fa-facebook"></i></a>
                  <a href="/#" target='_blank' class="btn btn-info me-2 rounded-circle social-btn"><i class="fab fa-twitter"></i></a>
                  <a href="/#" target='_blank' class="btn btn-danger me-2 rounded-circle social-btn"><i class="fab fa-instagram"></i></a>
                </div>
              </Col>
            </Row>

            {/* TAB DESCRIPTION */}
            <Row className='my-5'>
              <Tabs
                defaultActiveKey="description"
                id="tab-description"
                className="mb-3"
              >
                <Tab eventKey="description" title="MÔ TẢ">
                  Chào mừng đến với cửa hàng hoa thượng hạng của chúng tôi, nơi mang đến cho bạn trải nghiệm hoa tươi tinh khôi và dịch vụ đẳng cấp. Với sứ mệnh tạo ra những giây phút đáng nhớ và nâng tầm vẻ đẹp của cuộc sống, chúng tôi tự hào là điểm đến lý tưởng cho những người yêu hoa và tìm kiếm sự sang trọng.
                  Chúng tôi tự tin về dịch vụ giao hàng nhanh chóng trong vòng 60 phút, đảm bảo rằng mỗi bông hoa đến tay bạn vẫn tươi mới và toả hương thơm quyến rũ. Đặc biệt, chúng tôi tặng kèm thiệp cao cấp, mang đến lời chúc tình yêu, sự chúc phúc hay lời chúc mừng đầy ý nghĩa.
                  Với đội ngũ chuyên gia hoa tài năng và sự lựa chọn kỹ lưỡng từ những loại hoa đẹp nhất, chúng tôi đảm bảo rằng mỗi sản phẩm hoa đều được sắp xếp tinh tế và tạo nên sự kết hợp mỹ miều, kiêu sa. Chúng tôi không chỉ bán hoa, mà còn mang đến cho bạn một tác phẩm nghệ thuật tự nhiên, tươi mới, và đậm chất sang chảnh.
                  Hãy để chúng tôi chăm sóc mỗi chi tiết, từ việc lựa chọn hoa đến việc gói quà cẩn thận, để bạn có thể tận hưởng niềm vui và thăng hoa trong mỗi khoảnh khắc. Đến với cửa hàng hoa của chúng tôi, bạn sẽ cảm nhận được sự lịch lãm, thanh lịch và sang trọng trong từng cánh hoa đều toả ra.
                  Hãy đặt niềm tin vào chúng tôi, và chúng tôi cam kết mang đến cho bạn trải nghiệm đáng nhớ, với sự hài lòng tuyệt đối.
                </Tab>
                <Tab eventKey="rate" title="ĐÁNH GIÁ">
                  <RatingForm />
                </Tab>
              </Tabs>
            </Row>

            {/* PRODUCT RELATED */}
            <Row>
              <hr />
              <h5 className='text-success py-2'>Sản phẩm tương tự</h5>
              <Carousel>
                {mockData.map((product) => (
                  <Carousel.Item key={product.id}>
                    <div className="d-flex align-items-start mb-2 product-item">
                      <img width={75} height={75} src={product.url} alt="shop hoa tươi hà nội" decoding="async" />
                      <div className='ps-3 w-100'>
                        <p className='m-0'>
                          {/* Use Router */}
                          <a className='fw-bold' href={`./${product.id}`}>{product.title}</a>
                        </p>
                        {product.isDiscounted ?
                          <p>
                            <span className='regular-price'>{formatter.format(product.regularPrice)}</span>
                            <br />
                            <span className='sale-price'>{formatter.format(product.salePrice)}</span>
                          </p> :
                          <p className='sale-price'>{formatter.format(product.regularPrice)}</p>
                        }
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Row>
          </Col>

          {/* SIDE RIGHT */}
          <Col className="d-none d-md-block">
            <Row>
              <Endow />
              <FavouriteProducts />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detail;
