import React, { Fragment } from 'react'

const Heading = ({ heading }) => {
    return (
        <Fragment>
            <div className=" pt-10 pb-5">
                <span className="relative flex justify-center">
                    <div
                        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                    ></div>

                    <span className="relative z-10 bg-white px-6 text-2xl font-medium text-dark">{heading}</span>
                </span>
            </div>

        </Fragment>
    )
}

export default Heading