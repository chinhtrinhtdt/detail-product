
const CircleButton = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="d-flex align-items-center">
            <img width={45} height={45} src={imageSrc} alt="shop hoa tươi hà nội" decoding="async" />
            <div className='p-3 w-100' style={{ fontSize: '80%' }}>
                <small><b>{title}</b></small>
                <br />
                <small>{subtitle}</small>
            </div>
        </div>
    );
};

const Endow = () => {
    return (
        <div className="mb-5">
            <CircleButton
                imageSrc="https://shophoahanoi.com/wp-content/uploads/2022/10/fast-delivery.png"
                title="Khai trương phát tài"
                subtitle="60 minutes quick delivery"
            />
            <CircleButton
                imageSrc="https://shophoahanoi.com/wp-content/uploads/2022/10/medal-1.png"
                title="Khới tài may mắn"
                subtitle="Free greeting cards"
            />
            <CircleButton
                imageSrc="https://shophoahanoi.com/wp-content/uploads/2022/10/recommended-1.png"
                title="CAM KẾT HÀI LÒNG 100%"
                subtitle="100% guarantee smile"
            />
            <CircleButton
                imageSrc="https://shophoahanoi.com/wp-content/uploads/2022/10/free-delivery-1.png"
                title="MIỄN PHÍ GIAO HÀNG 63 TỈNH"
                subtitle="Free shipping (nội thành)"
            />
        </div>
    );
};

export default Endow;