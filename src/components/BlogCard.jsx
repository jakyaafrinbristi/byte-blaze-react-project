import { Link } from "react-router-dom";
import placeHolder from "../assets/404.jpg";
import { MdDelete } from "react-icons/md"

const BlogCard = ({blog,deletable,handleDelete }) => {
    const {id,published_timestamp,title,description,cover_image}=blog;

    return (
       
           <div className="flex relative">
   <Link to={`/blog/${id}`} className="max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30  hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolder} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{new Date (published_timestamp).toLocaleDateString()} </span>
					<p>{description}</p>
				</div>
			</Link>
			{deletable && <div onClick={()=>handleDelete(id)} className="absolute bg-primary p-3 rounded-full hover:bg-secondary cursor-pointer hover:scale-105 -top-5 -right-5"><MdDelete size={20} className="text-secondary hover:text-primary"></MdDelete></div>}
  </div>
       
    );
};

export default BlogCard;