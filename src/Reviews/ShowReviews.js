// import React from 'react';

// const ShowReviews = ({review}) => {
//     const {_id, serviceId, name, email, address, image, message, reviewTitle} = review;
//     return (
//         <div>
//             <div className="card flex justify-between card-side bg-base-100 shadow-xl mt-5 p-3 ml-10">
//                    <div>
//                    <figure><img className='h-20 w-20 rounded-2xl' src={image} alt="user"/></figure>
//                    </div>
//                     <div className=" w-48 ml-2 text-justify">
//                         <h1 className='text-2xl font-semibold'>{name}</h1>
//                         <h2 className='font-semibold'>{email}</h2>
//                         <h3>{address}</h3>
//                     </div>
//                         <div className='text-justify'>
//                             <h3 className='text-lg font-semibold'>{reviewTitle}</h3>
//                            <>
//                            {
//                                     message.length > 60 ? 
//                                     <p>{message.slice(0, 60) + '... '}
//                                     </p>
//                                     :
//                                     <p>{message}</p>
//                             }
//                            </>
//                         </div>
//                     <div className='text-right ml-3'>
//                         <button  className='btn btn-danger'>delete</button>
//                     </div>
//                 </div>
//         </div>
//     );
// };

// export default ShowReviews;