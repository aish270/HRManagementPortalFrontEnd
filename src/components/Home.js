import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
        <>
       
          
      <div className="home">
        
       
        <div className='col1'>
        <div className="hometotal"><h3>Total Employees</h3><div style={{margin:10}}>50</div></div>
        <div className="projectotal"><h3>Total Projects</h3><div style={{margin:10}}>15</div></div>
        </div>
        <div className='col2'>
        <div className="emponline"><h3>Finished Projects</h3><div style={{margin:10}}>10</div></div>
        <div className='projectct'><h3>Total Courses</h3><div style={{margin:10}}>20</div></div>
        </div>


      </div>
      <div className='profile' >
       <img className='imge' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXyoZXpAWph9Vnu9_ZpWgNmn20W4hlBOn-5dLmFQuww8zSfnhRRNQW7B0RRuApO_PFwg&usqp=CAU'}/>
       <div className='profiledet'>
       <div className="hometotal1"><h3>Name</h3><div style={{margin:10}}>Biot</div><h3>Id</h3><div style={{margin:10}}>201</div></div>
       </div>

      </div>
      
      
      </>
     
    )
  }
}

export default Home