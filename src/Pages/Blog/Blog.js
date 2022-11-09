import React from 'react';

const Blog = () => {
    return (
        <div className=' w-3/5 m-auto py-10'>
            <h2 className='text-3xl mb-2'>1. Difference between SQL and MYSQL ?</h2>
            <p className='text-lg mb-6'>SQL is primarily used to query and operate database systems. MySQL allows you to handle, store, modify and delete data and store data in an organized way. SQL does not support any connector. MySQL comes with an in-built tool known as MySQL Workbench that facilitates creating, designing, and building databases.</p>

            <h2 className='text-3xl mb-2'>2. What is jwt and how does work it ?</h2>
            <p className='text-lg mb-6'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>

            <h2 className='text-3xl mb-2'>1. What is the difference between javascript and nodeJs</h2>
            <p className='text-lg mb-6'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>

            <h2 className='text-3xl mb-2'>1. How does node js handle multiple request at the same time</h2>
            <p className='text-lg mb-6'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blog;