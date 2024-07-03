import React from 'react';
import PromoHeading from './PromoHeading';

const Promo = () => {
    const data = {
        heading: '99% off all items',
        callToAction: 'Everything must go'
    }
    return (
        <PromoHeading
            heading={data.heading}
            callToAction={data.callToAction}
        />
    );
};

export default Promo;