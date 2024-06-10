import React, { Fragment } from 'react'

const OurGoals = () => {
  return (
    <Fragment>
        <section className="bg-gray-200 py-20">
    <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What to expect</h2>
            <p className="text-gray-600 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci
                quis justo aliquam euismod eget a leo. Sed eget orci feugiat, porttitor nibh vel, faucibus mauris.
            </p>
        </div>
        <div className="flex flex-wrap -mx-4 mt-12">
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-4">01</div>
                    <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        orci quis justo aliquam euismod eget a leo.</p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-4">02</div>
                    <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        orci quis justo aliquam euismod eget a leo.</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                    <div className="text-4xl font-bold text-purple-600 mb-4">03</div>
                    <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
                        orci quis justo aliquam euismod eget a leo.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    </Fragment>
  )
}

export default OurGoals