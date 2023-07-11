import React, { useState } from 'react'

export default function Userform() {
    // const [imageSrc, setImageSrc] = useState('./man1.png');
    // const [imageSrc1, setImageSrc1] = useState('./female.png');
    // const [isGenderActive, setGenderActive] = useState(false);
    // const [isGenderActive1, setGenderActive1] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState(null);

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
        // Handle form submission
    };

    // let mystyle = {
    //     margin: "5px",
    //     border: "0.5px solid #c7c2c2",
    //     backgroundColor: imageSrc === './man1.png' ? "white" : "rgb(218 225 231)"
    // }
    // let mystyle1 = {
    //     border: "0.5px solid #c7c2c2",
    //     backgroundColor: imageSrc1 === './female.png' ? "white" : "#e9dde1"
    // }

    // const changeImageSrc = () => {
    //     if (imageSrc === './man1.png') {
    //         setImageSrc('./activemale.png');
    //         setImageSrc1('./female.png');
    //         setGenderActive(!isGenderActive);
    //     } else {
    //         setImageSrc('./man1.png');
    //         // setImageSrc1('./activefemale.png')
    //     }
    // }

    // const changeImageSrc1 = () => {
    //     if (imageSrc1 === './female.png') {
    //         setImageSrc1('./activefemale.png');
    //         setImageSrc('./man1.png');
    //         setGenderActive1(!isGenderActive);
    //     } else {
    //         setImageSrc1('./female.png');
    //         // setImageSrc('./activemale.png')
    //     }
    // }
    return (
        <>
            {/* <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
            </div> */}
            <div className="my-4 container ocean">
                <div className="container card center shadow p-3 mb-5 bg-body rounded cardstyle">
                    <form className="g-3 needs-validation" onSubmit={handleSubmit}>
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
                        {/* <div className="my-3">
                            <label htmlFor="validationCustomGender" className="form-label">Gender</label>
                            <div className="row">
                                <div className="toggle-button-cover">
                                    <div className="button-cover">
                                        <div className="button b2" id="button-10">
                                            <div className="knobs">
                                                <button className={`gender-button ${isGenderActive ? 'active' : ''}`} style={mystyle} data-mdb-ripple-color="primary" onClick={changeImageSrc}>
                                                    <img src={imageSrc} alt="" style={{ height: "45px" }} />
                                                </button>
                                                <button className={`gender-button ${isGenderActive1 ? 'active' : ''}`} style={mystyle1} data-mdb-ripple-color="danger" onClick={changeImageSrc1}>
                                                    <img data-mdb-ripple-color="danger" src={imageSrc1} alt="" style={{ height: "45px" }} />
                                                </button>
                                            </div>
                                            <div className="layer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="gender-switch">
                            <span>Gender:</span>
                            <button
                                className={`gender-button ${gender === 'male' ? 'active' : ''}`}
                                onClick={() => handleGenderSelection('male')}
                            >
                                <div className="wave-animation"></div>
                                <img src={gender === 'male' ? 'activemale.png' : 'male.png'} alt="Male" />
                            </button>

                            <button
                                className={`gender-button ${gender === 'female' ? 'active' : ''}`}
                                onClick={() => handleGenderSelection('female')}
                            >
                                <div className="wave-animation"></div>
                                <img src={gender === 'female' ? 'activefemale.png' : 'female.png'} alt="Female" />
                            </button>
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
