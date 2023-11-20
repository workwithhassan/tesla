import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Header />
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                leftButton="Custon Order"
                rightButton="Existing Inventory"
                backgroundImage="model-s.jpg"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                leftButton="Custon Order"
                rightButton="Existing Inventory"
                backgroundImage="model-y.jpg"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                leftButton="Custon Order"
                rightButton="Existing Inventory"
                backgroundImage="model-3.jpg"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                leftButton="Custon Order"
                rightButton="Existing Inventory"
                backgroundImage="model-x.jpg"
            />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                leftButton="Order Now"
                rightButton="Learn More"
                backgroundImage="solar-panel.jpg"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                leftButton="Order Now"
                rightButton="Learn More"
                backgroundImage="solar-roof.jpg"
            />
            <Section
                title="Accessories"
                leftButton="Shop Now"
                backgroundImage="accessories.jpg"
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`

export default Home
