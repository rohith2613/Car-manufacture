import { useState } from 'react';
import { FaSearch, FaClipboardCheck, FaPencilAlt, FaTools, FaShoppingCart } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import phaseData from '../phaseData';
import './TimelineMindmap.css'; // Import CSS for animations

const TimelineMindmap = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);

  const handlePhaseClick = (phaseName) => {
    setSelectedPhase(phaseData[phaseName]);
  };

  return (
  
   
    <div className="flex justify-center items-center min-h-screen bg-slate-900">
      
      <div className="flex flex-col items-center  mr-8">
      
        {Object.keys(phaseData).map(phaseName => (
          
          <CSSTransition
            key={phaseData[phaseName].id}
            timeout={300}
            classNames="fade"
          >
            
            <div 
              className={`phase-item cursor-pointer w-36 h-24 rounded-full flex flex-col items-center justify-center mb-4 hover:bg-red-500 ${selectedPhase && selectedPhase.id === phaseData[phaseName].id ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => handlePhaseClick(phaseName)}
            >
              {/* Icon */}
              {phaseData[phaseName].id === 1 && <FaSearch className="text-xl" />}
              {phaseData[phaseName].id === 2 && <FaClipboardCheck className="text-xl" />}
              {phaseData[phaseName].id === 3 && <FaPencilAlt className="text-xl" />}
              {phaseData[phaseName].id === 4 && <FaTools className="text-xl" />}
              {phaseData[phaseName].id === 5 && <FaShoppingCart className="text-xl" />}
              
              {/* Heading */}
              <h3 className="text-sm font-semibold mt-2 ">{phaseName}</h3>
            </div>
            
          </CSSTransition>
          
         
        ))}
      
      </div>
      
      <div className="flex flex-col items-center justify-center p-2">
  <CSSTransition
    in={selectedPhase !== null}
    timeout={300}
    classNames="fade"
    unmountOnExit
  >
    <div className="w-full md:w-96">
      {/* Render selected phase details below the steps on mobile */}
      <div className="md:hidden">
        <div className="h-auto bg-slate-800 p-6 rounded-xl">
          <div className="p-1 mb-4">
            {selectedPhase && selectedPhase.url && <img src={selectedPhase.url} alt="" />}
          </div>
          <div className="text-xl font-bold text-gray-200 mb-2">{selectedPhase ? selectedPhase.description : ''}</div>
          <div className="text-lg text-white">
            {selectedPhase ? (
              <ul className="list-disc pl-6">
                {selectedPhase.keyActivities.map((activity, index) => (
                  <li key={index} className="space-x-4">
                    {activity}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      {/* Render selected phase details side by side with steps on larger screens */}
      <div className="hidden md:flex md:flex-row md:justify-center md:items-start md:gap-8">
        <div className="flex flex-col items-center justify-center bg-slate-800 p-6 rounded-xl">
          <div className="p-1 mb-4">
            {selectedPhase && selectedPhase.url && <img src={selectedPhase.url} alt="" />}
          </div>
          <div className="text-xl font-bold text-gray-200 mb-2">{selectedPhase ? selectedPhase.description : ''}</div>
          <div className="text-lg text-white">
            {selectedPhase ? (
              <ul className="list-disc pl-6">
                {selectedPhase.keyActivities.map((activity, index) => (
                  <li key={index} className="space-x-4">
                    {activity}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </CSSTransition>
</div>
    </div>
   
  );
};

export default TimelineMindmap;
