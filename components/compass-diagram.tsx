import { Lock, User, Sparkles } from "lucide-react";

export default function CompassDiagram() {
  // Arrow component that can be reused with different positions and rotations
  const Arrow = ({ x, y, rotation, color }: { x: string, y: string, rotation: string, color: string }) => (
    <g transform={`translate(${x}, ${y}) rotate(${rotation})`}>
      <path d="M0,-10 L-5,-5 L0,-15 L5,-5 Z" fill={color} />
    </g>
  );

  // Define the pulse gradient once to be reused
  const PulseGradient = ({ id, x1 = "100%", y1 = "0%", x2 = "0%", y2 = "0%" }: { id?: string, x1?: string, y1?: string, x2?: string, y2?: string }) => (
    <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
      <stop offset="0%" stopColor="rgba(16, 185, 129, 0.1)">
        <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
      </stop>
      <stop offset="20%" stopColor="rgba(16, 185, 129, 0.8)">
        <animate attributeName="offset" values="0.2;1.2" dur="2s" repeatCount="indefinite" />
      </stop>
      <stop offset="40%" stopColor="rgba(16, 185, 129, 0.1)">
        <animate attributeName="offset" values="0.4;1.4" dur="2s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
  );

  const AmberPulseGradient = ({ id, x1 = "100%", y1 = "0%", x2 = "0%", y2 = "0%" }: { id?: string, x1?: string, y1?: string, x2?: string, y2?: string }) => (
    <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2}>
      <stop offset="0%" stopColor="rgba(245, 158, 11, 0.1)">
        <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
      </stop>
      <stop offset="20%" stopColor="rgba(245, 158, 11, 0.8)">
        <animate attributeName="offset" values="0.2;1.2" dur="2s" repeatCount="indefinite" />
      </stop>
      <stop offset="40%" stopColor="rgba(245, 158, 11, 0.1)">
        <animate attributeName="offset" values="0.4;1.4" dur="2s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
  );

  return (
    <div className="w-full overflow-hidden flex justify-center">
      <div className="inline-block">
      <div className="w-[600px] h-[500px] relative mx-auto md:transform-none sm:scale-75 scale-50 sm:origin-center origin-center">
        <div className="absolute inset-0">
          {/* Provider icons at the top outside the circle */}
          <div className="absolute top-[5%] left-1/4 flex flex-col items-center z-10">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
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
          
          <div className="absolute top-[0%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
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
          
          <div className="absolute top-[5%] right-1/4 flex flex-col items-center z-10">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
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
          <div className="absolute top-[30%] bottom-[35%] left-[15%] right-[15%] rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
            
            {/* Lock icon embedded in the circle border (top) */}
            <div className="absolute top-[10%] -left-[4%] bg-gray-50 dark:bg-gray-900 p-2 rounded-full">
              <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                <Lock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            
            
            {/* Polaris diamond in the center with rounded corners */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 p-8 flex items-center justify-center" style={{ borderRadius: '15%', width: '100px', height: '100px' }}>
              <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "0px", left: "0px" }}>
                      <defs>
                      
                      <AmberPulseGradient id="downUpPulseGradient" x1="0%" y1="100%" x2="0%" y2="0%" />
                      <AmberPulseGradient id="rightLeftPulseGradient" x1="100%" y1="0%" x2="0%" y2="0%" />
                      <AmberPulseGradient id="leftRightPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%" />
                      </defs>
                      <path d="M0,0 L-50,-50" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" strokeDasharray="4 2" strokeOpacity="0.5" />
                      <path d="M0,0 L-50,-50" stroke="url(#downUpPulseGradient)" strokeWidth="3" fill="none" />
                      <path d="M0,0 L-70,0" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" strokeDasharray="4 2" strokeOpacity="0.5" />
                      <path d="M0,0 L-70,1" stroke="url(#rightLeftPulseGradient)" strokeWidth="3" fill="none" />
                      <path d="M0,0 L0,-70" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" strokeDasharray="4 2" strokeOpacity="0.5" />
                      <path d="M0,0 L1,-71" stroke="url(#downUpPulseGradient)" strokeWidth="3" fill="none" />
                      <Arrow x="-42" y="-42" rotation="-45" color="#f59e0b" />
                      <Arrow x="-60" y="1" rotation="-85" color="#f59e0b" />
                      <Arrow x="1" y="-60" rotation="-8" color="#f59e0b" />
              </svg>
              <div className="rotate-[-45deg] text-emerald-500 font-bold text-xl flex flex-col items-center">
                <div className="text-emerald-500 mb-1">
                <img
                  src="https://github.com/nordwestt/compass/blob/master/assets/compass.png?raw=true"
                  alt="Compass Logo"
                  className="h-16 mb-2"
                />
                </div>
                Compass
              </div>
            </div>
            
            
            
            {/* Ollama provider with arrow from Polaris */}
            <div className="absolute top-1/2 right-[15%] -translate-y-1/2 flex flex-col items-center">
              <div className="relative">
                  <svg className="absolute" width="100" height="100" overflow="visible" style={{top:"30px",left:"-35px"}}>
                  <defs>
                    <PulseGradient id="leftRightNormalPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%" />
                  </defs>
                  <Arrow x="-20" y="0" rotation="90" color="#10b981" />
                  <path d="M-10,0 L-50,0" stroke="#10b981" strokeWidth="2" fill="none" strokeOpacity="0.5" />
                  <path d="M-10,0 L-50,1" stroke="url(#leftRightNormalPulseGradient)" strokeWidth="3" fill="none" />
                  </svg>
              </div>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-2">
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
      </div>
    </div>
  );
} 