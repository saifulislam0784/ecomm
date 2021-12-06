import React from 'react';

const Sidebar = () => {
    return (

        <div className="col-md-4 my-2">
             <div className="widget">
                <form className="form-inline" action="">
                    <div className="form-group">
                        <input className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </form>
            </div>           
        </div>
    )
}

export default Sidebar;
