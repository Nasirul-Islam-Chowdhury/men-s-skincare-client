import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const AddEstheticians = () => {
    const imgHostKey = import.meta.env.VITE_imgbb_key;
    const handleAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const photo = form.photo.files[0];

        const formData = new FormData();
        formData.append('image',photo)
 
        const url =  `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if(imgData.success){
                const estheticians = {name, email, subject, photo: imgData.data.url};
        fetch('https://men-s-skincare-server.vercel.app/addestheticians',{
            method: "POST",
            headers:{
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(estheticians)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        if(data.acknowledged){
            form.reset()
            return toast.success(`estheticians ${name} added successfully`)
        }
        })
            }
        })
           


      



      };
    return (
        <div className="flex flex-col items-center min-h-100vh my-10 pt-6 sm:justify-center sm:pt-0 ">
        <div className="w-full p-16 mt-2 overflow-hidden bg-white shadow-2xl max-w-lg rounded-2xl">
          <form onSubmit={handleAdd}>
            <div>
              <div>
                <Link>
                  <h3 className="text-3xl font-bold text-center">Add Estheticians</h3>
                </Link>
              </div>
              <div className="mt-4">
                <h1 className="font-semibold p-1">Name</h1>
                <input
                  name="name"
                  className="w-full p-2 border rounded-lg"
                  placeholder="name"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <h1 className="font-semibold p-1">Email</h1>
                <input
                  required
                  name="email"
                  placeholder="email"
                  className="w-full p-2 border rounded-lg"
                  type="email"
                />
              </div>
              <div className="mt-4">
                <h1 className="font-semibold p-1">Subject</h1>
                <input
                  required
                  name="subject"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="your subject"
                />
              </div>
              <div className="mt-4">
                <h1 className="font-semibold p-1">Photo</h1>
                <input
                  required
                  name="photo"
                  type="file"
                  className="w-full p-2 border rounded-lg"
                  placeholder="your subject"
                />
              </div>
             
            </div>
           
            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#252422] rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
          </div>
          </div>
     
    );
};

export default AddEstheticians;