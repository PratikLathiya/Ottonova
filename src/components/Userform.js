import React, { useState, useRef } from 'react'

export default function Userform() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState(null);

    const formRef = useRef(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleGenderSelection = (selectedGender) => {
        setGender(selectedGender);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate name
        if (name.trim() === '') {
            alert('Please enter a valid name');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Validate phone
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number and start with 0');
            return;
        }
        // Validate the gender selection
        if (!gender) {
            alert('Please select a gender');
            return;
        }
        // Handle form submission

        // Reset form
        formRef.current.reset();
        // Reset form fields
        setName('');
        setEmail('');
        setPhone('');
        setGender(null);
    };

    return (
        <>
            <div className="my-4 container ocean">
                <div className="container card center shadow p-3 mb-5 bg-body rounded">
                    <form className="g-3 needs-validation" ref={formRef} onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" value={name} placeholder='John' id="name" onChange={handleNameChange} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" placeholder='John@gmail.com' value={email} onChange={handleEmailChange} aria-describedby="inputGroupPrepend" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="phone" className="form-label">Mobile No.</label>
                            <input type="number" className="form-control" placeholder='012345678901' value={phone} onChange={handlePhoneChange} required />
                        </div>
                        <div className="gender-switch">
                            <span>Gender:</span>
                            <div className="toggle-button-cover">
                                <div className="button-cover">
                                    <div className="button b2" id="button-10">
                                        <div className="knobs">
                                            <button
                                                className={`gender-button ${gender === 'male' ? 'active male' : ''}`}
                                                onClick={() => handleGenderSelection('male')}
                                            >
                                                {gender === 'male' ? (
                                                    <img src="activemale.png" alt="Male" />
                                                ) : (
                                                    <img src="male.png" alt="Male" />
                                                )}
                                                <div className="wave-animation"></div>
                                            </button>

                                            <button
                                                className={`gender-button ${gender === 'female' ? 'active female' : ''}`}
                                                onClick={() => handleGenderSelection('female')}
                                            >
                                                {gender === 'female' ? (
                                                    <img src="activefemale.png" alt="Female" />
                                                ) : (
                                                    <img src="female.png" alt="Female" />
                                                )}
                                                <div className="wave-animation"></div>
                                            </button>
                                        </div>
                                        <div className="layer"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-3">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form >
                </div >
            </div>
        </>
    )
}
