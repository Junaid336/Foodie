import PageWrapper from '../layouts/PageWrapper'


const Form = ({fieldsGroups,btnTxt, handleSubmit}) => {

    const Fields = fieldsGroups.map((fieldsGroup, index)=>{
        return(
            <div className="row" key={index}>
                {
                    fieldsGroup.map((field,index)=>{
                        return(
                            <div className="form-group col-sm-6" key={index}>
                                <label >{field.label}</label>
                                <input
                                    className="form-control"
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    })

    return(
        <PageWrapper>
            <div className="container" >
                <section
                    className="contact-page inner-page "
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="widget">
                                    <div className="widget-body">
                                        <form onSubmit={(e) => handleSubmit(e)}>
                                            { Fields }
                                            <div className="row">
                                                <div
                                                 className="col-sm-12 container"
                                                 style={{textAlign: 'center'}}
                                                 >
                                                    <p>
                                                        {" "}
                                                        <button
                                                            href="#"
                                                            type='submit'
                                                            className="btn theme-btn"
                                                        >
                                                            {btnTxt}
                                                        </button>{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
}

export default Form;