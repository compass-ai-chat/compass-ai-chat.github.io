import { Lock, User, Sparkles } from "lucide-react";

export default function PolarisDiagram() {
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

  // Define the amber pulse gradient for Polaris connections
  const AmberPulseGradient = () => (
    <linearGradient id="amberPulseGradient" x1="100%" y1="0%" x2="0%" y2="0%">
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
      {/* Add a fixed size container with responsive scaling */}
      <div className="relative w-[600px] h-[600px] mx-auto transform origin-top-center md:scale-100 sm:scale-75 scale-50 origin-center">
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
          <div className="absolute top-[25%] bottom-[5%] left-[5%] right-[5%] rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
            
            {/* Lock icon embedded in the circle border (top) */}
            <div className="absolute top-[10%] left-[5%] bg-gray-50 dark:bg-gray-900 p-2 rounded-full">
              <div className="bg-emerald-100 dark:bg-emerald-900 p-3 rounded-full">
                <Lock className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            
            
            {/* Polaris diamond in the center with rounded corners */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-2/3 rotate-45 bg-white dark:bg-gray-800 border-2 border-emerald-500 p-8 flex items-center justify-center" style={{ borderRadius: '15%', width: '100px', height: '100px' }}>
              <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "0px", left: "0px" }}>
                      <defs>
                        <AmberPulseGradient />
                      </defs>
                      
                      {/* Base dashed lines */}
                      <path d="M0,0 L-58,-58" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 2" />
                      <path d="M0,0 L-90,-10" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 2" />
                      <path d="M0,0 L-10,-90" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 2" />
                      
                      {/* Animated pulse overlays */}
                      <path d="M0,0 L-58,-58" stroke="url(#amberPulseGradient)" strokeWidth="3" fill="none">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-45 0 0" dur="0.01s" repeatCount="1" />
                      </path>
                      <path d="M0,0 L-90,-10" stroke="url(#amberPulseGradient)" strokeWidth="3" fill="none">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-80 0 0" dur="0.01s" repeatCount="1" />
                      </path>
                      <path d="M0,0 L-10,-90" stroke="url(#amberPulseGradient)" strokeWidth="3" fill="none">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-8 0 0" dur="0.01s" repeatCount="1" />
                      </path>
                      
                      <Arrow x="-52" y="-52" rotation="-45" color="#f59e0b" />
                      <Arrow x="-84" y="-9" rotation="-80" color="#f59e0b" />
                      <Arrow x="-9" y="-84" rotation="-8" color="#f59e0b" />
              </svg>
              <div className="rotate-[-45deg] text-emerald-500 font-bold text-xl flex flex-col items-center">
                <div className="text-emerald-500 mb-1">
                  <Sparkles className="h-6 w-6 fill-current" />
                </div>
                Polaris
              </div>
            </div>
            
            {/* Compass icons pointing to Polaris */}
            <div className="absolute bottom-[5%] flex flex-col items-center">
              <div className="relative">
                <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "5px", left: "2px" }}>
                  <defs>
                    <PulseGradient id="downUpNormalPulseGradient" x1="0%" y1="100%" x2="0%" y2="0%" />
                  </defs>
                  {/* Base line */}
                  <path d="M30,0 L30,-80" stroke="#10b981" strokeWidth="2" strokeOpacity="0.3" fill="none" />
                  {/* Animated pulse overlay */}
                  <path d="M31,0 L30,-80" stroke="url(#downUpNormalPulseGradient)" strokeWidth="3" fill="none" />
                  <Arrow x="30" y="-70" rotation="0" color="#10b981" />
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
                <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "10px", left: "50px" }}>
                <defs>
                    <PulseGradient id="leftRightNormalPulseGradient" x1="0%" y1="0%" x2="100%" y2="0%" />
                  </defs>
                  {/* Base line */}
                  <path d="M0,0 L50,-60" stroke="#10b981" strokeWidth="2" strokeOpacity="0.3" fill="none" />
                  {/* Animated pulse overlay */}
                  <path d="M0,0 L50,-60" stroke="url(#leftRightNormalPulseGradient)" strokeWidth="3" fill="none" />
                  <Arrow x="44" y="-52" rotation="40" color="#10b981" />
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
                <svg className="absolute" width="100" height="100" overflow="visible" style={{ top: "10px", left: "20px" }}>
                <defs>
                    <PulseGradient id="rightLeftNormalPulseGradient" x1="100%" y1="0%" x2="0%" y2="0%" />
                  </defs>
                  {/* Base line */}
                  <path d="M0,0 L-50,-60" stroke="#10b981" strokeWidth="2" strokeOpacity="0.3" fill="none" />
                  {/* Animated pulse overlay */}
                  <path d="M0,0 L-50,-60" stroke="url(#rightLeftNormalPulseGradient)" strokeWidth="3" fill="none" />
                  <Arrow x="-44" y="-52" rotation="-40" color="#10b981" />
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
                    
                  {/* Base line */}
                  <path d="M-10,0 L-57,0" stroke="#10b981" strokeWidth="2" strokeOpacity="0.3" fill="none" />
                  {/* Animated pulse overlay */}
                  <path d="M-10,0 L-57,1" stroke="url(#leftRightNormalPulseGradient)" strokeWidth="3" fill="none" />
                  <Arrow x="-20" y="0" rotation="90" color="#10b981" />
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