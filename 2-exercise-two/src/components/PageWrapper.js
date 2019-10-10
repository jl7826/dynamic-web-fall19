import React from 'react'

export default function PageWrapper({ cloudy, children }) {
    const wrapperOpacity = cloudy ? (cloudy * 0.01) : 0;

    return (
        <div style={{
            backgroundColor: `rgba(0,0,0,${wrapperOpacity})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            {children}
        </div>
    )
}
