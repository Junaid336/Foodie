import PageWrapper from '../../src/layouts/PageWrapper';
import OptionCard from "../../src/components/OptionCard"

const Index =()=>{
    return(
        <PageWrapper>
            <div style={{padding: '3rem'}}>
                <div className='row'>
                    <div className="col-md-4">
                        <OptionCard img='/images/optionManageOrders.jpg' title='Manage Orders' description='Fulfill or Cancel Orders' />
                    </div>
                    <div className="col-md-4">
                        <OptionCard img='/images/optionManageItems.jpg' title='Manage Items' description='Update or Delete Items' />
                    </div>
                    <div className="col-md-4">
                        <OptionCard img='/images/optionAddItem.jpg' title='Add Items' description='Add new Items' />
                    </div>
                </div>
                <div className='row' style={{marginTop: '1.5rem'}}>
                    <div className="col-md-2"><div className="container"></div></div>
                    <div className="col-md-4">
                        <OptionCard img='/images/optionManageSeat.jpg' title='Manage Seats' description='Update or Delete Seats' />
                    </div>
                    <div className="col-md-6">
                        <OptionCard img='/images/optionSeat.jpg' title='Add Seats' description='Add new Seats' />
                    </div>
                </div>
                
                
                
                
                
            </div>
            
        </PageWrapper>
    )
}

export default Index