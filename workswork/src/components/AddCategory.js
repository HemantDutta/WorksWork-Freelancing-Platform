import {AdminNavbar} from "./AdminNavbar";
import {BreadCrumb} from "./BreadCrumb";
import {Footer} from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AddCategory = () => {
    const [cat, setCat] = useState([]);
    const [edName, setEdName] = useState('');
    const [edDes, setEdDes] = useState('');
    const [newName, setNewName] = useState('');
    const [newDes, setNewDes] = useState('');

    function editCat(oldName) {
        axios.post('http://localhost:3000/admin/edit-cat', {
           newName,
           newDes,
            oldName
        }).then(res=>{
           console.log(res.data);
           if(res.data==='Updated'){
               Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Category Updated!',
                   showConfirmButton: false,
                   timer: 1500
               })
               fetchCat();
           }
        });
    }

    function fetchDetails(catName) {
        axios.get(`http://localhost:3000/admin/get-cat-details?catname=${catName}`)
            .then((res) => {
               console.log(res.data);
                let data = res.data;
               setEdName(data[0].work_category);
               setEdDes(data[0].description);
            });
    }

    function deleteCat(catName) {
        Swal.fire({
            title: 'Do you want to delete this category?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                console.log('Confirmed')
                axios.get(`http://localhost:3000/admin/delete-category?catName=${catName}`)
                    .then((res)=>{
                        console.log(res.data);
                        if(res.data === 'Deleted'){
                            Swal.fire('Deleted', '', 'success')
                            fetchCat();
                        }
                    });

            } else if (result.isDenied) {
                console.log('Denied')
                Swal.fire('Delete Cancelled', '', 'info')
                fetchCat();
            }
        })
        axios.get(`http://localhost:3000/admin/delete-category?catName=${catName}`)
            .then((res)=>{
               console.log(res.data);
            });
    }

    function fetchCat() {
        axios.get('http://localhost:3000/admin/get-category')
            .then((res) => {
            console.log(res.data);
            setCat(res.data);
        });
    }

    useEffect(() => {
        fetchCat();
    }, []);

    const [catName, setCatName] = useState();
    const [catDes, setCatDes] = useState();

    function AddCat() {
        axios.post('http://localhost:3000/admin/add-category', {
            catName,
            catDes
        }).then(res => {
            console.log(res.data);
            if(res.data==='Added'){
                Swal.fire('Category Added', '','success')
            }
            document.getElementById('addCat').reset();
            fetchCat();
        });
    }


    return (
        <>
            <AdminNavbar/>
            <BreadCrumb pageName={'Add Category'}/>
            <section className="w3l-contact-7 py-5">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="row map-content-9 mt-5 pt-lg-3">
                            <div className="col-lg-12">
                                <h1 className={'text-center'}>Add Category</h1><br/>
                                <form className="text-center" id="addCat">
                                    <div className="form-grid mb-3">
                                        <input onChange={(e) => setCatName(e.target.value)} type="text" name="w3lName" id="w3lName"
                                               placeholder="Category Name" required/>
                                    </div>
                                    <textarea onChange={(e) => setCatDes(e.target.value)} name="w3lMessage" id="w3lMessage" placeholder="Description"
                                              defaultValue={""}/>
                                    <button onClick={AddCat} type="button" className="btn btn-primary btn-style mt-3">Add Category <span
                                        className="fa fa-paper-plane ml-3" aria-hidden="true"/></button>
                                </form>
                            </div>
                        </div>
                        <br/><br/><br/>
                        <hr className={'hr-wsw'}/>
                        <br/><br/><br/>
                        <h1 className={'text-center'}>Categories</h1><br/><br/>
                        <div>
                            <table className="table table-dark table-bordered col-lg-12 table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">Description</th>
                                    <th colSpan={2} scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    cat.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {index + 1}
                                                </td>
                                                <td>
                                                    {value.work_category}
                                                </td>
                                                <td>
                                                    {value.description}
                                                </td>
                                                <td>
                                                    <button onClick={()=>fetchDetails(value.work_category)} className={'btn btn-outline-warning' +
                                                        ' btn-sm'} data-toggle="modal" data-target="#editModal"><i className={'fa fa-edit'}></i></button>
                                                </td>
                                                <td>
                                                    <button onClick={()=>deleteCat(value.work_category)} className={'btn btn-outline-danger btn-sm'}><i className={'fa' +
                                                        ' fa-trash'}></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/*Edit Modal*/}
            <div>
                {/* Central Modal Small */}
                <div className="modal fade" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    {/* Change class .modal-sm to change the size of the modal */}
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title w-100" id="myModalLabel">Edit Category</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Default form contact */}
                                <form className="text-center border border-light p-5">
                                    <p className="h4 mb-4">Category Details</p>
                                    <input onChange={(e) => setNewName(e.target.value)} type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" defaultValue={edName} />

                                    <div className="form-group">
                                        <textarea onChange={(e) => setNewDes(e.target.value)} className="form-control rounded-0" id="exampleFormControlTextarea2" rows={3} placeholder="Message" defaultValue={edDes} />
                                    </div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info btn-sm" data-dismiss="modal">Close</button>
                                <button onClick={()=>editCat(edName)} type="button" data-dismiss="modal" className="btn btn-success btn-sm">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Central Modal Small */}
            </div>
            {/*Edit Modal End*/}
            <Footer/>
        </>
    )
}