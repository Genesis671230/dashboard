import React from 'react'
import "./Product.css"
import Chart from "../../components/chart/Chart"
import {Link} from "react-router-dom"
import { ProductData} from '../../DummyData'
import { Publish } from '@mui/icons-material'
export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={ProductData} dataKey="Sales" title="Sales Performance"  />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">

                    <img src="https://source.unsplash.com/random/900×700/?juice" alt="" className="productInfoImg" />
                    <span className="productName">Apple AirPods</span>
                    </div>
                    <div className="productInfoBottom">
                    <div className="productInfoItem">

                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">221</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">5481</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active</span>
                    <span className="productInfoValue">yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">In stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
                </div>
                </div>        
            
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <label >Product Name</label>
                    <input type="text" placeholder='Product name' />
                    <label >In Stock</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label >Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>



                </div>
                <div className="productInfoRight">
                    <div className="productUpload">
                        <img src="https://source.unsplash.com/random/900×700/?fruit" alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id='file' style={{display: "none"}} />

                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
