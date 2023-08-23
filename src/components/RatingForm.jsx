import React, { useState } from 'react';

const RatingForm = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSaveInfoChange = () => {
        setSaveInfo(!saveInfo);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data

        // Reset form fields
        setRating(0);
        setComment('');
        setName('');
        setEmail('');
        setSaveInfo(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <strong>Đánh giá của bạn:</strong>
                <div className='display-6 mb-2'>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            onClick={() => handleRatingChange(value)}
                            className={`rating-star ${rating >= value ? 'fas' : 'far'
                                } fa-star`}
                            style={{
                                cursor: 'pointer',
                                color: rating >= value ? 'gold' : 'gray',
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="form-group mb-2">
                <strong>Nhận xét của bạn:</strong>
                <textarea className="form-control" value={comment} onChange={handleCommentChange} />
            </div>

            <div className="form-group mb-2">
                <strong>Họ tên:</strong>
                <input type="text" className="form-control" value={name} onChange={handleNameChange} />
            </div>

            <div className="form-group mb-2">
                <strong>Email:</strong>
                <input type="email" className="form-control" value={email} onChange={handleEmailChange} />
            </div>

            <div className="form-group mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={saveInfo}
                    onChange={handleSaveInfoChange}
                    id="saveInfoCheckbox"
                />
                <strong className="form-check-label" htmlFor="saveInfoCheckbox">
                    <small>Save my information for next time</small>
                </strong>
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    );
};

export default RatingForm;