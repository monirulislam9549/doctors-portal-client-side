import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(name, slot);

        // to close the modal 
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking Treatment: {name}!</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='number' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label for="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;