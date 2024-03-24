
import { Link, useLoaderData , useNavigation} from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";


const Blogs = () => {
    const blogs=useLoaderData()
	const navigation=useNavigation()
	if(navigation.state==='loading') return <Loader></Loader>
    // console.log(blogs)
    
    return (
        <div>
     <section className="dark:bg-gray-100 py-6 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link to={`/blog/${blogs[0].id}`}   className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title} </h3>
				<span className="text-xs dark:text-gray-600">{new Date(blogs[0].published_timestamp).toLocaleDateString()} </span>
				<p>{blogs[0].description} </p>
			</div>
		</Link>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.slice(1, 19).map(blog=><BlogCard key={blog.id} blog={blog} ></BlogCard>)
            }
			
		</div>
		
	</div>
</section>
        </div>
    );
};

export default Blogs;