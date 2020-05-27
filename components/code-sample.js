import PropTypes from "prop-types"
import React from "react"
import { Code } from "@elements"
import { useSlots } from "@hooks"
import { DummyJSXExample } from "../stories/dummy-data/dummy-jsx"

export const CodeSample = ({ children, className, ...props }) => {
  /* const Slots = useSlots(children, ["jsx", "code"]) */
  return (
    <div className="relative overflow-hidden mb-8">
      <div
        className={`bg-white rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 p-4 ${className}`}
        {...props}
      >
        <DummyJSXExample />
      </div>
      <Code className="rounded-b-lg bg-gray-800">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="rounded-lg md:w-56"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
              alt="Woman paying for a purchase"
            />
          </div>
          <div class="mt-4 md:mt-0 md:ml-6">
            <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Marketing
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
            >
              Finding customers for your new business
            </a>
            <p class="mt-2 text-gray-600">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </Code>
    </div>
  )
}

CodeSample.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
