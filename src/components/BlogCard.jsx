import { Link } from "react-router-dom";
import placeHolder from "../assets/404.jpg"

const BlogCard = ({blog}) => {
    const {id,published_timestamp,title,description,cover_image}=blog;
    return (
        <div>
            <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeHolder} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{published_timestamp}</span>
					<p>{description}</p>
				</div>
			</Link>
        </div>
    );
};

export default BlogCard;