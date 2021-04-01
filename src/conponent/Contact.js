import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    //khai báo contructor và state isRedirect luôn sai cho class Contact
    constructor(props) {
        super(props);
        this.state= {
            isRedirect : false,
            fname: "",
            femail :"",
            fphone :"",
            fmess:"",
            fngay:"ngay thu 7"
        }
    }
    //tạo hàm SubmitForm với lệnh params.preventDefault() để giữ cho nó không tự động chuyển trang
    SubmitForm = (event) =>{
        event.preventDefault();
        //sau khi nhấn vào nó sẽ set state về true .
        this.setState ({
            isRedirect:true
        })
    }
    isChange=(event) =>
    {
       const ten=event.target.name;
       const giatri=event.target.value;
    //    console.log(ten );
    //    console.log(giatri);

        this.setState(
            {
                [ten] : giatri
            }
           
        )

    }
    getChange=(noidung) =>
    {
        var noidung="";
        noidung += "ten la :" + this.state.fname;
        noidung += " / email la :" + this.state.femail;
        noidung += " / phone la :" + this.state.fphone;
        noidung += " / Mess la :" + this.state.fmess;
        noidung += " / Ngay la :" + this.state.fngay;
        return noidung;
    }
    render() {
        //nếu trạng thái bằng true thì nó sẽ dùng thư viện #Redirect to# về link mình muốn mà không cần load lại trang.
        if(this.state.isRedirect===true)
        {   
            console.log(this.getChange());
           return(<Redirect to="/home" />) 
        }
        return (
            <div>
                <div>
                    <div className="container thongtin">
                    {/* Contact Section Heading*/}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Icon Divider*/}
                    {/* <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <i class="fas fa-star"></i> Font Awesome fontawesome.com */}</div>
                    {/* <div class="divider-custom-line"></div>
                        </div> */} 
                    {/* Contact Section Form*/}
                    <div className="row">
                    <div className="col-lg-6 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                        <form id="contactForm" name="sentMessage" noValidate="novalidate">
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input name="fname" onChange={(event)=>this.isChange(event)} className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input name="femail" onChange={(event)=>this.isChange(event)} className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input name="fphone" onChange={(event)=>this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea name="fmess" onChange={(event)=>this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                
                            <label>Ngày</label>
                            {/* <textarea name="fngay" value={(event)=>this.isChange(event)} className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} /> */}
                            <select value={this.state.fngay} name="fngay" onChange={(event)=>this.isChange(event)} className="form-control" >
                                
                                    <option value="ngay thu 1">Ngày thứ nhất</option>
                                    <option value="ngay thu 3">Ngày thứ ba</option>
                                    <option value="ngay thu 5">Ngày thứ năm</option>
                                    <option value="ngay thu 7">Ngày thứ bảy</option>
                                 
                            </select>
                            <p className="help-block text-danger" />
                            </div>
                        </div>
                        <br />
                        <div id="success" />
                        <div className="form-group" onClick={(event)=>(this.SubmitForm(event))} ><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                    </div>
                </div>
                <hr/>
                <hr/>
                <hr/>
            </div>
        );
    }
}

export default Contact;