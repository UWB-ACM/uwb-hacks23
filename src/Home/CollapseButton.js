import React from 'react';
import './Home.css';
import 'tailwindcss/tailwind.css';

function CollapseButton(props) {
  return (
    <div className="pt-2 pb-3">
      <p className="mb-3 space-y-1 md:space-x-1 md:space-y-0">
        <button
          className="text-left shadow-purple drop-shadow-lg rounded bg-pink-400 px-6 pt-2.5 pb-2 text-3xl font-SecularOne hover:bg-opacity-80 
             text-purple w-full
            shadow-[0_4px_9px_-4px_#ac82ff] 
            transition duration-150 ease-in-out "
          type="button"
          data-te-collapse-init
          data-te-ripple-init
          data-te-ripple-color="light"
          data-te-target={"#" + props.buttonID}
          aria-expanded="false"
          aria-controls={props.buttonID}
        >
          {props.buttonText}
        </button>
      </p>
      <div
        className="!visible hidden rounded-lg shadow-lg"
        id={props.buttonID}
        data-te-collapse-item
      >
        <div className="block rounded-lg bg-purple font-SecularOne text-white p-6 text-2xl font-normal">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default CollapseButton;