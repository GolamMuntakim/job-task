import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

import { useLoaderData } from "react-router-dom";


const Search = () => {
    const initialSpots = useLoaderData()
    const [spots, setSpots] = useState(initialSpots);
    const [searchQuery, setSearchQuery] = useState("");
    const handleDelete = (id) => {
        fetch(`https://server-eosin-chi.vercel.app/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.error('Deleted');
                    setSpots(spots.filter(spot => spot._id !== id));
                }
                console.log(data);
            });
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const filteredSpots = spots.filter(spot => 
        spot.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
             <Helmet>
                <title>
                    Search
                </title>
            </Helmet>
            <div>
                <label className="input input-bordered flex items-center gap-2 w-full lg:w-[600px] justify-center mt-8 lg:ml-32">
                    <input type="text" className="grow" placeholder="Search here best therapist"  value={searchQuery}
                        onChange={handleSearchChange}/>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="overflow-x-auto mt-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredSpots.map((all, idx) => <tr key={idx}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={all?.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <br />
                                    <div className="font-bold">{all?.name}</div>
                                </td>
                                <td>{all?.location}</td>
                                <th>
                                    <button onClick={() => handleDelete(all?._id)} className="btn btn-ghost text-2xl text-red-900"><MdDelete />
                                    </button>
                                </th>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Search;