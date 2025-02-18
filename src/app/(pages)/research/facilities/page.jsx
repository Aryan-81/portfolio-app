import Header from '@/components/Header'
import LabEq from './LabEq';


const header_bkimg = '/assets/facilities.jpg';

function Facilities() {
    return (
        <>
        <Header title='Facilities' backgroundImage={header_bkimg} />
        <br></br>
        <LabEq />
        </>
    );
}

export default Facilities