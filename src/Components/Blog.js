import { useState } from "react";

//Blogging App using Hooks
export default function Blog() {

    const [title, setTitle] = useState("");
    const [containt, setContaint] = useState("");
    const [blogs, setBlogs] = useState([]);


    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e) {
        e.preventDefault();

        setBlogs([{ title, containt }, ...blogs])
        console.log(blogs)
        setTitle("")
        setContaint("")
    }

    return (
        <>
            {/* Heading of the page */}
            <h1>Write a Blog!</h1>

            {/* Division created to provide styling of section to the form */}
            <div className="section">

                {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>

                    {/* Row component to create a row for first input field */}
                    <Row label="Title">
                        <input className="input"
                            placeholder="Enter the Title of the Blog here.." onChange={(e) => setTitle(e.target.value)} value={title} />
                    </Row >

                    {/* Row component to create a row for Text area field */}
                    <Row label="Content">
                        <textarea className="input content"
                            placeholder="Content of the Blog goes here.." onChange={(e) => setContaint(e.target.value)} value={containt} />
                    </Row >

                    {/* Button to submit the blog */}
                    <button className="btn">ADD</button>
                </form>


            </div>

            <hr />

            {/* Section where submitted blogs will be displayed */}
            <h2> Blogs  </h2>
            {blogs.map((blog, index) => {
                return (
                    <>
                        <div key={index} className="blog">
                            <h3>{blog.title}</h3>
                            <p> {blog.containt} </p>
                            <hr />
                        </div>
                    </>
                )
            }
            )}

        </>
    )
}

//Row component to introduce a new row section in the form
function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}


