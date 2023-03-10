 import useTitle from '../../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')

    const handlePressOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const model = form.model.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;
         console.log(name, model, description, price, rating, image)

        const addService = {
            name,
            model,
            description,
            price,
            rating,
            image
         }

        fetch('https://online-seller-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                form.reset()
                alert('post successfully')
            }
        })


    }

    return (
        <div className='mt-14 mx-5'>
            <div className='font-bold text-xl lg:text-4xl flex justify-center mb-10'><span className='text-lime-500'>PLACE ADD</span><span className='text-red-500 ml-2'>PRODUCTS</span></div>
            <form onSubmit={handlePressOrder}>
                 <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered input-secondary w-full" />
                    <input name="model" type="text" placeholder="Model" className="input input-bordered input-secondary w-full" />
                    <input name="price" type="text" placeholder="Price" className="input input-bordered input-secondary w-full" />
                    <input name="rating" type="text" placeholder="Rating" className="input input-bordered input-secondary w-full" />
                    <input name="image" type="text" placeholder="ImageURL" className="input input-bordered input-secondary w-full" />
                </div>
                <textarea name="description" className="textarea textarea-secondary my-4 w-full" placeholder="description"></textarea>
                <input type="submit" value="Post" className='btn bg-blue-600 px-24' />
            </form>
        </div>
    );
};

export default AddService;