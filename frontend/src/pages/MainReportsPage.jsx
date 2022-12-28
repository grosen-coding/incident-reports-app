import { Link } from 'react-router-dom'
import { FaPaw, FaRegListAlt} from 'react-icons/fa'

function MainReportsPage() {
    return (

        <section className='wrapper'>

            <div className="main-reports-container">
                <div className="main-reports-heading">
                    <h1><strong>K<span className='logo--nine'>9</span>PAWS</strong> Progress Reporting</h1>
                    <p>Congratulations and Welcome on joining the <strong>K<span className='logo--nine-sm'>9</span>PAWS</strong> training team! The most efficient way of achieving success through our training program is by tracking your progress. Our reporting system allows you to keep a detailed record of the progress we make throughout our journey, and allows our trainers to quickly address, and respond to, your reports.</p>
                    <p>Remember to always call us with any questions while you're becoming familiar with how the reporting system works.</p>
                </div>

                <div className='main-reports-buttons'>
                    <Link to="/reports/new-report" className='btn btn-reverse btn-block btn-reports'>
                        <FaPaw /> Create New Report
                    </Link>

                    <Link to="/reports/current-reports" className='btn btn-block btn-reports'>
                        <FaRegListAlt /> View My Current Reports
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MainReportsPage