


import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'

const Admin = () => {
      let [tableDatas, settableData] = useState([])


        useEffect(()=>{
          getProducts();
        },[])


      let getProducts = ()=>{
        Axios.get('http://127.0.0.1:5000/api/products/')
        .then((response)=>{
          settableData(response.data)
        }).catch((error)=>{console.log(error)})
      } 

        let deleteProduct = (p_Id)=>{
            let url = `http://127.0.0.1:5000/api/products/${p_Id}`
          Axios.delete(url)
          .then((response)=>{getProducts()})
          .catch((error)=>{console.log(error)})

          getProducts();
        }


  return (
    <div> 
      <h1 className='App mt-4 mb-4'>All the product details</h1>
        <div className="contain App">
          <div className="row">
            <div className="col-md-12">
        <Link to="/create"><button className='btn btn-success'>CreateProduct</button></Link>
        </div>
        </div>
        </div>
        <div className="container">
            {/* <pre>{JSON.stringify(tableDatas)}</pre> */}
            <div className="row ">

                <div className="col-md-12 mt-5" >

                  {
                    tableDatas.length > 0 ? <>
                    <table className='table '>

                        <thead >
                          <th>Sl no</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Details</th>
                          <th>Image</th>
                        </thead>
                        <tbody>

                        {
                          tableDatas.map((tabledata,index)=>{
                                  return <tr key={index}>
                                      <td>{index+1}</td>
                                      <td>{tabledata.name}</td>
                                      <td>{tabledata.price}</td>
                                      <td>{tabledata.qty}</td>
                                      <td>{tabledata.info}</td>
                                      <td><img src={tabledata.image} style={{height:'35px'}} alt="" /></td>
                                      <td>
                                      <Link to={`/update-product/${tabledata._id}`} className='btn bg-warning mx-2'>Update</Link>
                                      <button onClick={deleteProduct.bind(null,tabledata._id )} className='btn bg-danger'>Delete</button>
                                      {/* <Link to='/products' className='btn bg-warning mx-2'>View</Link> */}
                                      </td>
                                  </tr>
                                      
                          })
                        }
                        
                        </tbody>

                    </table>
                    
                    </> : <><div><h3 className='App'>No Data</h3></div></>
                  }

                </div>


            </div>

        </div>


    </div>
  )
}

export default Admin
