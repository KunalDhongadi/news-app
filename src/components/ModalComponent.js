import React, { useContext} from 'react'
import { MyContext } from '../myContext';
import { toast } from 'react-toastify';

const ModalComponent = ({type,data, showModal, setShowModal}) => {


    const { setRegion, setLanguage} = useContext(MyContext);


    const toastClasses = "the-toast font-medium test-stone-700 bg-stone-100 border border-stone-300 rounded-none shadow-none text-center";

    // function to set new state values of language/region
    const setStates = (value) => {
        if(type==="Language"){
            setLanguage(value);
            localStorage.setItem("language", value);
            toast("Language changed to " + Object.keys(data).find(
                (key) => data[key] === value
              ), {className:toastClasses});
        }else{
            setRegion(value);
            localStorage.setItem("region", value);
            toast("Region changed to " + Object.keys(data).find(
                (key) => data[key] === value
              ), {className:toastClasses});
        }
        setShowModal(false);
    }

  return(
    <div id="small-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:inset-0 h-full bg-stone-400 bg-opacity-40">
    <div className="relative w-full max-w-md my-16 max-h-full mx-auto">
        <div className="relative bg-stone-100 border-stone-400 shadow max-h-[80vh] overflow-y-hidden dark:bg-slate-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t border-stone-400">
                <h3 className="text-xl font-semibold text-stone-700 dark:text-white">
                    Select {type}
                </h3>
                <button type="button" className="text-stone-400 bg-transparent hover:bg-stone-200 hover:text-slate-900  text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-slate-600 dark:hover:text-white" onClick={() => setShowModal(false)}>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-4 space-y-6 overflow-y-auto max-h-[calc(80vh-4rem)]">
            <div className="grid grid-cols-2 text-sm"
                  >
                    {Object.keys(data).map((d) => (
                        <div key={d} className='p-2 font-semibold text-stone-500 border border-transparent hover:text-stone-700 hover:border-stone-700 cursor-pointer' onClick={() => setStates(data[d])}>{d}</div>
                    ))}
                  </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default ModalComponent