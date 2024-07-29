import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (<>
  
        <div className="container mt-5">
          <div className="row">
            <div className="col">

                <div className='text-center mb-4'><h1>Welcome to <span className='text-secondary focus-ring-light'>ProductCRUD</span> operations.</h1></div>

                <div className='text-center mt-4 mb-4'><h4> Here you can perform below operations</h4></div>

                <div className='text-center'>
                
                    <Link to="/create"><button className='btn btn-success mt-3 CRUDbtn'>CreateProducts</button></Link>
                 
                  
                </div>

                
                
                <div className='text-center'>
                
                    <Link to="/products"><button className='btn btn-info mt-3 CRUDbtn'>View Products</button></Link>
                 
                  
                </div>
                
                <div className='text-center'>
                
                    <Link to="/admin"><button className='btn btn-primary mt-3 CRUDbtn'>Products Table</button></Link>
                 
                  
                </div>
                 
                <div className='text-center'>
                
                    <Link to="/admin"><button className='btn btn-danger mt-3 CRUDbtn'>Delete Table</button></Link>
                 
                  
                </div>
                
                <div className='text-center'>
                
                    <Link to="/update-product/"><button className='btn btn-warning mt-3 CRUDbtn'>Update Product</button></Link>
                 
                </div>


            </div>
          </div>
        </div>
  
  </>
    
  )
}

export default Home
