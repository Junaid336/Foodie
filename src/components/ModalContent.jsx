import Link from "next/link"

const ModalContent = ({title, body, btnTxt, linkTo}) => {
    return(
        <div style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: '100vh',
            width: '100vw',
            backgroundColor:'rgba(0, 0, 0, 0.8)',
            zIndex: 1050,
        }}>
            <div style={{ display: 'block !important' }} className="modal" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        </div>
                        <div class="modal-body">
                            {body}
                        </div>
                        <div class="modal-footer">
                            <Link href={linkTo}>
                                <button
                                style={{
                                    backgroundColor:'#f30', 
                                    borderColor:'#f30'
                                }} 
                                    type="button" 
                                    class="btn btn-primary"
                                >
                                    {btnTxt}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalContent