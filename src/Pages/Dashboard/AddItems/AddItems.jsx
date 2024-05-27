import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from './../../../hooks/useAxiosPublic';
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        });
        if (res.data.success) {
            //now send the menu to server
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the  menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data)

    }


    return (
        <div>
            <SectionTitle

                heading='add and item'
                subHeading="What's new?"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name</span>

                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            {...register("name", { required: true })}
                            required
                            className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-6 items-center justify-center w-full ">
                        <div className="form-control w-full my-6">
                            {/* //category  */}
                            <div className="label">
                                <span className="label-text">Category</span>

                            </div>
                            <select defaultValue='default' {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="sop">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price</span>

                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" required />

                        </div>


                    </div>
                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>

                        </div>
                        <textarea
                            {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24 "
                            placeholder="Recipe Details"></textarea>

                    </label>

                    <div className="form-control w-full my-6">

                        <input
                            {...register("image", { required: true })}
                            type="file" className="file-input w-full max-w-xs" />

                    </div>

                    <button className="btn  bg-black text-white hover:bg-orange-500  uppercase"> Add Item <FaUtensils className="ml-4"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;   