import React, { useState, useEffect } from 'react'
import { Grid } from "@material-ui/core";

function Product(props) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3001/milk/${props.params.name}`).then((d) => d.json().then((fin) => {
            setProduct(fin);
        }));

    }, []);
    return (
        <Grid direction="column">
            <Grid item>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                {/* <img src={product.imagelink}></img> */}
                <h3>{product.price}</h3>
                <h3>{product.sellerAddress}</h3>
            </Grid>
        </Grid>
    )
}

export default Product
