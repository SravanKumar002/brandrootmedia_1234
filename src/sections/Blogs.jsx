const Blogs = () => {
    return (
        <div className='mx-5 mb-36 p-6 bg-yellow-700 rounded-lg' id="blogs">

            <h1 className='text-4xl font-poppins text-white-400 mb-4'>Tech Talks: Exploring the Future</h1>
            <div className='text-lg text-white'>
                <p>
                    Welcome to BrandRoot Media, where technology meets creativity! At BrandRoot Media, we are passionate about crafting innovative solutions that elevate your digital presence to new heights. With our team of experienced professionals, we specialize in web design, app development, digital marketing, and more. Whether you are a startup looking to make your mark or an established business aiming to stay ahead of the curve, we are here to turn your vision into reality. Explore the latest trends, insights, and tech updates with our blog, and let BrandRoot Media be your trusted partner on your digital journey.
                </p>
            </div>
            <div className="text-left mt-4">
                <a href="#" className="text-white text-sm underline">Continue Reading...</a>
            </div>
            {/* <img src="data:image/jpeg;base64,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" alt="BrandRoot Media" className="w-54 h-auto image" /> */}
        </div>
    );
}

export default Blogs;