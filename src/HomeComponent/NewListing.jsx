import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";


const NewListing = () => {
    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const location = form.location.value;
       
        const newPlaces = {name, image ,location,}
        console.log(newPlaces)
        //send to the server 
        fetch('https://server-eosin-chi.vercel.app/new',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newPlaces)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
               toast.success('Added succesfully')
            }
        })

    }
    return (
        <div>
             <Helmet>
                <title>
                    New Listing
                </title>
            </Helmet>
            <div className='text-center text-3xl font-bold'>
            <p>Add New Therapist list</p>
            </div>
           <div className="hero bg-base-200 min-h-screen">
            
  <div className="hero-content flex-col lg:flex-row-reverse w-[600px]">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleAdd}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full name</span>
          </label>
          <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name='image' placeholder="image url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name='location' placeholder="location" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#146aca] text-white">Add</button>
        </div>
        <Toaster></Toaster>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default NewListing;