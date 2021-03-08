import React from 'react'
import  Container  from 'react-bootstrap/Container'

function Stats() {
    return (
        <Container>
        <div>
            <h1>StynkStats</h1>
        </div>
        <div className="boxed">
            <div class="row justify-content-md-center">
            <div class="col-md-auto">
                Top 10 StynkFan Strains
            </div>
        </div>
        </div>
        <div className="boxed">
            <div class="row justify-content-md-center">
            <div class="col-md-auto">
                Top 5 StynkFan Hybrid
            </div>
        </div>
        </div>
        <div className="boxed">
            <div class="row justify-content-md-center">
            <div class="col-md-auto">
                Top 5 StynkFan Indica
            </div>
        </div>
        </div>
        <div className="boxed">
            <div class="row justify-content-md-center">
            <div class="col-md-auto">
                Top 5 StynkFan Sativa
            </div>
        </div>
        </div>
        </Container>
    )
}

export default Stats
