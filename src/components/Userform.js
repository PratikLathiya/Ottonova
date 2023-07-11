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
        if (!gender) {
            alert('Please select a gender');
            return;
        }
        // Handle form submission

        // Reset form
        formRef.current.reset();
        setGender(null);
    };

    return (
        <>
            <div className="my-4 container ocean">
                <div className="container card center shadow p-3 mb-5 bg-body rounded">
                    <form className="g-3 needs-validation" ref={formRef} onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="validationCustom01" className="form-label">First name</label>
                            <input type="text" className="form-control" value={name} id="name" onChange={handleNameChange} required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="validationCustomUsername" className="form-label">Email</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                <input type="text" className="form-control" placeholder='John@gmail.com' value={email} onChange={handleEmailChange} aria-describedby="inputGroupPrepend" pattern="[^ @]*@[^ @]*" required />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="validationCustom02" className="form-label">Mobile No.</label>
                            <input type="number" className="form-control" placeholder='+49 12345678901' value={phone} onChange={handlePhoneChange} required />
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
                                                <div className="wave-animation"></div>
                                                <img src={gender === 'male' ? 'activemale.png' : 'male.png'} alt="Male" />
                                            </button>

                                            <button
                                                className={`gender-button ${gender === 'female' ? 'active female' : ''}`}
                                                onClick={() => handleGenderSelection('female')}
                                            >
                                                <div className="wave-animation"></div>
                                                <img src={gender === 'female' ? 'activefemale.png' : 'female.png'} alt="Female" />
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
