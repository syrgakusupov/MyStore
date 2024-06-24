import React, {useContext, useEffect} from 'react';
import {ModalContext} from "../../../utils/Context";
import CatalogRow from "./CatalogRow";
import '../../../Styles/Catalog.scss'

const Catalog = () => {
    const {getProduct,} = useContext(ModalContext)

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className='catalogs'>
            <CatalogRow/>
        </div>
    );
};

export default Catalog;