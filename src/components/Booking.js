import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'https://happy-find.herokuapp.com/orders.json';


class Booking extends Component {
  render() {
    return(
      <div>
      <h1>Booking</h1>
      <SupplierDetails />
      
      </div>
    )
  }// end of reder
}//end of class Booking


class SupplierDetails extends Component {
  render() {
    return(
        <div>
          <h1>SupplierDetails</h1>
    <table>
      <tr>
                <th><h4>Name</h4></th>
                  <th><h4>Skill</h4></th>
                    <th><h4>Stars</h4></th>
      </tr>
                <tr>
                  <th><h4>Lucas Padua</h4></th>
                  <th>  <h4>WebDev</h4></th>
                    <th>  <h4>* * *</h4></th>
                </tr>
    </table>
  </div>
    )
  }//end of Render
}// end of SupplierDetails


// class BookingForm extends Component {
//   constructor() {
//     super();
//     this.state = {name: ''}, {email: ''}, {phone: ''}, {Address: ''}, {duration: ''}, {date: ''};
//   }
//   this._handleChangeName = this._handleChangeName.bind(this);
//   this._handleChangeEmail = this._handleChangeEmail.bind(this);
//   this._handleChangePhone = this._handleChangePhone.bind(this);
//   this._handleChangeAddress = this._handleChangeAddress.bind(this);
//   this._handleChangeDuration = this._handleChangeDuration.bind(this);
//   this._handleChangeDate = this._handleChangeDate.bind(this);
// ///SubmitForm
//   this._handleSubmitSaveUser = this._handleSubmitSaveUser.bind(this);
// /////////
// _handleChangeName(e) {
//     this.setState( {name: e.target.value} );
//   }
// _handleChangeEmail(e) {
//   this.setState( {email: e.target.value} );
// }
// _handleChangePhone(e) {
//   this.setState( {phone: e.target.value} );
// }
// _handleChangeAddress(e) {
//   this.setState( {address: e.target.value} );
// }
// _handleChangeDuration(e) {
//   this.setState( {duration: e.target.value} );
// }
// _handleChangeDate(e) {
//   this.setState( {date: e.target.value} );
// }
// /////SubmitFormUser
// _handleSubmitSaveUser(e){
//   e.preventDefault();
//   this.props.onSubmit( this.state );
// }
//
//   render() {
//     return(
//       <div>
//       <h4>Your Details</h4>
//       <form onSubmit={ this._handleSubmitSaveUser }>
//         <label>Full Name</label>
//           <input onChange={ this._handleChangeName } value={this.state.name} name="name" type="text" placeholder="Full Name" required autoFocus />
//           <label>Email</label>
//           <input onChange={ this._handleChangeEmail } value={this.state.email} name="email" type="text" placeholder="Email" required autoFocus />
//             <label>Phone</label>
//             <input onChange={ this._handleChangePhone } value={this.state.phone} name="phone" type="text" placeholder="Phone" required autoFocus />
//               <label>Address</label>
//               <input onChange={ this._handleChangeAddress } value={this.state.address} name="address" type="text"  placeholder="Full address" required autoFocus />
//                   <label>Duration</label>
//                   <input onChange={ this._handleChangeDuration } value={this.state.duration} name="duration" type="text" placeholder="Duration" required autoFocus />
//                     <label>Date</label>
//                     <input onChange={ this._handleChangeDate } value={this.state.date} name="date" type="text" placeholder="date" required autoFocus />
//                 <br/><br/>
//                   <input  name="submit" type="submit" value="Submit" />
//       </form>
//     </div>
//     )
//   }//end of render
// }//end of booking
//
// class Users extends Component  {
//   constructor() {
//     super();
//     this.state = {
//       orders: []
//     };
//     this.saveOrder = this.saveOrder.bind(this);
//     const fetchOrders = () => {
//       console.log(results);
//       this.setState({ orders: results.data });
//       setTimeout(fetchOrders, 4000);
//     })
//     fetchOrders();
//   }
//   saveOrder(s) {
//     axios.post(SERVER_URL, {name: s.name, email: s.email, phone: s.phone, address: s.address, duration: s.duration, date: s.date}).then((results) => {
//       this.setState( {orders: [results.data,...this.state.orders] });
//     })
//   }
//   render (){
//     return (
//       <div>
//         <Users onSubmit={ this.saveUser } onSubmit={ this.saveUser } />
//         <Display users={ this.state.planes } />
//       </div>
//     )
//   }
// }//end of createUser






export default Booking;