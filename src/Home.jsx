
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditUser from './EditUser';
import Form from './Form';


const TotalpagesCalculator = (total, limit) => {

  const pages = []
  for (let x = 1; x <= Math.ceil((total) / limit); x++) {
    pages.push(x);
  }
  return pages;

}
//console.log(Math.ceil(total)/limitValue)


const Home = () => {
  const [data, updatedata] = useState([]);
  const [search, setSearch] = useState("");
  const [activePage, setactivePage] = useState(1)
  const [count, setCount] = useState(0)
  const [sortBy, setSortBy] = useState("name")
  const [sortType, setSortType] = useState("ASC")
  const [limit, setlimit] = useState(5)
  const [courses ,getcourse]=useState([]);



  const handleCHeckBox=(e)=>{
    getcourse(...courses, e.target.value)
    console.log(courses)
  }


  useEffect(() => {
    const reqbody = {
      "query": search,
      "page": activePage,
      "limit": limit,
      "sortBy": sortBy,
      "sortType": sortType
    }


    async function show() {
      let res = await axios.post("http://localhost:5779/searchdata", reqbody)
      updatedata(res.data.data.data)
      //console.log(res.data.data)
      setCount(res.data.data.count[0].totalcount)
      console.log(res.data.data.count[0].totalcount)
    }
    show()
  }, [activePage, sortBy, sortType, limit, search])

  const handleSortby = (e) => {
    setSortBy(e.target.value)
    console.log(e.target.value)
  }
  const handleSorttype = (e) => {
    setSortType(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='crud shadow-lg p-3 mb-5 bg-body  rounded'>
          <div className='row'>
            <div className='col-sm-4 mt-5 mb-4 text-ged'>
              <div className='search d-flex gap-2'>
                <form className='form-inline'>
                  <input className="form-control" type="search" placeholder='search student' value={search} onChange={
                    (e) => setSearch(e.target.value)}
                  />
                </form>
              </div>
              <div className="sortby "><select className="form-select  form-select-sm" value={sortBy} onChange={handleSortby} >
                <option selected >Sort by</option>
                <option value={"name"}>Name</option>
                <option value={"email"}>Email</option>
                <option value={"phone"}>Phone</option>
                <option value={"gender"}>Gender</option>
                <option value={"company"}>Company</option>
                <option value={"workingExp"}>working</option>

              </select>
                <div><select className="form-select  form-select-sm" value={sortType} onChange={handleSorttype}>
                  <option  >SortType</option>
                  <option value={"ASC"}>ASC</option>
                  <option value={"DSC"}>DSC</option>
                </select>
                </div>

              </div>

              <div><button className="btn btn-primary">Reset</button></div>

            </div>

            <div className='col-sm-3 offset-sm-2 mt-5 mb-4 text-gred' style={{ color: "green" }}><h2><b>Students </b></h2></div>
            <div className='col-sm-2 offset-sm-1 mt-5 mb-4 text-gred' ><Link to="/AddUser" ><button type="button" className="btn btn-primary"
              data-formTarget='#mymodel' data-toggle="modal">Add New Student
            </button></Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <table className='table table-striped table-hover text-center table-bodered'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>{data && data.map((v, i) => {  
                  return (
                    <tr key={v.id}>
                      <td>{i + 1}</td>
                      <td>{v.name}</td>
                      <td>{v.email}</td>
                      <td className='d-flex'>
                        <Link className="btn btn-primary view" to={`/ViewUser/${v._id}`} ><i class="fa fa-eye " aria-hidden="true"></i></Link>
                        <Link className="btn btn-primary edit" to={`/EditUser/${v._id}`}><i class="fa fa-pencil " aria-hidden="true"></i></Link>
                        <button className="b8tn btn-danger delete" onClick={(e) => {
                          e.preventDefault()
                          async function del() {
                            let res = await axios.delete(`http://localhost:5779/student/${v._id}`);
                            if (res.status === 200) {
                              alert("data delted sucessfully")
                            }
                          }
                          del();
                        }
                        }><i class="fa fa-trash " aria-hidden="true"></i></button>
                      </td>
                    </tr>
                  )
                })}</tbody>
              </table>
            </div>
            <div className='col-6'>
              <div class="heading text-center"><h3>Courses filter</h3></div>
              <div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="HTML" onClick={handleCHeckBox} />
                  <label class="form-check-label" for="flexCheckDefault">
                    HTML
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="CSS" onClick={handleCHeckBox}  />
                  <label class="form-check-label" for="flexCheckDefault">
                    CSS
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="JAVASCRIPT" onClick={handleCHeckBox} />
                  <label class="form-check-label" for="flexCheckDefault">
                    Javascript
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="REACT JS" onClick={handleCHeckBox}/>
                  <label class="form-check-label" for="flexCheckDefault">
                    JAVA
                  </label>
                </div>
              </div>
              <div className='text-center'><h4>Fees filter</h4></div>
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01">Minimum</label>
                <input className="form-control" type="number" name='' value="" />
              </div>
              <div class="input-group mt-5">
              <input className="form-control" type="number" name='' value=""  />

              </div>
              <div className='mt-5'>
              <div className='text-center'><h4>Fees filter</h4></div>

              <label for="DATE">Form:</label>
              <input type="date"  name=""  value=""/>     
              <label for="DATE">To</label>
              <input type="date" name="" value="" />date

              </div>
              <button className="btn btn-primary text-center">Apply</button>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`page-item ${activePage === 1 ? "disabled" : ""}`} onClick={() => { setactivePage(activePage - 1) }}><a className="page-link" href="#">Previous</a></li>
                {TotalpagesCalculator(count, limit).map(pageNo =>
                  <li className={`page-item ${pageNo === activePage ? 'active' : ""}`} key={pageNo} onClick={() => setactivePage(pageNo)}><a className="page-link" href="#">{pageNo}</a></li>)}
                <li className={`page-item ${activePage === Math.ceil((count) / limit) ? "disabled" : ""}`} onClick={() => { setactivePage(activePage + 1) }}><a className="page-link" href="#" >Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;h