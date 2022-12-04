import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { addDocuments, getDocuments } from "../../utils/firebase/firebase.utils";

import { ProductsContext } from "../../contexts/products.context";

import './add-new-item-form.styles.scss';

const defaultFormFields = {
    name: '',
    price: '',
    imageUrl: ''
}

const AddNewItemForm = () => {
    const [formFields, setFormfields] = useState(defaultFormFields);
    const { name, price, imageUrl } = formFields;
    const { setCurrentProducts } = useContext(ProductsContext);

    const resetFormFields = () => {
        setFormfields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        resetFormFields();

        try {
            const res = await addDocuments(formFields);
            if (res === 'done') {
                const res2 = await getDocuments();
                setCurrentProducts(res2);
            }
        } catch (error) {
            console.log(error.code);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormfields({ ...formFields, [name]: value });
    }

    return (
        <div className='add-new-item-form-container'>
            <h2>Add new item</h2>
            <span>Pleas fill all the fields</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='name'
                    value={name}
                />

                <FormInput
                    label='Price'
                    type='text'
                    required
                    onChange={handleChange}
                    name='price'
                    value={price}
                />

                <FormInput
                    label='Image URL'
                    type='text'
                    required
                    onChange={handleChange}
                    name='imageUrl'
                    value={imageUrl}
                />
                <div className="buttons-container">
                <Button type='submit'>Add</Button>
                </div>
            </form>
        </div>
    );
}

export default AddNewItemForm;