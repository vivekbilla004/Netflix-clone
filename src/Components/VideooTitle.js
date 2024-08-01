const Videootitle =({title,overview})=>{
    return (
        <div className=" pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black aspect-video">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-lg w-1/4 py-6">{overview}</p>
            <div className="">
                <button className="bg-white text-black p-4 px-12 bg-opacity-50 text-lg rounded-lg hover:bg-opacity-80">play</button>
                <button className= "mx-2 bg-gray-500 text-white p-4 px-12 bg-opacity-50 text-lg rounded-lg">info</button>
            </div>
        </div>
    )
}

export default Videootitle;