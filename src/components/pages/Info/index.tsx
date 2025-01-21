import './style.scss';

function InfoPage() {
    return (
        <div className="page" id="info">

            <h1>Info</h1>

            <div className="bio">

                <div className="section">
                    E-mail: <a href="mailto:rw3iss@gmail.com">rw3iss@gmail.com</a>
                </div>

                <div className="section">
                    Resume: <a href="/files/resume-ryan-weiss.pdf" target="_blank">View</a>
                </div>
            </div>

        </div>
    );
}

export default InfoPage;