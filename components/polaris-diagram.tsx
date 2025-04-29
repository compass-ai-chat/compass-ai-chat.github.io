import { Lock, User } from "lucide-react";

export default function PolarisDiagram() {
  // Arrow component that can be reused with different positions and rotations
  const Arrow = ({ x, y, rotation }: { x: string, y: string, rotation: string }) => (
    <g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
      
      <path d="M0,-10 L-5,-5 L0,-15 L5,-5 Z" fill="#10b981" />
    </g>
  );

  return (
    <div className="w-full max-w-2xl mx-auto my-12 relative">
      <div className="aspect-square w-full relative">
        
        {/* Provider icons at the top outside the circle */}
        <div className="absolute top-0 left-1/3 flex flex-col items-center z-10">
          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-300 rounded-lg shadow-sm p-2">
            <img
              src="./images/providers/google.png"
              alt="Google logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Google
          </span>
        </div>
        
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-300 rounded-lg shadow-sm p-2">
            <img
              src="./images/providers/openai.png"
              alt="OpenAI logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            OpenAI
          </span>
        </div>
        
        <div className="absolute top-0 right-1/3 flex flex-col items-center z-10">
          <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-300 rounded-lg shadow-sm p-2">
            <img
              src="./images/providers/anthropic.jpeg"
              alt="Anthropic logo"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
            Anthropic
          </span>
        </div>
        
        {/* Dotted circle container */}
        <div className="absolute top-[25%] bottom-[5%] left-[5%] right-[5%] rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
          
          {/* Lock icon embedded in the circle border (top) */}
          <div className="absolute top-1/4 left-0 bg-gray-50 dark:bg-gray-900 p-2 rounded-full">
            <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
              <Lock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          
          
          {/* Polaris diamond in the center with rounded corners */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-2/3 rotate-45 bg-white dark:bg-gray-800 border-2 border-emerald-500 p-8 flex items-center justify-center" style={{ borderRadius: '15%', width: '100px', height: '100px' }}>
            <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "0px", left: "0px" }}>
                    <defs>
                    <linearGradient id="centerGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    </defs>
                    <path d="M0,0 L-100,-100" stroke="url(#centerGradient)" strokeWidth="2" fill="#f59e0b" />
                    <path d="M0,0 L-140,-40" stroke="url(#centerGradient)" strokeWidth="2" fill="#f59e0b" />
                    <path d="M0,0 L-40,-140" stroke="url(#centerGradient)" strokeWidth="2" fill="#f59e0b" />
                    <Arrow x="-100" y="-100" rotation="-45" />
                    <Arrow x="-140" y="-40" rotation="-45" />
                    <Arrow x="-40" y="-140" rotation="-45" />
            </svg>
            <div className="rotate-[-45deg] text-emerald-500 font-bold text-xl flex flex-col items-center">
              <div className="text-emerald-500 mb-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              Polaris
            </div>
          </div>
          
          {/* Compass icons pointing to Polaris */}
          <div className="absolute bottom-[5%] flex flex-col items-center">
            <div className="relative">
              <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "5px", left: "0px" }}>
                <defs>
                  <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
                <path d="M30,-5 L31,-30" stroke="url(#leftGradient)" strokeWidth="2" fill="none" />
                <Arrow x="30" y="-30" rotation="0" />
              </svg>
              <img
                src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                alt="Compass Logo"
                className="h-16 mb-2"
              />
            </div>
           
            <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
              <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          
          <div className="absolute bottom-[25%] left-[20%] flex items-center">
            <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
              <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="relative">
              <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "5px", left: "60px" }}>
                <defs>
                  <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path d="M0,0 L40,-30" stroke="url(#leftGradient)" strokeWidth="2" fill="none" />
                <Arrow x="40" y="-30" rotation="40" />
              </svg>
              <img
                src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                alt="Compass Logo"
                className="h-16 mr-2"
              />
            </div>
          </div>
          
          <div className="absolute bottom-[25%] right-[20%] flex items-center">
            <div className="relative">
              <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "5px", left: "15px" }}>
                <defs>
                  <linearGradient id="rightGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path d="M0,0 L-40,-30" stroke="url(#leftGradient)" strokeWidth="2" fill="none" />
                <Arrow x="-40" y="-30" rotation="-40" />
              </svg>
              <img
                src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                alt="Compass Logo"
                className="h-16 ml-2"
              />
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
              <User className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          
          {/* Ollama provider with arrow from Polaris */}
          <div className="absolute top-1/3 right-[15%] -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
                <svg className="absolute" width="100" height="100" overflow="visible" style={{top:"30px",left:"-35px"}}>
                <Arrow x="-30" y="0" rotation="90" />
                <path d="M-30,0 L-70,1" stroke="url(#leftGradient)" strokeWidth="2" fill="none" />
                </svg>
            </div>
            <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-300 rounded-lg shadow-sm p-2">
              <img
                src="./images/providers/ollama.png"
                alt="Ollama logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="mt-2 text-gray-700 dark:text-gray-300 text-sm font-medium">
              Ollama AI
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
} 